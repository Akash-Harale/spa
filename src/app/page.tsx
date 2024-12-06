import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import BookServices from './components/BookServices'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="book">
        <BookServices />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <Footer />
    </main>
  )
}

