/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "dark-bg": "#1F1F1F",
                "light-text": "#D9D9D9",
                accent: "#FEC300",
                "light-bg": "#F9F9F9",
                text: "#282828",
            },
        },
    },
    plugins: [],
}
