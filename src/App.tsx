import Greet from './components/Greet.js'
import { Component } from 'solid-js'
import { routes } from './routes'
import { useLocation, useIsRouting, Router } from '@solidjs/router'

const App: Component = () => {
    return (
        <div class="flex flex-col">
            <div class="navbar bg-base-300 rounded-box">
                <div class="flex-1 px-2 lg:flex-none">
                    <a class="text-lg font-bold" href="/">
                        Gami
                    </a>
                </div>
                <div class="flex flex-1 justify-end px-2">
                    <div class="flex items-stretch  gap-2">
                        <a class="btn btn-primary rounded-btn" href="/">
                            Library
                        </a>
                        <a
                            class="btn btn-secondary rounded-btn"
                            href="/settings"
                        >
                            Settings
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center gap-2">
                <h1>Welcome to Tauri!</h1>

                <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

                <Router>{routes}</Router>
                <Greet />
            </div>
        </div>
    )
}

export default App
