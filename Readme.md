# Stylish User Profile Card

A modern, animated React component that displays user profile information in a beautifully designed card format. The component fetches random user data and presents it with smooth animations, gradient effects, and interactive elements.

![User Profile Card Example](https://via.placeholder.com/600x400/3b82f6/FFFFFF?text=User+Profile+Card)

## Features

- 🎨 Modern gradient design with interactive elements
- 🌟 Smooth hover animations and transitions
- 📱 Fully responsive layout
- 🔄 Loading state with animated spinner
- 🐛 Error handling with user feedback
- 🎭 TypeScript support with full type definitions
- 📍 Displays user's photo, name, gender, contact info, and location
- 🎯 Uses the Random User API for demo data

## Installation

1. First, install the required dependencies:

```bash
npm install react lucide-react
# or
yarn add react lucide-react
```

2. Make sure you have Tailwind CSS configured in your project. If not, install it:

```bash
npm install -D tailwindcss
# or
yarn add -D tailwindcss
```

3. Copy the component code into your project.

## Usage

```jsx
import UserProfileCard from "./components/UserProfileCard";

function App() {
  return (
    <div>
      <UserProfileCard />
    </div>
  );
}
```

## API Integration

The component uses the [Random User API](https://randomuser.me/) to fetch sample user data. The current implementation uses a fixed seed for consistent results, but you can modify the fetch URL to get random users:

```typescript
// Current implementation (fixed seed):
fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");

// For random users:
fetch("https://randomuser.me/api/?results=1");
```

## Customization

### Gradient Colors

You can customize the gradient colors by modifying the following classes in the component:

```jsx
// Header gradient
className = "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

// Name text gradient
className =
  "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent";
```

### Animation Timing

Adjust the transition timing by modifying the duration classes:

```jsx
// Card hover animation
className = "transition-all duration-300";
```

## TypeScript Interface

The component uses the following TypeScript interface for type safety:

```typescript
interface UserData {
  results: Array<{
    name: {
      first: string;
      last: string;
    };
    gender: string;
    phone: string;
    email: string;
    location: {
      city: string;
      country: string;
    };
    picture: {
      large: string;
    };
  }>;
}
```

## Dependencies

- React 16.8+ (for Hooks support)
- Lucide React (for icons)
- Tailwind CSS (for styling)

## Browser Support

The component uses modern CSS features including:

- CSS Grid
- Flexbox
- CSS Transitions
- CSS Transforms
- CSS Gradients

It should work in all modern browsers (Chrome, Firefox, Safari, Edge).

## Performance Considerations

- The component uses CSS transforms for animations to ensure smooth performance
- Images are loaded with appropriate alt tags for accessibility
- Loading state prevents content flashing
- Error boundaries handle API failures gracefully

## Contributing

Feel free to submit issues and pull requests for:

- New features
- Bug fixes
- Documentation improvements
- Performance optimizations

## License

MIT License - feel free to use this component in your projects.

---

Built with ❤️ using React and Tailwind CSS
