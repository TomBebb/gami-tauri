import Greet from './components/Greet.js'
import { Component } from 'solid-js'
import { routes } from './routes'
import { useLocation, useIsRouting, Router } from '@solidjs/router'

const App: Component = () => {
    return (
        <div class="flex flex-col items-center gap-2">
            <h1>Welcome to Tauri!</h1>

            <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

            <Router>{routes}</Router>
            <Greet />
        </div>
    )
}

export default App
