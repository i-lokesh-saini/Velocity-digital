import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { siteMetadata } from './data/data.js'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter, useLocation } from 'react-router'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <link rel="icon" type="image/svg+xml" href={siteMetadata.faviconHref} />
      </Helmet>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)