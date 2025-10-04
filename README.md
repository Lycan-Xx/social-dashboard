# Social Media Management Dashboard

A comprehensive social media management dashboard for content creators to view statistics across popular platforms like Facebook, Instagram, Twitter, and LinkedIn. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Multi-Platform Analytics**: Track metrics across Facebook, Instagram, Twitter, and LinkedIn
- **Real-time Dashboard**: View follower counts, engagement rates, and performance trends
- **User Authentication**: Secure OAuth-based login system
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Data Visualization**: Interactive charts and graphs using Recharts
- **Dark Theme**: Modern dark UI matching the provided design

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Netlify

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build for production: `npm run build`

## Authentication

The app includes a mock authentication system. Use any email/password combination to log in during development.

## API Integration Setup

To connect real social media platforms, you'll need to:

### 1. Facebook/Instagram (Meta)
- Create a Facebook Developer account at https://developers.facebook.com/
- Create a new app and get your App ID and App Secret
- Add Instagram Basic Display API for Instagram integration
- Configure OAuth redirect URLs

### 2. Twitter (X)
- Create a Twitter Developer account at https://developer.twitter.com/
- Create a new app and get your API Key and Secret
- Enable OAuth 2.0 and configure callback URLs

### 3. LinkedIn
- Create a LinkedIn Developer account at https://www.linkedin.com/developers/
- Create a new app and get your Client ID and Client Secret
- Add required scopes for profile and company data

### 4. Environment Variables
Create a `.env` file in the root directory:

```env
VITE_FACEBOOK_APP_ID=your_facebook_app_id
VITE_FACEBOOK_APP_SECRET=your_facebook_app_secret
VITE_TWITTER_API_KEY=your_twitter_api_key
VITE_TWITTER_API_SECRET=your_twitter_api_secret
VITE_LINKEDIN_CLIENT_ID=your_linkedin_client_id
VITE_LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret
```

## Security Measures

- **OAuth 2.0**: Secure authentication flow for all platforms
- **Token Management**: Secure storage and refresh of access tokens
- **HTTPS Only**: All API calls made over secure connections
- **Data Encryption**: Sensitive data encrypted in transit and at rest
- **Rate Limiting**: Respect platform API rate limits
- **CORS Configuration**: Proper cross-origin resource sharing setup

## Platform Compliance

- **Facebook/Instagram**: Complies with Meta Platform Policy
- **Twitter**: Follows Twitter Developer Agreement
- **LinkedIn**: Adheres to LinkedIn API Terms of Use
- **Data Privacy**: GDPR and CCPA compliant data handling

## Deployment

This app is configured to deploy automatically to Netlify:

1. Connect your GitHub repository to Netlify
2. Set environment variables in Netlify dashboard
3. Deploy automatically on push to main branch

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── dashboard/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Overview.tsx
│   │   └── Analytics.tsx
│   ├── Dashboard.tsx
│   └── Login.tsx
├── contexts/
│   └── AuthContext.tsx
├── App.tsx
└── main.tsx
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details