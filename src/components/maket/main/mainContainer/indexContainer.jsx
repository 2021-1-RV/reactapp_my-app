import IndexMobile from './indexMobile'
import IndexMobile2 from './indexMobile2'
import phone1 from '../../../img/phone1.png'
import phone2 from '../../../img/phone2.png'
import React from 'react'

const phone_Img = [
  {
    src: phone1,
    alt: 'Телефончик',
    head: 'Create an account',
    title: 'Create/login to an existing account to get started',
    text: 'An account is created with your email and a desired password',
  },
  {
    src: phone2,
    alt: 'Телефончик',
    head: 'Explore varieties',
    title: 'Shop for your favorites meals as e dey hot',
    text: 'Shop for your favorites meals or drinks and enjoy while doing it',
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
