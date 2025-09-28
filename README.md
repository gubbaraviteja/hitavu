# Hitavu - Personal Development Dashboard

A modern Angular application for tracking personal development across five key areas: Spiritual, Finance, Health, Social, and Upskill. Built with Angular 19, Angular Material, and designed for easy deployment to AWS Amplify.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)
- **Angular CLI** (v19 or higher) - Install globally with `npm install -g @angular/cli`

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd hitavu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/` to view the application.

## 📁 Project Structure

```
hitavu/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── custom-sidenav/          # Navigation sidebar component
│   │   ├── pages/
│   │   │   ├── spiritual/               # Spiritual development tracking
│   │   │   ├── finance/                 # Financial management
│   │   │   ├── health/                  # Health & fitness tracking
│   │   │   ├── social/                  # Social connections
│   │   │   └── upskill/                 # Learning & skill development
│   │   ├── app.component.ts             # Main app component
│   │   ├── app.routes.ts                # Application routing
│   │   └── app.config.ts                # App configuration
│   ├── assets/                          # Static assets (images, etc.)
│   └── styles.css                       # Global styles
├── public/                              # Public assets
├── dist/                                # Build output (auto-generated)
├── angular.json                         # Angular CLI configuration
├── package.json                         # Dependencies and scripts
└── amplify.yml                          # AWS Amplify build configuration
```

## 🛠️ Development

### Available Scripts

- **`npm start`** - Start development server (default: `http://localhost:4200`)
- **`npm run build`** - Build for production
- **`npm run watch`** - Build and watch for changes
- **`npm test`** - Run unit tests
- **`ng serve`** - Alternative to npm start
- **`ng build`** - Alternative to npm run build

### Creating New Components

To create a new component:
```bash
ng generate component <component-name>
# or short form:
ng g c <component-name>
```

### Adding New Pages

1. Generate a new component in the pages directory:
   ```bash
   ng g c pages/<page-name>
   ```

2. Add the route in `src/app/app.routes.ts`:
   ```typescript
   {
     path: '<page-name>',
     component: <PageName>Component
   }
   ```

3. Add navigation link in `src/app/components/custom-sidenav/custom-sidenav.component.ts`

## 🎨 Technology Stack

- **Angular 19** - Frontend framework
- **Angular Material** - UI component library
- **TypeScript** - Programming language
- **Angular CLI** - Development tooling
- **Angular CDK** - Component development kit
- **RxJS** - Reactive programming
- **Express** - Server-side rendering (SSR) support

## 🚀 Deployment

### AWS Amplify Deployment

This project is configured for easy deployment to AWS Amplify with automatic CI/CD.

#### Automatic Deployment (Recommended)

1. **Connect your repository to AWS Amplify**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect your Git provider and select this repository
   - The build settings will be automatically detected from `amplify.yml`

2. **Deploy**
   - Amplify will automatically build and deploy on every push to your main branch
   - View your live site in the Amplify console

#### Manual Deployment

If you need to deploy manually or troubleshoot:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   - Use the provided deployment scripts (see Deployment Scripts section)

### Deployment Scripts

The project includes deployment scripts for easy AWS deployment:

- **`deploy.sh`** - Automated deployment script
- **`amplify.yml`** - AWS Amplify build configuration

Run the deployment script:
```bash
chmod +x deploy.sh
./deploy.sh
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```env
# Example environment variables
API_URL=https://your-api-url.com
ENVIRONMENT=production
```

### Build Configuration

The project is configured for both development and production builds:

- **Development**: Optimized for debugging with source maps
- **Production**: Optimized for performance with minification and tree-shaking

## 🧪 Testing

Run the test suite:
```bash
npm test
```

This will execute unit tests using Karma and Jasmine.

## 📱 Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Material Design** - Modern, accessible UI components
- **Side Navigation** - Collapsible sidebar for easy navigation
- **Multi-page Application** - Organized into five development areas:
  - 🧘 **Spiritual** - Meditation, mindfulness, and spiritual growth
  - 💰 **Finance** - Budget tracking and financial planning
  - 🏃 **Health** - Fitness and wellness tracking
  - 👥 **Social** - Relationship and social connection management
  - 📚 **Upskill** - Learning and professional development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 Development Guidelines

- Follow Angular style guide conventions
- Use TypeScript strict mode
- Write unit tests for new components
- Use Angular Material components when possible
- Keep components small and focused
- Use reactive programming with RxJS

## 🐛 Troubleshooting

### Common Issues

1. **Node version issues**
   ```bash
   # Check your Node version
   node --version
   # Should be v18 or higher
   ```

2. **Angular CLI not found**
   ```bash
   npm install -g @angular/cli@latest
   ```

3. **Build failures**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Port already in use**
   ```bash
   # Use a different port
   ng serve --port 4201
   ```

### Getting Help

- Check the [Angular Documentation](https://angular.dev/)
- Review [Angular Material Documentation](https://material.angular.io/)
- Check the [AWS Amplify Documentation](https://docs.amplify.aws/)

## 📄 License

This project is private and proprietary.

## 🔗 Links

- [Angular Documentation](https://angular.dev/)
- [Angular Material](https://material.angular.io/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [TypeScript](https://www.typescriptlang.org/)

---

**Happy coding! 🚀**