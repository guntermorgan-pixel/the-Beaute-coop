import { Outlet } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import LocalBusinessSchema from './LocalBusinessSchema.jsx'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <LocalBusinessSchema />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
