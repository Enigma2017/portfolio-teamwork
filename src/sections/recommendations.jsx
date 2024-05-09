import { RecommendationsSrar } from "../../public/recommendationsImg/RecommendationsSrar";

function Recommendations() {

    return (
      <div className="recommendations">
        <div className="recommendations__main-title">Recommendations</div>
        <div className="recommendations__description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</div>
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
          </div>
        </div>
      </div>
    );
  }
  
  export default Recommendations;