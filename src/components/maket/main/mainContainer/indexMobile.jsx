import React, { useState } from 'react'
import phoneImage from '../../../img/phone1.png'

function IndexMobile(props) {
  const [phone1, setPhone1] = useState(new Image())

  phone1.src = phoneImage
  return (
    <div className="mobile">
      <div>
        <img src={phone1.src} alt={phone1.alt} />
      </div>
      <div>
        <p className="mobile-head">Create an account</p>
        <h3 className="mobile-title">
          Create/login to an existing account to get started
        </h3>
        <p className="mobile-text">
          An account is created with your email and a desired password
        </p>
      </div>
    </div>
  )
}

export default IndexMobile
