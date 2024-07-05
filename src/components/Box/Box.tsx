import downArrowSvg from "@public/down-arrow.svg";
import "@styles/Box/Box.css";
interface Props {
  title: string;
  text: string;
  icon: string;
}
const Box: React.FC<Props> = ({ title,text, icon }) => {
  return (
    <div className="box">
      <div>
        <img src={icon} alt={title} className="icon" />
      </div>
      <div className="title-container">
        <div>
          <span className="title">{title}</span>
        </div>
        <div>
          <span className="all">{text}</span>
        </div>
      </div>
      <div>
        <img src={downArrowSvg} alt="Arrow" className="down-arrow-icon" />
      </div>
    </div>
  );
};

export default Box;
