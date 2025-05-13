import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc"; not required is using fs-route and react-router
import { reactRouter } from "@react-router/dev/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
  server: {
    hmr: true,
  },
});
