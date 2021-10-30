import React, { Component } from 'react'

export default class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
    }
    this.timerId = null
  }
  tick = () => {
    this.setState((state, props) => {
      return { time: state.time + 1 }
    })
  }
  reset = () => {
    this.setState({ time: 0 })
  }

  start = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  stop = () => {
    clearInterval(this.timerId)
    this.timerId = null
  }

  componentDidMount() {
    this.start()
  }

  componentWillUnmount() {
    this.stop()
  }

  componentDidUpdate() {}

  render() {
    const { time } = this.state
    return (
      <article>
        <h1>{time}</h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </article>
    )
  }
}
