import type { Tour } from '../types/tour'

type TourCardProps = {
  tour: Tour
}

function TourCard({ tour }: TourCardProps) {
  return (
    <article className="tour-card">
      <div className="tour-image-placeholder">
        <span>{tour.image}</span>
      </div>
      <div className="tour-card-body">
        <div className="tour-card-top">
          <p className="tour-island">{tour.island}</p>
          <p className="tour-rating">⭐ {tour.rating}</p>
        </div>
        <h3>{tour.title}</h3>
        <p className="tour-description">{tour.description}</p>
        <div className="tour-card-bottom">
          <span>{tour.duration}</span>
          <strong>€{tour.price}</strong>
        </div>
      </div>
    </article>
  )
}

export default TourCard
