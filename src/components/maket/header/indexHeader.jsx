import React, { useState } from 'react'
import logoImg from '../../img/logo.png'

function IndexHeader(props) {
  const [logo, setlogoImg] = useState(new Image())

  logo.src = logoImg
  return (
    <section className="container cont-flex">
      <div>
        <img src={logo.src} alt={logo.alt} />
      </div>

      <nav>
        <ul>
          <li class="nav-li">Home</li>
          <li class="nav-li">Product</li>
          <li class="nav-li">Faq</li>
          <li class="nav-li">Contacts</li>
        </ul>
      </nav>
    </section>
  )
}

export default IndexHeader
