import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: 'env',
  plugins: [reactRefresh()],
  define: {
    '__APP_NAME__': JSON.stringify(process.env.npm_package_name),
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
}
})
