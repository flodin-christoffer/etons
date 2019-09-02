import React, { Component } from 'react';
import ShirtItem from './ShirtItem';

 class Shirts extends Component {

  // Creating shirt list...
  state = {
    shirts: [
     {
    id: '1',   
    image: './shirt.png',
    text: 'The First Shirt',
    subText: 'Slim Fit / 1200 SEK'
    },
    {
    id: '2',
    image: './shirt2.png',
    text: 'The Second Shirt',
    subText: 'Perfect Fit / 1800 SEK'
    },
    {
    id: '3',
    image: './shirt3.png',
    text: 'The Third Shirt',
    subText: 'Great Fit / 1400 SEk'
    }
    ,
    {
    id: '4',
    image: './shirt.png',
    text: 'The Fourth Shirt',
    subText: 'Slim Fit / 1200 SEK'
    },
    {
    id: '5',
    image: './shirt2.png',
    text: 'The Fifth Shirt',
    subText: 'Perfect Fit / 1800 SEK'
    },
    {
    id: '6',
    image: './shirt3.png',
    text: 'The Last Shirt',
    subText: 'Great Fit / 1400 SEk'
    }
  ]
  };

  // Sending list to ShirtItem
  render() {
    return (
      <div style={shirtStyle}>
        
        {this.state.shirts.map(shirt => (
          <ShirtItem key={shirt.id} shirt={shirt} />
        ))}
      </div>
    );
  }
}


const shirtStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '10px',
  
}

export default Shirts
