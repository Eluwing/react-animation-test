import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 배포 경로 설정
  publicDir: 'public', // 정적 파일 경로
})
