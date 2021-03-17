declare global {
    namespace NodeJS {
      interface ProcessEnv {
        MONGODB: string,
        PORT: number,
        NODE_ENV: 'development' | 'production' | 'test'
      }
    }
  }

  export {}