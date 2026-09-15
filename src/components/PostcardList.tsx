import { useSavedList } from '../state/savedList'
import BrandLogo from './BrandLogo'
import { useBrandLogo } from '../hooks/useBrandLogo'

function PostcardList() {
  const { items, total, isOpen, remove, clear, close } = useSavedList()
  const logoStatus = useBrandLogo()

  if (!isOpen) {
    return null
  }

  return (
    <div className="postcard-overlay" role="dialog" aria-modal="true" aria-label="Your list">
      <div className="postcard-backdrop" onClick={close} />
      <div className="postcard">
        <div className="postcard-head">
          <div>
            <p className="postcard-title">My list</p>
            <p className="postcard-subtitle">Isla Adventures · Canary Islands</p>
          </div>
          <div className="postcard-stamp-area">
            <div className="postcard-postmark" aria-hidden="true">
              <span>ISLA</span>
              <span className="postcard-postmark-rule" />
              <span>CANARIAS</span>
            </div>
            <div className="postcard-stamp">
              <BrandLogo size={logoStatus === 'ready' ? 58 : 36} />
              {/* The real logo carries the name already. */}
              {logoStatus !== 'ready' && (
                <>
                  <span className="postcard-stamp-name">ISLA</span>
                  <span className="postcard-stamp-value">ADVENTURES</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="postcard-grid">
          <div className="postcard-message">
            {items.length === 0 ? (
              <p className="postcard-empty">
                Nothing written here yet. Tap any tour you like and it lands straight on this
                postcard.
              </p>
            ) : (
              <ul className="postcard-lines">
                {items.map((item) => (
                  <li key={item.id} className="postcard-line">
                    <span className="postcard-line-name">{item.title}</span>
                    <span className="postcard-leader" aria-hidden="true" />
                    <span className="postcard-line-price">{item.price.toFixed(2)}</span>
                    <button
                      type="button"
                      className="postcard-remove"
                      onClick={() => remove(item.id)}
                      aria-label={`Remove ${item.title}`}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {items.length > 0 && (
              <button type="button" className="postcard-clear" onClick={clear}>
                Clear
              </button>
            )}
          </div>

          <div className="postcard-address">
            <p className="postcard-address-label">To</p>
            <p className="postcard-address-line">Your next trip</p>
            <p className="postcard-address-line">Canary Islands</p>
            <p className="postcard-note">
              Just a reminder of the tours you liked — booking happens at the last step.
            </p>
          </div>
        </div>

        <div className="postcard-footer">
          <div className="postcard-total">
            <span>Total</span>
            <strong>€{total.toFixed(2)}</strong>
          </div>
          <div className="postcard-actions">
            <button type="button" className="postcard-close" onClick={close}>
              Close
            </button>
            <button type="button" className="primary-button" disabled={items.length === 0}>
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostcardList
