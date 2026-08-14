function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="brand-mark">I</div>
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
    </header>
  )
}

export default Header
