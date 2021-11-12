import React, { useState } from 'react'
import phoneImage2 from '../../../img/phone2.png'

function IndexMobile2(props) {
  const [phone2, setPhone1] = useState(new Image())

  phone2.src = phoneImage2
  return (
    <div className="mobile2">
      <div>
        <img src={phone2.src} alt={phone2.alt} />
      </div>
      <div>
        <p className="mobile-head">Explore varieties</p>
        <h3 className="mobile-title">
          Shop for your favorites meals as e dey hot
        </h3>
        <p className="mobile-text">
          Shop for your favorites meals or drinks and enjoy while doing it
        </p>
      </div>
    </div>
  )
}

export default IndexMobile2
