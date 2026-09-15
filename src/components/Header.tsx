import IslaMark from './IslaMark'
import { useSavedList } from '../state/savedList'

function Header() {
  const { count, open } = useSavedList()

  return (
    <header className="site-header">
      <div className="brand">
        <div className="brand-mark">
          <IslaMark size={28} />
        </div>
        <div>
          <p className="brand-name">Isla Adventures</p>
          <p className="brand-subtitle">Canary Islands tours</p>
        </div>
      </div>
      <nav className="main-nav">
        <a href="#featured">Tours</a>
        <a href="#search">Search</a>
        <a href="#contact">Contact</a>
      </nav>
      <button type="button" className="list-button" onClick={open}>
        My list
        {count > 0 && <span className="list-badge">{count}</span>}
      </button>
    </header>
  )
}

export default Header
