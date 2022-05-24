import "bulma/css/bulma.css";
import "./style.css";
import headerImage from "./assets/img/insert-logo-here.png";

export const App = () => {
  console.log("script from app");
  // Use Vite to process the header image and inject automatically for us
  (<HTMLImageElement>document.getElementById("header-image"))!.src =
    headerImage;
};
