import React, { Component } from 'react'
import Icon from '@mdi/react'
import {
  mdiSkipPrevious,
  mdiPlay,
  mdiPause,
  mdiFullscreen,
  mdiFullscreenExit,
  mdiSkipNext,
} from '@mdi/js'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlay: false,
      isFullScreen: false,
    }
    this.timerId = null
  }
  handlerPlay = () => {
    const { isPlay } = this.state
    this.setState({ isPlay: !isPlay })
  }
  handleFullScreen = () => {
    const { isFullScreen } = this.state
    const { setFullScreenMode } = this.props
    this.setState({ isFullScreen: !isFullScreen })
    setFullScreenMode(isFullScreen)
  }

  render() {
    const { isPlay, isFullScreen } = this.state
    const { next, prev } = this.props
    return (
      <div>
        <div>
          <Icon onClick={prev} path={mdiSkipPrevious} width="100px" />
          <Icon onClick={next} path={mdiSkipNext} width="100px" />
        </div>
        <div>
          <Icon
            onClick={this.handlerPlay}
            path={isPlay ? mdiPause : mdiPlay}
            width="100px"
          />
          <Icon
            onClick={this.handleFullScreen}
            path={isFullScreen ? mdiFullscreenExit : mdiFullscreen}
            width="100px"
          />
        </div>
      </div>
    )
  }
}
