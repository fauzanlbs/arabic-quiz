/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const withFonts = require("next-fonts");
const withTM = require("next-transpile-modules")(["react95"]);
module.exports = withTM(withFonts());
