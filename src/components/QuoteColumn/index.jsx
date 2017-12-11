import React, { Component } from 'react';
import './quote.css';

export default class QuoteColumn extends Component {
  render() {
    return(
      <div className="four columns quote-block">
        <p className="quote-text">
          <span className="quote-quotation">&ldquo;</span>
          A dog is the only thing on earth that loves you more than
          you love yourself.&rdquo;
        </p>
        <p className="quote-author">
          &#8211; Josh Billings
        </p>
      </div>
    );
  }
}
