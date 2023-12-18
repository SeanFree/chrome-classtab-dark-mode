import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default ({ mode }) => {
  return defineConfig({
    base:
      mode === 'development'
        ? '/'
        : 'chrome-extension://__MSG_@@extension_id__/',
    plugins: [react()],
  })
}
