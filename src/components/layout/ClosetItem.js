import React, { Component } from 'react'

 class ClosetItem extends Component {
 
  
  render() {
    // dekonstruera så man slipper skriva this.props.closet
    const { image, text, subText} = this.props.closet;
    return (
    
        <div className="closet">
        <img
        src={image} 
        alt=""
        />
        <h3>
        {text}
        </h3>
        <p className="margin-bottom-25px"> 
        {subText}
        </p>
        </div>
            
    )
  }
}

export default ClosetItem
