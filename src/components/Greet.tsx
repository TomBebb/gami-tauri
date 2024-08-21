import { invoke } from "@tauri-apps/api/tauri";
import {Component, createSignal} from "solid-js";

const Greet: Component = () => {
  const [greetMsg, setGreetMsg] = createSignal("");
  const [name, setName] = createSignal("");

  async function greet() {
    console.debug('greet', name())
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg( await invoke("greet", {name: name()}));
  }

  return <>
    <div class="flex gap-8" >
    <input class="input input-accent" id="greet-input" value="name" placeholder="Enter a name..."

    onChange={(e) => setName(e.target.value)} />
    <button onClick={greet} class="btn btn-primary">Greet</button>
    </div>

  <p>{greetMsg()}</p>
</>
}

export default Greet;