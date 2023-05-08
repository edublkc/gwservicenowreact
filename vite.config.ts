import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
      entryFileNames: 'js/[name]-snbuild-js',
      chunkFileNames: 'js/[name]-snbuild-js',
      assetFileNames: ({name}) => {

        function getExtension(fileName: string){
          const splitName = fileName.split('.');
          const lastIndex = splitName.length - 1
          const extension = splitName[lastIndex];
          const name = splitName[0]

          return {
            extension,
            name
          }
        }

        const file = getExtension(name)

        if(file.extension === 'css'){
          return `css/${file.name}-[hash]-${file.extension}`;
        }

        return `img/${file.name}-[hash]-${file.extension}`;
      },
      }
    }
  }
})
