import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptiopbox' >
       <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade ">Reviews(122)</div>
       </div>
       <div className="descriptionbox-description">
        <p>
            
      A description box on an eCommerce website is a 
      section where you can provide detailed information 
      about a product. This box typically includes key details
       that help customers understand the features, benefits, 
       and specifications of the item they are viewing. A well-written
        description can significantly improve the shopping experience 
        and increase conversions.
        </p>
       </div>
    </div>
  )
}

export default DescriptionBox
