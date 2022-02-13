import React from "react";
import StripeCheckout from "react-stripe-checkout";
import CrownSVG from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KSaRWSAdtqYs05T54Tbj02uU4Bo3kj0zA31E4XpwzEInuDIrshfLju3dQ35Dfk2uVYV7BqIXbSfsbktMq7hsBER00Mxgbb3II";

  const onToken = (token) => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image={CrownSVG}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
