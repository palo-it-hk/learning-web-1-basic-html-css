// Application styling
import "material-design-lite/material.min.css"
import "material-design-lite/material.min.js"
import "./style.css"
// Framework components
import Core from './framework/Core';
import Router from "./framework/Router";
// Views
import BaseView from './views/base'
import HomeView from './views/home'
import LearnView from './views/learn'
import ErrorView from './views/error'
// Extra utility
import logger from './utils/logger';

import { rootElementId } from "./utils/config";
export default () => {
  let intialLoad:boolean = true
  /**
   * Wait until the HTML document is ready before trying to do any manipulation.
   * If we try running code on elements that don't exist yet, we're going to have problems
   */
  document.addEventListener("DOMContentLoaded", async () => {
    // Do a check to make sure this routine only ever runs once.
    if(intialLoad) {
      intialLoad = false
      logger.info('DOM Loaded, booting app')
      // Create a map of pages that the application has
      const router = new Router([
        {
          path: '/',
          view: HomeView
        },
        {
          path: '/learn/{moduleName}',
          view: LearnView
        },
      ])

      // Find the element we'll use as our app container
      logger.debug(`Using (#${rootElementId}) as root element of app`)
      const rootElement = document.getElementById(rootElementId)

      // Setup a renderer to write content and setup event listeners
      const framework = new Core({
        rootElement: rootElement!,
        baseView: new BaseView,
        fallbackView: new ErrorView,
        router,
      })

      // Upon first load, find where we are and render
      const {view} = router.getRoute(location.pathname)
      framework.pageRender(new view)
    }
  })
}