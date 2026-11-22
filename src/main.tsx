import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
// Self-hosted fonts (no render-blocking third-party CSS). Only the weights in use.
import '@fontsource/syne/700.css'
import '@fontsource/be-vietnam-pro/400.css'
import '@fontsource/be-vietnam-pro/500.css'
import '@fontsource/be-vietnam-pro/600.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are pre-rendered (scripts/build-meta.mjs), so hydrate them.
// In dev, or for a page without pre-rendered HTML, render from scratch.
const root = document.getElementById('root')!
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
