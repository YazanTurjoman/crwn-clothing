import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    'pk_test_51IdeAtLEP9RMVIfAd10P1gMu6lTyMtQ69x6r0wsSiuiJbFHSpeYhpS6fA05H9RqR7U3hp0iJguRyLhuoeKmHPHEX007eUQSGNW';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Cloting Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
