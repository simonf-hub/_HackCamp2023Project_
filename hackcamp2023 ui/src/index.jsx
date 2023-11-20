import React from "react";
import ReactDOMClient from "react-dom/client";
import { Website } from "./screens/Website";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Website />);
