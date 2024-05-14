import { RecommendationsSrar } from "../../public/recommendationsImg/RecommendationsSrar";
import James from '/recommendationsImg/james.svg';
import Talan from '/recommendationsImg/talan.svg';
import Tiana from '/recommendationsImg/tiana.svg';

function Recommendations() {

    return (
      <div className="recommendations">
        <div className="recommendations__main-container">
          <div className="recommendations__main-title">Recommendations</div>
          <div className="recommendations__main-desc">
            <div className="recommendations__description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</div>
          </div>
          <div className="recommendations__container">
            <div className="recommendations__block">
              <div className="recommendations__stars">
                <RecommendationsSrar />
                <RecommendationsSrar />
                <RecommendationsSrar />
                <RecommendationsSrar />
                <RecommendationsSrar />
              </div>
              <div className="recommendations__block-title">Great Quality!</div>
              <div className="recommendations__block-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</div>
              <div className="recommendations__character">
                <img src={James} alt="James" />
                <div className="recommendations__character-info">
                  <div className="recommendations__character-name">James Gouse</div>
                  <div className="recommendations__character-profession">Graphic Designer</div>
                </div>
              </div>
            </div>
            <div className="recommendations__block">
              <div className="recommendations__stars">
                <RecommendationsSrar />
                <RecommendationsSrar />
                <RecommendationsSrar />
                <RecommendationsSrar />
                <RecommendationsSrar />
              </div>
              <div className="recommendations__block-title">Amazing work!</div>
              <div className="recommendations__block-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</div>
              <div className="recommendations__character">
                <img src={Tiana} alt="Tiana" />
                <div className="recommendations__character-info">
                  <div className="recommendations__character-name">Tiana Philips</div>
                  <div className="recommendations__character-profession">Photographer</div>
                </div>
              </div>
            </div>
            <div className="recommendations__block">
              <div className="recommendations__stars">
                <RecommendationsSrar />
                <RecommendationsSrar />
                <RecommendationsSrar />
                <RecommendationsSrar />
                <RecommendationsSrar />
              </div>
              <div className="recommendations__block-title">Great Quality!</div>
              <div className="recommendations__block-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</div>
              <div className="recommendations__character">
                <img src={Talan} alt="Talan" />
                <div className="recommendations__character-info">
                  <div className="recommendations__character-name">Talan Westervelt</div>
                  <div className="recommendations__character-profession">Business man</div>
                </div>
              </div>
            </div>
          </div>
          <div className="recommendations__footer">
            <div className="recommendations__dot"></div>
            <div className="recommendations__dot"></div>
            <div className="recommendations__dot"></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Recommendations;