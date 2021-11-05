import React, { Component } from 'react'
import Slide from './Slide'
import Slider from './Slider'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      width: 250,
      height: 250,
    }
  }
  setFullScreenMode = (isFullScreen) => {
    !isFullScreen
      ? this.setState({ width: '100%', height: '100%' })
      : this.setState({ width: 250, height: 250 })
  }
  setNextImage = () => {
    const { index } = this.state
    this.setState({ index: index + 1 })
  }
  setPrevImage = () => {
    const { index } = this.state
    this.setState({ index: index - 1 })
  }
  render() {
    const { index, width, height } = this.state
    const { slides } = this.props
    return (
      <div>
        <Slide currentImage={slides[index]} width={width} height={height} />
        <Slider
          next={this.setNextImage}
          prev={this.setPrevImage}
          setFullScreenMode={this.setFullScreenMode}
        />
      </div>
    )
  }
}
