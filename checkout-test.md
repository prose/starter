layout: checkout  
title: checkout test  
---  
  
<div>      
      <div>
            <section class="container">
                  <h1>One-time Donation</h1>
                  <button
                    data-checkout-mode="payment"
                    data-price-id="sku_GU4JYXyvvRb2sX"
                  >
                    Donate $5.00 once
                  </button>
                  <button
                    data-checkout-mode="payment"
                    data-price-id="sku_GU4KO8nfdg8G2Z"
                  >
                    Donate $15.00 once
                  </button>
                  <button
                    data-checkout-mode="payment"
                    data-price-id="sku_GU4LB0wBViiYsm"
                  >
                    Donate $50.00 once
                  </button>
            </section>
            <section class="container">
                  <h1>Recurring Donation</h1>
                  <button
                    data-checkout-mode="subscription"
                    data-price-id="plan_GU4MXg0k0Uv1S6"
                  >
                    Donate $20.00 per month
                  </button>
            </section>
      </div>
      <div id="error-message"></div>
</div>