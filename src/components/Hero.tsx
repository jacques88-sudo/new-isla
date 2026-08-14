function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Your new clean repository</p>
        <h1>Build Isla again, with your own logo, images, and video.</h1>
        <p className="hero-text">
          This starter replaces the Lovable repository with a clean base that you can fully control on
          GitHub.
        </p>
        <div className="hero-actions">
          <button className="primary-button">Explore tours</button>
          <button className="secondary-button">Upload your assets</button>
        </div>
      </div>
      <div className="hero-media">
        <div className="hero-placeholder">
          <p>Replace this area with your hero video or hero image.</p>
          <span>Suggested file: public/images/hero-cover.jpg</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
