import IndexMobile from './indexMobile'
import IndexMobile2 from './indexMobile2'
import phone1 from '../../../img/phone1.png'
import phone2 from '../../../img/phone2.png'
import React from 'react'

const phone_Img = [
  {
    src: phone1,
    alt: 'Телефончик',
  },
  {
    src: phone2,
    alt: 'Телефончик',
  },
]

function IndexContainer() {
  return (
    <div>
      <p className="howThe">How the app works</p>
      <IndexMobile phone_Img={phone_Img}></IndexMobile>
      <IndexMobile2></IndexMobile2>
    </div>
  )
}

export default IndexContainer
