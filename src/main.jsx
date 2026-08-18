import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

// react-helmet-async only ever appends/updates tags — it never removes the
// static fallback title/description baked into index.html for crawlers that
// don't run JS. Strip them here so Helmet's per-route tags are the only
// title/description left once the app mounts.
document.querySelector('title')?.remove()
document.querySelector('meta[name="description"]')?.remove()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
