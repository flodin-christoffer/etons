import React, { Component } from 'react'

 class ShirtItem extends Component {
 
  
  render() {
    // dekonstruera så man slipper skriva this.props.shirt
    const { image, text, subText} = this.props.shirt;
    return (
    
        <div>
        <img
        src={image} 
        alt=""
        />
        <h5>
        {text}
        </h5>
        <p className="margin-bottom-10px"> 
        {subText}
        </p>
        </div>
            
    )
  }
}


export default ShirtItem
