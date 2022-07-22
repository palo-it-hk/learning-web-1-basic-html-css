import AbstractView from "../framework/AbstractView";

export default class extends AbstractView {
    pageStyle = (): string =>  /* css */`
/* We create a pseudo element on the body itself for the background */
body::before {
    background-image: url('/images/header-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.3;
    content: '';
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    position: fixed;
}`
    pageScript = (): string =>  /* js */``

    pageBody = () => /* html */`
<div class="base-layout mdl-layout mdl-js-layout">
  <main class="mdl-layout__content" id="fuwk-content">
    <h1>
        Page specific content will be loaded here
    </h1>
  </main>
</div>`
}