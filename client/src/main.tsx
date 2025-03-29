import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add Font Awesome for social icons
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(linkElement);

createRoot(document.getElementById("root")!).render(<App />);
