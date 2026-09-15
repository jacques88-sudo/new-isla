import { useSavedList } from '../state/savedList'
import type { Tour } from '../types/tour'

type TourCardProps = {
  tour: Tour
}

function TourCard({ tour }: TourCardProps) {
  const { has, toggle } = useSavedList()
  const saved = has(tour.id)

  return (
    <article className={saved ? 'tour-card is-saved' : 'tour-card'}>
      <button
        type="button"
        className="tour-card-action"
        onClick={() => toggle(tour)}
        aria-pressed={saved}
        aria-label={saved ? `Remove ${tour.title} from your list` : `Add ${tour.title} to your list`}
      >
        <div className="tour-image-placeholder">
          <span>{tour.image}</span>
          <span className="tour-save-badge">{saved ? 'On your list' : 'Tap to add'}</span>
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
      </button>
    </article>
  )
}

export default TourCard
