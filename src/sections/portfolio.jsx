import Agency from '/assets/img/portfolio/Agency.png';
import BritishAgency from '/assets/img/portfolio/BritishAgency.png';
import Business from '/assets/img/portfolio/Business.png';
import Folder from '/assets/img/portfolio/Folder.png';
import GraphicDesigner from '/assets/img/portfolio/GraphicDesigner.png';
import Laptop from '/assets/img/portfolio/Laptop.png';
import Mockup from '/assets/img/portfolio/Mockup.png';
import Restaurant from '/assets/img/portfolio/Restaurant.png';
import UIDesigner from '/assets/img/portfolio/UIDesigner.png';


function Portfolio() {

    return (
      <section className="portfolio" id="portfolio">
        <h1 className="portfolio__title title">Portfolio</h1>
        <p className="portfolio__desc desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        <ul className="portfolio__categories">
          <li className="portfolio__category">All</li>
          <li className="portfolio__category">UI Design</li>
          <li className="portfolio__category">Web Templates</li>
          <li className="portfolio__category">Logo</li>
          <li className="portfolio__category">Branding</li>
        </ul>
        <div className="portfolio__items">
          <div className="portfolio__item">
            <img src={Laptop} alt="Laptop" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src={UIDesigner} altUIDesigner />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src={Agency} alt="Agency" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src={Restaurant} alt="Restaurant" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src={Folder} alt="Folder" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src={GraphicDesigner} alt="GraphicDesigner" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src={Mockup} alt="Mockup" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src={Business} alt="Business" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src={BritishAgency} alt="BritishAgency" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Portfolio;