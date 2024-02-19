// tailwind.config.js
module.exports = {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                primary: "var(--color-bg-primary)",
                secondary: "var(--color-bg-secondary)",
            },
            textColor: {
                primary: "var(--color-text-primary)",
            },
            colors: {
                "dark-blue-dark": "hsl(209, 23%, 22%)",
                "very-dark-blue-dark": "hsl(207, 26%, 17%)",
                "very-dark-blue": "hsl(200, 15%, 8%)",
                "dark-gray": "hsl(0, 0%, 52%)",
                "very-light-gray": "hsl(0, 0%, 98%)",
                white: "hsl(0, 0%, 100%)",
            },
            fontFamily: {
                nunito: ["Nunito Sans", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
