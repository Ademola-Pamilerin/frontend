import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/App.test.jsx"],
    textMatch: ["./src/**.test.jsx"],
    global: true,
  },
});
