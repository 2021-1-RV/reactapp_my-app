import React, { Component } from 'react'
import Icon from '@mdi/react'
import {
  mdiSkipNext,
  mdiSkipPrevious,
  mdiFullscreen,
  mdiFullscreenExit,
} from '@mdi/js'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFullScreen: false,
    }
  }
  handleFullScreen = () => {
    const { isFullScreen } = this.state
    const { setFullScreenMode } = this.props
    this.setState({ isFullScreen: !isFullScreen })
    setFullScreenMode(isFullScreen)
  }
  render() {
    const { isFullScreen } = this.state
    const { next, prev } = this.props
    return (
      <div>
        <div>
          <Icon onClick={prev} path={mdiSkipPrevious} width="100px" />
          <Icon onClick={next} path={mdiSkipNext} width="100px" />
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
