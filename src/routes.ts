import { lazy } from 'solid-js'
import type { RouteDefinition } from '@solidjs/router'

export const routes: RouteDefinition[] = [
    {
        path: '/',
        component: lazy(() => import('./views/LibraryView')),
    },
    {
        path: '/settings',
        component: lazy(() => import('./views/SettingsView')),
    },
]
