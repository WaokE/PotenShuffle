/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            height: {
                "2/3-screen": "66.666667vh",
                "1/2-screen": "50vh",
                "1/4-screen": "25vh",
            },
        },
    },
    plugins: [],
};
