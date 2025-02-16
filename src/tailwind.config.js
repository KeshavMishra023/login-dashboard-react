module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all components
      ],
      theme: {
        extend: {},
      },
    plugins: [require("rippleui")],
  };
  