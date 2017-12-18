import React, { Component } from 'react';


export default class Donate extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <h1>Ways to Give</h1>
          <p>
            We greatly appreciate your consideration and generosity.
          </p>
        </div>
        <div className="row">
          <h2>Amazon</h2>
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
            Our Amazon wish list is constantly updated with necessities for the rescued
            dogs. Dog toys are greatly appreciated and much enjoyed by all the dogs!
          </p>
        </div>
        <div className="row">
          <h2>PayPal</h2>
          <p>Short description of PayPal donations</p>
          <p>Donate button - refer to PayPal documentation on applying for button</p>
        </div>
      </div>
    );
  }
}
