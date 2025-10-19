/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,jsx}", // For files in root directory like App.jsx
  ],
  theme: {
    extend: {
      // Add your custom theme extensions here
      colors: {
        // Example: custom color palette
        // 'primary': '#3b82f6',
        // 'secondary': '#8b5cf6',
      },
      fontFamily: {
        // Example: custom fonts
        // 'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Example: custom spacing
        // '128': '32rem',
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here
    // Example: require('@tailwindcss/forms'),
  ],
}

