import React, { useState } from 'react'
import phoneImage from '../../../img/phone1.png'

function IndexMobile(props) {
  const [phone1, setPhone1] = useState(new Image())
  const { phone_Img } = props

  phone1.src = phoneImage
  return (
    <div className="mobile">
      <div>
        <img src={phone1.src} alt={phone1.alt} />
      </div>
      <div>
        <p className="mobile-head">{phone_Img[0].head}</p>
        <h3 className="mobile-title">{phone_Img[0].title}</h3>
        <p className="mobile-text">{phone_Img[0].text}</p>
      </div>
    </div>
  )
}

export default IndexMobile
