import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { registerSW } from "virtual:pwa-register";

// Register the service worker
const updateSW = registerSW({
  onNeedRefresh() {
    // Optional: You can trigger a UI toast here telling the user to refresh
    console.log("New content available, please refresh.");
  },
  onOfflineReady() {
    console.log("Biodata Bliss is ready to work offline.");
  },
});

createRoot(document.getElementById("root")!).render(<App />);
