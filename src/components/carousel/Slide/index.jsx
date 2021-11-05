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
    const { currentImage, nextImage, prevImage, width, height } = this.props
    return (
      <div className="allImage">
        <img
          src={prevImage.src}
          alt="image"
          width={width}
          height={height}
          className="image"
        ></img>
        <img
          src={currentImage.src}
          alt="image"
          width={width}
          height={height}
        ></img>
        <img
          src={nextImage.src}
          alt="image"
          width={width}
          height={height}
          className="image"
        ></img>
      </div>
    )
  }
}
