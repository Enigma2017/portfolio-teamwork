import { RecommendationsSrar } from "../../public/recommendationsImg/RecommendationsSrar";

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
                <img src="/public/recommendationsImg/james.svg" alt="" />
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
          </div>
        </div>
        </div>
      </div>
    );
  }
  
  export default Recommendations;