import arrowLeft from "@public/arrow-left.svg";
import arrowRight from "@public/arrow-right.svg";
import "@styles/Pagination/Pagination.css";
const Pagination: React.FC = () => {
  return (
    <div>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link">
            <img src={arrowLeft} alt="Previous" className="pagination-btn" />
          </button>
        </li>
        <li className="page-item active">
          <button className="page-link">1</button>
        </li>
        <li className="page-item">
          <button className="page-link">2</button>
        </li>{" "}
        <li className="page-item">
          <button className="page-link">3</button>
        </li>{" "}
        <li className="page-item">
          <button className="page-link">4</button>
        </li>
        <li className="page-item">
          <button className="page-link">
            <img src={arrowRight} alt="Next" className="pagination-btn" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
