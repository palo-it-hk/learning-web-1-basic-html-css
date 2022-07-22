import {pageScriptElementId, pageStyleElementId, routerElementId} from "../utils/config"
import logger from "../utils/logger"
import AbstractView from "./AbstractView"
import Router from "./Router"

interface CoreConfig {
  rootElement:HTMLElement
  baseView:AbstractView
  fallbackView:AbstractView
  router:Router
}

export default class {
    rootElement:HTMLElement
    fallbackView:AbstractView
    router:Router

    pageScript:any
    pageStyle:any
    routerElement!:HTMLElement
    clickHandler: any

  constructor(config:CoreConfig) {
        this.rootElement = config.rootElement
        this.fallbackView = config.fallbackView
        this.router = config.router
        this.boot(config)  
    }

    boot(config:any) {
      // Paint the base template and get the router element reference
      this.rootElement.innerHTML = config.baseView.pageBody()
      this.routerElement = document.getElementById(routerElementId)!

      // Attach app global styles to the page
      const globalStyle = document.createElement('style');
      globalStyle.setAttribute('id', `${this.rootElement}-style`)
      globalStyle.innerHTML = config.baseView.pageStyle()
      document.head.append(globalStyle)

      // Attach app global script to the page
      const globalScript = document.createElement('script');
      globalScript.setAttribute('id', `${this.rootElement}-script`)
      globalScript.innerHTML = config.baseView.pageScript()
      this.rootElement.append(globalScript)
    }

    navigatePage() {
      // Cleanup the click handler
      removeEventListener('click', this.clickHandler)
      // Remove the inpage script
      this.rootElement.removeChild(this.pageScript)
      // Remove the inpage styling
      this.rootElement.removeChild(this.pageStyle)

    }

    pageRender(view:AbstractView) {
        logger.debug(`Rendering page: ${view}`)
        // Inject the new Content
        this.routerElement.innerHTML = view.pageBody()

      // Inject Page specific JavaScript
      this.pageScript = document.createElement('script');
      this.pageScript.setAttribute('id', pageScriptElementId)
      this.pageScript.innerHTML = view.pageScript()
      this.rootElement.append(this.pageScript)

      // Inject page specific styling
      this.pageStyle = document.createElement('style');
      this.pageStyle.setAttribute('id', pageStyleElementId)
      this.pageStyle.innerHTML = view.pageStyle()
      this.rootElement.append(this.pageStyle)

      // document.querySelectorAll('[fwk-state]')

        // Unload any handlers and listeners to prevent leak
        this.clickHandler = this.rootElement.addEventListener('click', function (event) {
          event.preventDefault()
          logger.debug(`Attaching click handler to ${routerElementId}`)
          // Check for link attribute      
    
          if((event.target! as HTMLInputElement).hasAttribute('fwk-link')){
            // const newView = router.getCurrentView();
            // console.log(event.target!.getAttribute('href'));
            console.log('yes this');
          }
              // Get the event handler
          
        
          // If the handler doesn't exist, bail
          // if (!handler || !handlers[handler]) return;
        
          // Run the event
          // handlers[handler](event);
        
        });
    
        // Replace the page contents
        // this.rootElement.innerHTML = this.baseView.pageBody()
        // .replace('<router-view />', this.view.pageBody())
        
        // Attach any listeners
        
        // check for script to run
        // Update meta
      }
}