
function Hero() {
  return (
    <section className="hero">
      <div className="hero__info">
        <h1 className="hero__title">
          I’m Rayan Adlrdard <span>Front-end</span> Developer 
        </h1>
        <p className="hero__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
        </p>
        <button className="hero__btn">
          HIRE ME
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.78117 5.33312L5.20517 1.75712L6.14784 0.814453L11.3332 5.99979L6.14784 11.1851L5.20517 10.2425L8.78117 6.66645H0.666504V5.33312H8.78117Z" fill="#2B2B2B" />
          </svg>
        </button>
      </div>
      <div className="hero__image">
        <img src="/src/assets/img/hero.png" alt="hero" />
      </div>
    </section>
  );
}

export default Hero;  