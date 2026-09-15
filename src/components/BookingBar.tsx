import { tours } from '../data/tours'
import { useSavedList } from '../state/savedList'

const lowestPrice = Math.min(...tours.map((tour) => tour.price))

function BookingBar() {
  const { count, total, open } = useSavedList()
  const hasItems = count > 0

  return (
    <div className="booking-bar">
      <div className="booking-bar-inner">
        <button type="button" className="booking-price" onClick={open}>
          <span className="booking-price-label">{hasItems ? 'Your list' : 'From'}</span>
          <span className="booking-price-value">€{hasItems ? total : lowestPrice}</span>
          {hasItems && (
            <span className="booking-price-count">{count === 1 ? '1 tour' : `${count} tours`}</span>
          )}
        </button>
        <button type="button" className="primary-button booking-cta" onClick={open}>
          Book now
        </button>
      </div>
    </div>
  )
}

export default BookingBar
