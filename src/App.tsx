import Header from './components/Header'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import FeaturedTours from './components/FeaturedTours'

function App() {
  return (
    <div className="page-shell">
      <Header />
      <main className="page-content">
        <Hero />
        <SearchBar />
        <FeaturedTours />
      </main>
      <footer id="contact" className="site-footer">
        <p>Isla Adventures starter repository.</p>
        <p>Next step: replace placeholders with your real media and logo.</p>
      </footer>
    </div>
  )
}

export default App
