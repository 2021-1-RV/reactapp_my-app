import React, { Component } from 'react'

export default class Slide extends Component {
  constructor(props) {
    super(props)
    const img = new Image()
    this.state = {
      img,
    }
  }
  load = () => {
    const { img } = this.state
    const {
      currentImage: { src },
    } = this.props
    img.src = src
  }
  componentDidMount() {
    this.load()
  }
  render() {
    const { currentImage, width, height } = this.props
    return (
      <div>
        <img src={currentImage.src} width={width} height={height}></img>
      </div>
    )
  }
}
