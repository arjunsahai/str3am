/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '/Users/arjun/str3amTwo/str3am/pages/**/*.{js,ts,jsx,tsx}',
    '/Users/arjun/str3amTwo/str3am/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
