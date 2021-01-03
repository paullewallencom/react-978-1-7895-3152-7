import React from 'react';
import './Catalog.css';
import logo from './logo.svg';

class Catalog extends React.Component {
  render() {
    let title = "Catalog";
    return (
      <div>
        <h2>
          {title}
        </h2>
      </div>
    );
  }
}

export default Catalog;
