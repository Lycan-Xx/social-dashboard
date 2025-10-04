// OAuth Service for Social Media Platform Authentication

interface OAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scope: string[];
}

interface OAuthToken {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
  tokenType: string;
}

class OAuthService {
  private configs: Record<string, OAuthConfig> = {
    facebook: {
      clientId: import.meta.env.VITE_FACEBOOK_APP_ID || '',
      clientSecret: import.meta.env.VITE_FACEBOOK_APP_SECRET || '',
      redirectUri: `${window.location.origin}/auth/facebook/callback`,
      scope: ['pages_read_engagement', 'pages_show_list', 'instagram_basic']
    },
    twitter: {
      clientId: import.meta.env.VITE_TWITTER_API_KEY || '',
      clientSecret: import.meta.env.VITE_TWITTER_API_SECRET || '',
      redirectUri: `${window.location.origin}/auth/twitter/callback`,
      scope: ['tweet.read', 'users.read', 'follows.read']
    },
    linkedin: {
      clientId: import.meta.env.VITE_LINKEDIN_CLIENT_ID || '',
      clientSecret: import.meta.env.VITE_LINKEDIN_CLIENT_SECRET || '',
      redirectUri: `${window.location.origin}/auth/linkedin/callback`,
      scope: ['r_liteprofile', 'r_emailaddress', 'w_member_social']
    }
  };

  // Generate OAuth URL for platform
  getAuthUrl(platform: string): string {
    const config = this.configs[platform];
    if (!config) {
      throw new Error(`Unsupported platform: ${platform}`);
    }

    const params = new URLSearchParams({
      client_id: config.clientId,
      redirect_uri: config.redirectUri,
      scope: config.scope.join(' '),
      response_type: 'code',
      state: this.generateState()
    });

    const baseUrls: Record<string, string> = {
      facebook: 'https://www.facebook.com/v18.0/dialog/oauth',
      twitter: 'https://twitter.com/i/oauth2/authorize',
      linkedin: 'https://www.linkedin.com/oauth/v2/authorization'
    };

    return `${baseUrls[platform]}?${params.toString()}`;
  }

  // Exchange authorization code for access token
  async exchangeCodeForToken(platform: string, code: string): Promise<OAuthToken> {
    const config = this.configs[platform];
    if (!config) {
      throw new Error(`Unsupported platform: ${platform}`);
    }

    const tokenUrls: Record<string, string> = {
      facebook: 'https://graph.facebook.com/v18.0/oauth/access_token',
      twitter: 'https://api.twitter.com/2/oauth2/token',
      linkedin: 'https://www.linkedin.com/oauth/v2/accessToken'
    };

    const body = new URLSearchParams({
      client_id: config.clientId,
      client_secret: config.clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: config.redirectUri
    });

    try {
      const response = await fetch(tokenUrls[platform], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        body: body.toString()
      });

      if (!response.ok) {
        throw new Error(`Token exchange failed: ${response.statusText}`);
      }

      const data = await response.json();
      
      return {
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        expiresIn: data.expires_in,
        tokenType: data.token_type || 'Bearer'
      };
    } catch (error) {
      console.error(`${platform} token exchange error:`, error);
      throw new Error(`Failed to exchange code for ${platform} token`);
    }
  }

  // Refresh access token
  async refreshToken(platform: string, refreshToken: string): Promise<OAuthToken> {
    const config = this.configs[platform];
    if (!config) {
      throw new Error(`Unsupported platform: ${platform}`);
    }

    const tokenUrls: Record<string, string> = {
      facebook: 'https://graph.facebook.com/v18.0/oauth/access_token',
      twitter: 'https://api.twitter.com/2/oauth2/token',
      linkedin: 'https://www.linkedin.com/oauth/v2/accessToken'
    };

    const body = new URLSearchParams({
      client_id: config.clientId,
      client_secret: config.clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token'
    });

    try {
      const response = await fetch(tokenUrls[platform], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        body: body.toString()
      });

      if (!response.ok) {
        throw new Error(`Token refresh failed: ${response.statusText}`);
      }

      const data = await response.json();
      
      return {
        accessToken: data.access_token,
        refreshToken: data.refresh_token || refreshToken,
        expiresIn: data.expires_in,
        tokenType: data.token_type || 'Bearer'
      };
    } catch (error) {
      console.error(`${platform} token refresh error:`, error);
      throw new Error(`Failed to refresh ${platform} token`);
    }
  }

  // Store tokens securely
  storeTokens(platform: string, tokens: OAuthToken): void {
    const tokenData = {
      ...tokens,
      expiresAt: Date.now() + (tokens.expiresIn * 1000)
    };
    
    localStorage.setItem(`${platform}_tokens`, JSON.stringify(tokenData));
  }

  // Retrieve stored tokens
  getStoredTokens(platform: string): OAuthToken | null {
    const stored = localStorage.getItem(`${platform}_tokens`);
    if (!stored) return null;

    try {
      const tokenData = JSON.parse(stored);
      
      // Check if token is expired
      if (Date.now() > tokenData.expiresAt) {
        this.removeTokens(platform);
        return null;
      }

      return {
        accessToken: tokenData.accessToken,
        refreshToken: tokenData.refreshToken,
        expiresIn: tokenData.expiresIn,
        tokenType: tokenData.tokenType
      };
    } catch (error) {
      console.error(`Error parsing stored tokens for ${platform}:`, error);
      return null;
    }
  }

  // Remove stored tokens
  removeTokens(platform: string): void {
    localStorage.removeItem(`${platform}_tokens`);
  }

  // Generate random state for OAuth security
  private generateState(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }

  // Validate state parameter
  validateState(receivedState: string): boolean {
    const storedState = sessionStorage.getItem('oauth_state');
    sessionStorage.removeItem('oauth_state');
    return storedState === receivedState;
  }

  // Store state for validation
  storeState(state: string): void {
    sessionStorage.setItem('oauth_state', state);
  }
}

export default new OAuthService();