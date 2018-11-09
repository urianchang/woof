import React, { Component } from 'react';


export default class Donate extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <h1>Ways to Give</h1>
          <p>
            There are many ways to support Woofie's Rescue.
            We greatly appreciate your consideration and generosity!
          </p>
        </div>
        <div className="row">
          <h3>AmazonSmile</h3>
          <p>
            Please sign up for AmazonSmile and select "Woofies Rescue" as your
            charity to support. Or
            click <a href="https://smile.amazon.com/ch/81-2281994">here</a> to
            skip the selection process. Amazon will donate 0.5% of the total
            price of purchases to your selected charity.
          </p>
          <h3>Amazon Wish List</h3>
          <p>
              Our <a href="https://www.amazon.com/registry/wishlist/171MFHP4F0L1Q/ref=cm_sw_r_cp_ep_ws_io6xBbPE9J363">Amazon wish list</a> is
              constantly updated with supplies needed by the rescued dogs.
          </p>
        </div>
        <div className="row">
          <h3>PayPal</h3>
          <p>A donation of any amount makes a big difference.</p>
          <p>Donate button - refer to PayPal documentation on applying for button</p>
        </div>
      </div>
    );
  }
}
