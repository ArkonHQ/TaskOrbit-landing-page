import { Link } from "react-scroll";

const Button = ({ text, firstText, className, id }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
      {/* Try our App button */}
      <a className={`w-full sm:w-auto ${className ?? ""} cta-wrapper`}>
        <div className="cta-button group w-full sm:w-auto">
          <div className="bg-circle" />
          <p className="text">{firstText}</p>
          <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="Try button" />
          </div>
        </div>
      </a>

      <Link
        to="Features"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={`w-full sm:w-auto ${className ?? ""} cta-wrapper cursor-pointer`}
      >
        <div className="premium-btn group w-full sm:w-auto">
          <div className="btn-glow" />
          <p className="btn-text">{text}</p>
          <div className="btn-icon">
            <img src="/images/arrow-2.svg" alt="View Features" />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Button;
