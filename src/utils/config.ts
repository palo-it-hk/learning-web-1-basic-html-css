export const env: string = import.meta.env.VITE_NODE_ENV || "development";
export const logLevel: string = import.meta.env.VITE_LOG_LEVE || 'debug'
export const rootElementId:string = import.meta.env.VITE_ROOT_ELEMENT_ID || "fuwk-app"
export const routerElementId:string = import.meta.env.VITE_ROUTER_ELEMENT_ID || "fuwk-content"
export const pageScriptElementId:string = import.meta.env.VITE_PAGE_SCRIPT_ELEMENT_ID || "fuwk-script"
export const pageStyleElementId:string = import.meta.env.VITE_PAGE_STYLE_ELEMENT_ID || "fuwk-style"

export const welcomeBanner: string =
  import.meta.env.VITE_WELCOME_BANNER || "Welcome Anonymous!";
export const backendUrl: string =
  import.meta.env.VITE_BACKEND_URL || "https://dog.ceo/api/breeds/image/random";
