import { ReactComponent as IconSvg } from './images/icon-music.svg';
import { ReactComponent as HeroSvg } from './images/illustration-hero.svg';

import './styles.scss';

function OrderSummary() {
  return (
    <div class="sum-container">
        <div class="sum-img-hero">
            {/* <HeroSvg ></HeroSvg> */}
        </div>
        <div class="sum-content">

            <div class="order-main">
                <h1>Order Summary</h1>
                <p>You can now listen to millions of songs, audiobooks, and podcasts on any 
                    device anywhere you like!
                </p>
            </div>

            <div class="order-details">
                <div class="icon"></div>
                <div class="order-specs">
                    <p>Annual Plan</p>
                    <p>$59.99/year</p>
                </div>

                <a href="">Change</a>

            </div>
            <button className="continue">Proceed to Payment</button>
            <button className="cancel">Cancel Order</button>
        </div>
    </div>
  );
}

export default OrderSummary;
