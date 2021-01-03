import React from 'react';

class Product extends React.Component {
  // constructor() {
  //   this.showPrice = this.showPrice.bind(this);
  // }

  showPrice() {
    alert(this.props.item.price);
  }

  render() {
    return <li onClick={() => this.showPrice()}>
      {/* <li onClick={this.showPrice.bind(this)}> */}
      {/* <li onClick={this.showPrice}> */}
      <h3>{this.props.item.name}</h3>
      <p>{this.props.item.description}</p>
    </li>;
  }
}

export default Product;

// HTML Events vs React Events
{/* <li onclick="...">...</li>
<li onClick={...}>...</li>

<li onclick="showPrice()">...</li>
<li onClick={showPrice}>...</li>

<li onClick={() => this.showPrice()}>...</li>

// HTML: return false
// React: explicitly call preventDefault
<a
  href="#"
  onClick={(e) => { e.preventDefault(); console.log("clicked"); }}
>
  Click
</a> */}