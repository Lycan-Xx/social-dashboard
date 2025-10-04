# Social Media API Integration Guide

This guide provides step-by-step instructions for integrating with major social media platforms.

## Prerequisites

- Node.js 20.19+ or 22.12+
- A domain with HTTPS enabled
- Developer accounts on each platform

## Platform Setup

### 1. Facebook/Instagram (Meta)

#### Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "Create App" → "Business" → "Next"
3. Enter app name and contact email
4. Add "Facebook Login" and "Instagram Basic Display" products

#### Configure Facebook Login
1. Go to Facebook Login → Settings
2. Add Valid OAuth Redirect URIs:
   - `https://yourdomain.com/auth/facebook/callback`
   - `http://localhost:5173/auth/facebook/callback` (development)

#### Configure Instagram Basic Display
1. Go to Instagram Basic Display → Basic Display
2. Add Instagram Test Users
3. Add Redirect URIs (same as Facebook)

#### Get API Keys
- App ID: Found in App Settings → Basic
- App Secret: Found in App Settings → Basic (click "Show")

### 2. Twitter/X

#### Create Twitter App
1. Go to [Twitter Developer Portal](https://developer.twitter.com/)
2. Apply for developer account if needed
3. Create new project and app
4. Enable OAuth 2.0

#### Configure OAuth 2.0
1. Go to App Settings → User authentication settings
2. Enable OAuth 2.0
3. Set callback URLs:
   - `https://yourdomain.com/auth/twitter/callback`
   - `http://localhost:5173/auth/twitter/callback`

#### Get API Keys
- API Key: Found in Keys and tokens
- API Secret Key: Found in Keys and tokens
- Bearer Token: Found in Keys and tokens

### 3. LinkedIn

#### Create LinkedIn App
1. Go to [LinkedIn Developers](https://www.linkedin.com/developers/)
2. Create new app
3. Fill in company information
4. Add "Sign In with LinkedIn" product

#### Configure OAuth
1. Go to Auth tab
2. Add Authorized redirect URLs:
   - `https://yourdomain.com/auth/linkedin/callback`
   - `http://localhost:5173/auth/linkedin/callback`

#### Get API Keys
- Client ID: Found in Auth tab
- Client Secret: Found in Auth tab

## Environment Configuration

Create a `.env` file in your project root:

```env
# Facebook/Meta
VITE_FACEBOOK_APP_ID=your_app_id
VITE_FACEBOOK_APP_SECRET=your_app_secret

# Twitter/X
VITE_TWITTER_API_KEY=your_api_key
VITE_TWITTER_API_SECRET=your_api_secret
VITE_TWITTER_BEARER_TOKEN=your_bearer_token

# LinkedIn
VITE_LINKEDIN_CLIENT_ID=your_client_id
VITE_LINKEDIN_CLIENT_SECRET=your_client_secret
```

## Implementation

### OAuth Flow

1. **Initiate OAuth**: Redirect user to platform's authorization URL
2. **Handle Callback**: Exchange authorization code for access token
3. **Store Tokens**: Securely store access and refresh tokens
4. **Make API Calls**: Use tokens to fetch user data

### Example Usage

```typescript
import oauthService from './services/oauthService';
import socialMediaAPI from './services/socialMediaAPI';

// Initiate Facebook OAuth
const facebookAuthUrl = oauthService.getAuthUrl('facebook');
window.location.href = facebookAuthUrl;

// Handle callback (in your callback route)
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

if (code) {
  const tokens = await oauthService.exchangeCodeForToken('facebook', code);
  oauthService.storeTokens('facebook', tokens);
  
  // Fetch user data
  const userData = await socialMediaAPI.getFacebookData(tokens.accessToken);
}
```

## Security Best Practices

### 1. Token Security
- Store tokens encrypted
- Use HTTPS for all API calls
- Implement token rotation
- Set appropriate token expiration

### 2. Rate Limiting
- Respect platform rate limits
- Implement exponential backoff
- Cache responses when possible

### 3. Data Protection
- Encrypt sensitive data
- Implement data retention policies
- Follow GDPR/CCPA guidelines
- Anonymize user data when possible

### 4. Error Handling
- Handle API errors gracefully
- Log errors for monitoring
- Provide user-friendly error messages
- Implement retry mechanisms

## Platform-Specific Considerations

### Facebook/Instagram
- Use Graph API v18.0 or later
- Request minimal permissions needed
- Handle pagination for large datasets
- Respect user privacy settings

### Twitter/X
- Use API v2 endpoints
- Handle rate limiting (300 requests/15 min)
- Implement proper error handling
- Consider premium API for higher limits

### LinkedIn
- Use v2 API endpoints
- Request appropriate member permissions
- Handle company page data separately
- Respect professional context

## Testing

### Development Testing
1. Use platform sandbox/test environments
2. Test with test users/accounts
3. Verify OAuth flows work correctly
4. Test error scenarios

### Production Testing
1. Test with real accounts
2. Monitor API usage and limits
3. Test token refresh mechanisms
4. Verify data accuracy

## Monitoring and Analytics

### Key Metrics to Track
- API response times
- Error rates by platform
- Token refresh success rates
- User engagement with connected accounts

### Logging
- Log all API calls (without sensitive data)
- Monitor rate limit usage
- Track authentication failures
- Log security events

## Troubleshooting

### Common Issues
1. **Invalid Redirect URI**: Ensure URLs match exactly in platform settings
2. **Token Expired**: Implement automatic token refresh
3. **Rate Limit Exceeded**: Implement proper rate limiting and backoff
4. **Permissions Denied**: Request minimal required permissions

### Debug Mode
Enable debug mode in development:
```env
VITE_DEBUG_MODE=true
```

This will log additional information to help with troubleshooting.

## Compliance

### Platform Policies
- Review and comply with each platform's developer policies
- Regularly update to latest policy versions
- Implement required data handling practices
- Respect user privacy and consent

### Legal Requirements
- GDPR compliance for EU users
- CCPA compliance for California users
- Implement proper consent mechanisms
- Provide data deletion capabilities

## Support

For platform-specific issues:
- [Facebook Developer Support](https://developers.facebook.com/support/)
- [Twitter Developer Support](https://developer.twitter.com/en/support)
- [LinkedIn Developer Support](https://www.linkedin.com/help/linkedin/topics/6424/6487)

For this implementation:
- Check the GitHub issues
- Review the documentation
- Contact the development team