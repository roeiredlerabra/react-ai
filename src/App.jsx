import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Lineup from './components/Lineup'
import Schedule from './components/Schedule'
import Tickets from './components/Tickets'
import Location from './components/Location'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Lineup />
        <Schedule />
        <Tickets />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App
