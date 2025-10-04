// Security Configuration and Best Practices

export const SecurityConfig = {
  // API Rate Limiting
  rateLimits: {
    facebook: {
      requestsPerHour: 200,
      requestsPerDay: 25000
    },
    instagram: {
      requestsPerHour: 200,
      requestsPerDay: 25000
    },
    twitter: {
      requestsPerHour: 300,
      requestsPerDay: 500000
    },
    linkedin: {
      requestsPerHour: 100,
      requestsPerDay: 100000
    }
  },

  // Token Security
  tokenSecurity: {
    // Encrypt tokens before storing
    encryptTokens: true,
    // Rotate tokens every 24 hours
    tokenRotationInterval: 24 * 60 * 60 * 1000,
    // Use secure storage
    useSecureStorage: true
  },

  // CORS Configuration
  cors: {
    allowedOrigins: [
      'https://yourdomain.com',
      'https://www.yourdomain.com',
      process.env.NODE_ENV === 'development' ? 'http://localhost:5173' : null
    ].filter(Boolean),
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  },

  // Content Security Policy
  csp: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", 'https://connect.facebook.net'],
    styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
    imgSrc: ["'self'", 'data:', 'https:'],
    connectSrc: [
      "'self'",
      'https://graph.facebook.com',
      'https://graph.instagram.com',
      'https://api.twitter.com',
      'https://api.linkedin.com'
    ],
    fontSrc: ["'self'", 'https://fonts.gstatic.com'],
    objectSrc: ["'none'"],
    mediaSrc: ["'self'"],
    frameSrc: ["'none'"]
  },

  // Data Protection
  dataProtection: {
    // Encrypt sensitive data
    encryptSensitiveData: true,
    // Data retention period (in days)
    dataRetentionPeriod: 90,
    // Anonymize user data
    anonymizeUserData: true,
    // GDPR compliance
    gdprCompliant: true,
    // CCPA compliance
    ccpaCompliant: true
  },

  // Authentication Security
  auth: {
    // JWT token expiration (in seconds)
    jwtExpiration: 3600,
    // Refresh token expiration (in days)
    refreshTokenExpiration: 30,
    // Maximum login attempts
    maxLoginAttempts: 5,
    // Account lockout duration (in minutes)
    lockoutDuration: 15,
    // Password requirements
    passwordRequirements: {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: true
    }
  },

  // API Security Headers
  securityHeaders: {
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
  }
};

// Utility functions for security
export const SecurityUtils = {
  // Sanitize user input
  sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  },

  // Validate email format
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Generate secure random string
  generateSecureRandom(length: number = 32): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },

  // Hash sensitive data (client-side hashing for additional security)
  async hashData(data: string): Promise<string> {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  },

  // Validate URL to prevent open redirects
  isValidRedirectUrl(url: string, allowedDomains: string[]): boolean {
    try {
      const urlObj = new URL(url);
      return allowedDomains.some(domain => 
        urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
      );
    } catch {
      return false;
    }
  },

  // Rate limiting check
  checkRateLimit(platform: string, requestCount: number): boolean {
    const limits = SecurityConfig.rateLimits[platform as keyof typeof SecurityConfig.rateLimits];
    if (!limits) return true;

    const now = Date.now();
    const hourAgo = now - (60 * 60 * 1000);
    const dayAgo = now - (24 * 60 * 60 * 1000);

    // In a real implementation, you would check against stored request timestamps
    // This is a simplified example
    return requestCount < limits.requestsPerHour;
  }
};

export default SecurityConfig;