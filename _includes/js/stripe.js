<script>
      // modified from: https://github.com/stripe-samples/github-pages-stripe-checkout
      // Replace with publishable key when testing is complete: https://dashboard.stripe.com/test/apikeys
      var PUBLISHABLE_KEY = 'pk_test_51Ku1ZtGXWvfqj4fzGDeVJ09Ql3iLe4pH0NQE0ME4lp5X5D4fxHuJnXMnPI24P0aPmXy8KEHT7pLsnQoQVJV71VkV00PHa2Sq0z';
      // Replace with the domain you want your users to be redirected back to after payment
      var DOMAIN = location.href.replace(/[^/]*$/, '');

      var stripe = Stripe(PUBLISHABLE_KEY);

      // Handle any errors from Checkout
      var handleResult = function (result) {
        if (result.error) {
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      };

      document.querySelectorAll('button').forEach(function (button) {
        button.addEventListener('click', function (e) {
          var mode = e.target.dataset.checkoutMode;
          var priceId = e.target.dataset.priceId;
          var items = [{ price: priceId, quantity: 1 }];

          // Make the call to Stripe.js to redirect to the checkout page
          // with the sku or plan ID.
          stripe
            .redirectToCheckout({
              mode: mode,
              lineItems: items,
              successUrl:
                DOMAIN + 'success.html?session_id={CHECKOUT_SESSION_ID}',
              cancelUrl:
                DOMAIN + 'canceled.html?session_id={CHECKOUT_SESSION_ID}',
            })
            .then(handleResult);
        });
      });
    </script>