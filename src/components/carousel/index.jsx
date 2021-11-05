import React, { Component } from 'react'
import Slide from './Slide'
import Slider from './Slider'
export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      width: 600,
      height: 400,
      timerId: null,
    }
  }
  setFullScreenMode = (isFullScreen) => {
    !isFullScreen
      ? this.setState({ width: '50%', height: '50%' })
      : this.setState({ width: 600, height: 400 })
  }
  setNextImage = () => {
    const { index } = this.state
    const { slides } = this.props
    this.setState({ index: (index + 1) % slides.length })
  }
  setPrevImage = () => {
    const { index } = this.state
    const { slides } = this.props
    this.setState({ index: (index - 1 + slides.length) % slides.length })
  }
  start = () => {
    if (!this.timerId) {
      this.timerId = setInterval(this.setNextImage, 2000)
    }
  }
  stop = () => {
    clearInterval(this.timerId)
    this.timerId = null
  }
  startPlay = (isPlay) => {
    !isPlay ? this.start() : this.stop()
  }

  render() {
    const { index, width, height } = this.state
    const { slides } = this.props
    return (
      <div>
        <Slide
          currentImage={slides[index]}
          nextImage={slides[(index + 1) % slides.length]}
          prevImage={slides[(index - 1 + slides.length) % slides.length]}
          width={width}
          height={height}
        />
        <Slider
          next={this.setNextImage}
          prev={this.setPrevImage}
          setFullScreenMode={this.setFullScreenMode}
          startPlay={this.startPlay}
        />
      </div>
    )
  }
}
