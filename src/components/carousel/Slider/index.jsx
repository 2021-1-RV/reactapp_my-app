import React, { Component } from 'react'
import Icon from '@mdi/react'
import {
  mdiSkipNext,
  mdiSkipPrevious,
  mdiFullscreen,
  mdiFullscreenExit,
  mdiPlay,
  mdiPause,
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
  handleFullScreen = () => {
    const { isFullScreen } = this.state
    const { setFullScreenMode } = this.props
    this.setState({ isFullScreen: !isFullScreen })
    setFullScreenMode(isFullScreen)
  }
  handlerPlay = () => {
    const { isPlay } = this.state
    const { startPlay } = this.props
    this.setState({ isPlay: !isPlay })
    startPlay(isPlay)
  }
  render() {
    const { isPlay, isFullScreen } = this.state
    const { next, prev } = this.props
    return (
      <div>
        <div>
          <Icon onClick={prev} path={mdiSkipPrevious} width="100px" />
          <Icon onClick={next} path={mdiSkipNext} width="100px" />
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
