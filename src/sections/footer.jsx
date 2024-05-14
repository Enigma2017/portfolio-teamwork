import garage from '/footer/garage.svg';
import station from '/footer/station.svg';
import petroleum from '/footer/petroleum.svg';
import station2 from '/footer/station2.svg';

function Footer() {

  return (
    <div className="footer">
      <div className="footer__logos">
        <a href="/"><img src={petroleum} alt="logo petroleum" /></a>
        <a href="/"><img src={station} alt="logo station" /></a>
        <a href="/"><img src={garage} alt="logo garage" /></a>
        <a href="/"><img src={station2} alt="logo station2" /></a>
      </div>

      <div className="footer__copyright">
        <p> &copy; {new Date().getFullYear()} All Rights Reserved.Ojjomedia </p>
      </div>
    </div>
  );
}

export default Footer;