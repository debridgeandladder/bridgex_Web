import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Conditionally inject umami analytics script at runtime to avoid build-time
// warnings when environment variables are not provided.
const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined;
const analyticsWebsiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID as string | undefined;

if (analyticsEndpoint && analyticsWebsiteId) {
	const s = document.createElement("script");
	s.defer = true;
	s.src = `${analyticsEndpoint.replace(/\/$/, "")}/umami`;
	s.setAttribute("data-website-id", analyticsWebsiteId);
	document.head.appendChild(s);
}
