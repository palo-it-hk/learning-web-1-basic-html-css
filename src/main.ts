import './style.css'
import { welcomeBanner } from './utils/config';
import { fetchData } from './utils/net';

// Add a JS listener to page which only fires when ready
document.addEventListener("DOMContentLoaded", async () => {
    
    // Example of simple element manipulation
    const app = document.querySelector<HTMLDivElement>('#welcome-banner')!
    app.innerHTML = `<h1>${welcomeBanner}</h1>`;

    // Fetching remote content
    const comicImageSource = await fetchData();
    const remoteContentDiv = document.querySelector<HTMLDivElement>('#remote-content')!
    remoteContentDiv.innerHTML = `<img src="${comicImageSource}" />`
});


