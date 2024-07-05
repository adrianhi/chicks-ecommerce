// PaymentMethods.tsx
import React from 'react';
import "@styles/PaymentMethods/PaymentMethods.css";
import visa from "@images/PaymentMethods/visa-logo.svg";
import mastercard from "@images/PaymentMethods/mastercard-logo.svg";
import american from "@images/PaymentMethods/american-logo.svg";
import skrill from "@images/PaymentMethods/skrill-logo.svg";
import bitcoin from "@images/PaymentMethods/bitcoin-logo.svg";

const PaymentMethods: React.FC = () => {
  return (
    <div className="payment-methods">
      <img src={visa} alt="VISA" />
      <img src={mastercard} alt="Mastercard" />
      <img src={american} alt="American Express" />
      <img src={skrill} alt="Skrill" />
      <img src={bitcoin} alt="Bitcoin" className="bitcoin-logo" />
      <span>and 50+ more</span>
    </div>
  );
};

export default PaymentMethods;
