import React from 'react'
import IndexHeader from './header/indexHeader'
import IndexMain from './main/indexMain'
import IndexFooter from './footer/indexFooter'
import logoImg from '../img/logo.png'

const head_footer_Img = [
  {
    src: logoImg,
    alt: 'Лого',
  },
]

function Maket() {
  return (
    <div>
      <IndexHeader head_footer_Img={head_footer_Img}></IndexHeader>
      <IndexMain></IndexMain>
      <IndexFooter head_footer_Img={head_footer_Img}></IndexFooter>
    </div>
  )
}

export default Maket
