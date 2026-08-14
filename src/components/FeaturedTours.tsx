import { tours } from '../data/tours'
import TourCard from './TourCard'

function FeaturedTours() {
  return (
    <section id="featured" className="featured-section">
      <div className="section-heading">
        <p className="eyebrow">Featured tours</p>
        <h2>Start from a clean structure and swap every asset with your own.</h2>
      </div>
      <div className="tour-grid">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedTours
