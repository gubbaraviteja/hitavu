#!/bin/bash

# Hitavu Project Setup Script
# This script helps set up the project for development and deployment

set -e  # Exit on any error

echo "🎯 Hitavu Project Setup"
echo "======================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js v18 or higher."
        print_status "Download from: https://nodejs.org/"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm."
        exit 1
    fi
    
    if ! command -v git &> /dev/null; then
        print_error "Git is not installed. Please install Git."
        print_status "Download from: https://git-scm.com/"
        exit 1
    fi
    
    print_success "Prerequisites check completed"
}

# Install Angular CLI globally if not present
install_angular_cli() {
    print_status "Checking Angular CLI installation..."
    
    if ! command -v ng &> /dev/null; then
        print_warning "Angular CLI not found globally. Installing..."
        npm install -g @angular/cli@latest
        print_success "Angular CLI installed successfully"
    else
        print_success "Angular CLI is already installed"
    fi
}

# Install project dependencies
install_dependencies() {
    print_status "Installing project dependencies..."
    
    if [ ! -d "node_modules" ]; then
        npm install
        print_success "Dependencies installed successfully"
    else
        print_status "Dependencies already installed"
    fi
}

# Create deployment files
create_deployment_files() {
    print_status "Creating deployment configuration files..."
    
    # Create amplify.yml if it doesn't exist
    if [ ! -f "amplify.yml" ]; then
        cat > amplify.yml << 'EOF'
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - echo "Installing dependencies..."
        - npm ci
    build:
      commands:
        - echo "Building the app..."
        - npm run build
  artifacts:
    baseDirectory: dist/hitavu/browser
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .angular/cache/**/*
EOF
        print_success "amplify.yml created"
    else
        print_status "amplify.yml already exists"
    fi
    
    # Create deploy.sh if it doesn't exist
    if [ ! -f "deploy.sh" ]; then
        cat > deploy.sh << 'EOF'
#!/bin/bash

# Hitavu Deployment Script for AWS Amplify
# This script automates the deployment process to AWS Amplify

set -e  # Exit on any error

echo "🚀 Starting Hitavu deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js v18 or higher."
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm."
        exit 1
    fi
    
    if ! command -v ng &> /dev/null; then
        print_warning "Angular CLI not found globally. Installing..."
        npm install -g @angular/cli@latest
    fi
    
    print_success "Prerequisites check completed"
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    
    if [ ! -d "node_modules" ]; then
        npm install
    else
        print_status "Dependencies already installed, checking for updates..."
        npm ci
    fi
    
    print_success "Dependencies installed successfully"
}

# Run tests
run_tests() {
    print_status "Running tests..."
    
    if npm test -- --watch=false --browsers=ChromeHeadless; then
        print_success "All tests passed"
    else
        print_error "Tests failed. Please fix the issues before deploying."
        exit 1
    fi
}

# Build the application
build_application() {
    print_status "Building application for production..."
    
    # Clean previous build
    if [ -d "dist" ]; then
        rm -rf dist
        print_status "Cleaned previous build"
    fi
    
    # Build for production
    if ng build --configuration=production; then
        print_success "Application built successfully"
    else
        print_error "Build failed. Please check the errors above."
        exit 1
    fi
}

# Validate build output
validate_build() {
    print_status "Validating build output..."
    
    if [ ! -d "dist/hitavu/browser" ]; then
        print_error "Build output directory not found. Build may have failed."
        exit 1
    fi
    
    if [ ! -f "dist/hitavu/browser/index.html" ]; then
        print_error "index.html not found in build output."
        exit 1
    fi
    
    print_success "Build validation completed"
}

# Deploy to AWS Amplify (if configured)
deploy_to_amplify() {
    print_status "Checking for AWS Amplify configuration..."
    
    if [ -f "amplify.yml" ]; then
        print_status "amplify.yml found. This project is configured for AWS Amplify."
        print_warning "For automatic deployment, push your changes to the connected Git repository."
        print_status "AWS Amplify will automatically build and deploy on the next push."
    else
        print_warning "amplify.yml not found. Creating default configuration..."
        create_amplify_config
    fi
}

# Create default amplify.yml configuration
create_amplify_config() {
    print_status "Creating amplify.yml configuration..."
    
    cat > amplify.yml << 'AMPLIFY_EOF'
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - echo "Installing dependencies..."
        - npm ci
    build:
      commands:
        - echo "Building the app..."
        - npm run build
  artifacts:
    baseDirectory: dist/hitavu/browser
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .angular/cache/**/*
AMPLIFY_EOF
    
    print_success "amplify.yml created successfully"
}

# Show deployment summary
show_summary() {
    print_success "Deployment process completed!"
    echo ""
    echo "📋 Summary:"
    echo "  ✅ Prerequisites checked"
    echo "  ✅ Dependencies installed"
    echo "  ✅ Tests passed"
    echo "  ✅ Application built"
    echo "  ✅ Build validated"
    echo ""
    echo "🚀 Next steps:"
    echo "  1. Commit your changes: git add . && git commit -m 'Deploy to production'"
    echo "  2. Push to your repository: git push origin main"
    echo "  3. AWS Amplify will automatically deploy your changes"
    echo ""
    echo "📁 Build output location: dist/hitavu/browser/"
    echo "🌐 Your app will be available at your Amplify domain after deployment"
}

# Main execution
main() {
    echo "🎯 Hitavu Deployment Script"
    echo "=========================="
    echo ""
    
    check_prerequisites
    install_dependencies
    run_tests
    build_application
    validate_build
    deploy_to_amplify
    show_summary
}

# Run main function
main "$@"
EOF
        chmod +x deploy.sh
        print_success "deploy.sh created and made executable"
    else
        print_status "deploy.sh already exists"
    fi
}

# Show setup summary
show_summary() {
    print_success "Project setup completed!"
    echo ""
    echo "📋 What was set up:"
    echo "  ✅ Prerequisites checked"
    echo "  ✅ Angular CLI installed/verified"
    echo "  ✅ Project dependencies installed"
    echo "  ✅ Deployment configuration files created"
    echo ""
    echo "🚀 You can now:"
    echo "  1. Start development: npm start"
    echo "  2. Run tests: npm test"
    echo "  3. Build for production: npm run build"
    echo "  4. Deploy: ./deploy.sh"
    echo ""
    echo "📚 Read the README.md for detailed instructions"
}

# Main execution
main() {
    check_prerequisites
    install_angular_cli
    install_dependencies
    create_deployment_files
    show_summary
}

# Run main function
main "$@"
