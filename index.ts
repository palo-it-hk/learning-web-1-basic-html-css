import { welcomeBanner } from "./src/utils/config";
import fetchData from "./src/utils/net";
import { App } from "./src/App";

// Add a JS listener to page which only fires when ready
document.addEventListener("DOMContentLoaded", async () => {
  console.log("Home page DOM ready");

  // Start the generic app instance on this page
  App();

  // Example of simple element manipulation
  const app = document.querySelector<HTMLDivElement>("#welcome-banner")!;
  app.innerHTML = `<h1>${welcomeBanner}</h1>`;

  // Fetching remote content
  const comicImageSource = await fetchData();
  const remoteContentDiv =
    document.querySelector<HTMLDivElement>("#remote-content")!;
  remoteContentDiv.innerHTML = `<img src="${comicImageSource}" />`;
});
