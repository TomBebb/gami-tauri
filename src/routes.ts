import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./views/LibraryView.vue'),
  },
  {
    path: '/settings',
    component: () => import('./views/SettingsView.vue'),
  },
]
export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
  routes,
})
