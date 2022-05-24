export const env: string = import.meta.env.VITE_NODE_ENV || "development";
export const logLevel: string = import.meta.env.VITE_LOG_LEVEL || "info";

export const welcomeBanner: string =
  import.meta.env.VITE_WELCOME_BANNER || "Welcome Anonymous!";
export const backendUrl: string =
  import.meta.env.VITE_BACKEND_URL || "https://dog.ceo/api/breeds/image/random";
