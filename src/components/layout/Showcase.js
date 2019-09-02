import React, { Component } from 'react'

 export class Showcase extends Component {
   
  render() {
    return (
      
        <div className="showcase">
        <img
        
        src={'./showcase.jpg'}
        alt="" 
        />
        <h3 className="margin-bottom-15px">
        Spring / Summer 16
        </h3>
        <p> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda quaerat illum ea corporis dolor cumque consectetur officia animi possimus!
        </p>

        <div className="btn margin-bottom-15px"> 
        Explore Collection
        </div>
        

      
      </div>
      
    )
  }
}

export default Showcase
