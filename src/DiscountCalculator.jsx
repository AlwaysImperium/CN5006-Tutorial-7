
import { useState } from 'react';

function DiscountCalculator({ productName, price }) {
  const [discount, setDiscount] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);

  const calculateDiscount = () => {
    const percentage = Number(discount);

    if (
      discount.trim() === '' ||
      !Number.isFinite(percentage) ||
      percentage < 0 ||
      percentage > 100
    ) {
      alert('Please enter a discount between 0 and 100.');
      return;
    }

    const discountedPrice = price - (price * percentage / 100);
    setFinalPrice(discountedPrice);
  };

  return (
    <div>
      <h2>Product Discount Calculator</h2>

      <p>Product: {productName}</p>
      <p>Original Price: £{price.toFixed(2)}</p>

      <label htmlFor="discount">Discount Percentage (%): </label>
      <input
        id="discount"
        type="number"
        min="0"
        max="100"
        value={discount}
        onChange={(e) => {
          setDiscount(e.target.value);
          setFinalPrice(null);
        }}
      />

      <button onClick={calculateDiscount}>
        Calculate Discount
      </button>

      {finalPrice !== null && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          Discounted Price: £{finalPrice.toFixed(2)}
        </p>
      )}
    </div>
  );
}

export default DiscountCalculator;
