# User Management System

A modern React application for managing users and their posts, built with Next.js, TypeScript, and TailwindCSS.

## Features

- 📱 Responsive design that works on desktop and mobile
- 🔍 User listing with pagination
- 📝 Post management (create, view, delete)
- ⚡ Real-time updates
- 🎨 Modern UI with consistent styling
- ✅ Comprehensive test coverage

## Project Structure

```
src/
├── api/                    # API layer and data fetching
├── components/            
│   ├── layout/            # Layout components
│   ├── posts/             # Post-related components
│   ├── ui/                # Reusable UI components
│   └── users/             # User-related components
├── hooks/                 # Custom React hooks
├── pages/                 # Page components
├── styles/                # Global styles
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/user-management.git
cd user-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint

### Code Organization

- **Components**: Follow a modular approach where each component has its own directory containing the component file and its tests
- **Hooks**: Custom hooks are separated into their own files and follow the `use` prefix convention
- **Types**: TypeScript interfaces and types are centralized in the `types` directory
- **Utils**: Helper functions and utilities are organized by functionality

### Best Practices

1. **Component Structure**
   - Keep components small and focused
   - Use TypeScript interfaces for props
   - Implement proper error handling
   - Include loading states

2. **State Management**
   - Use React Query for server state
   - Implement proper caching strategies
   - Handle loading and error states consistently

3. **Testing**
   - Write tests for all components
   - Test error states and edge cases
   - Use proper mocking for external dependencies

4. **Styling**
   - Use Tailwind CSS for consistent styling
   - Follow responsive design principles
   - Maintain a consistent color scheme

## Testing

The project uses Jest and React Testing Library for testing. Tests are co-located with their components.

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React Query](https://tanstack.com/query)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)