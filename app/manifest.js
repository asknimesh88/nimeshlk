export default function manifest() {
  return {
    name: "Nimesh Madushanka",
    short_name: "Nimesh",
    description: "Lecturer in Livestock Production and WordPress & server specialist.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#14213d",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }, { src: "/apple-icon", sizes: "180x180", type: "image/png" }],
  };
}
