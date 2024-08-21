import App from "./App.js";
import "./main.css"
import {render} from "solid-js/web";
import {Router} from "@solidjs/router";


const root = document.getElementById('app');
render(
    () => (
            <App />
    ),
    root,
);