import React, { Component } from 'react';
import ClosetItem from './ClosetItem';

 class Closets extends Component {

  // Creating list 
  state = {
    closets: [
     {
    id: '1',   
    image: './product.png',
    text: 'The Essentials',
    subText: 'Lorem ipsum dolor sit.'
    },
    {
    id: '2',
    image: './product.png',
    text: 'Closet No 6',
    subText: 'Lorem ipsum dolor sit ipsum.'
    },
    {
    id: '3',
    image: './product.png',
    text: 'Closet No 14',
    subText: 'Lorem ipsum dolor sit.'
    }
  ]
  };

  // Sending list to ClosetItem
  render() {
    return (
      <div>
        
        {this.state.closets.map(closet => (
          <ClosetItem key={closet.id} closet={closet} />
        ))}
      </div>
    );
  }
}

export default Closets
