import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";

export default function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={Router} />
        </React.StrictMode>
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
