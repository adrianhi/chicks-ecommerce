import "@styles/SaleCard/SaleCard.css";
import cart from "@public/cart.svg";
interface Product {
  image: string;
  title: string;
  price: number;
  oldPrice?: number; // Optional prop
  inStock: boolean;
  onSale: boolean;
}
const SaleCard: React.FC<Product> = ({
  image,
  title,
  price,
  oldPrice,
  inStock,
  onSale,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-left">
          {onSale && (
            <div className="badge-container">
              <span className="badge-dot"></span>
              <div className="badge">ON SALE</div>
            </div>
          )}
          {inStock && <div className="stock-badge">In stock</div>}
        </div>
        <div className="card-header-right">
          <input
            type="number"
            className="quantity-input"
            min="1"
            defaultValue="1"
          />
        </div>
      </div>
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-price">
          ${price} {oldPrice && <span className="old-price">${oldPrice}</span>}
        </div>
        <div className="card-description">
          Lorem ipsum dolor sit amet consectetur adipiscing elitr.
        </div>
      </div>
      <div className="card-footer">
        <button className="card-button details-button">Details</button>
        <button className="card-button add-button">
          ADD
          <img src={cart} alt="cart" className="cart-icon" />
        </button>
      </div>
    </div>
  );
};

export default SaleCard;
