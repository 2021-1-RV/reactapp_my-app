import React, { useState } from 'react'
import logoImg from '../../img/logo.png'

function IndexFooter(props) {
  const [logo, setlogoImg] = useState(new Image())

  logo.src = logoImg
  return (
    <section className="footer-container cont-flex">
      <div>
        <img src={logo.src} alt={logo.alt} />
      </div>

      <p>Copywright 2020 Bella Onojie.com</p>
    </section>
  )
}

export default IndexFooter
