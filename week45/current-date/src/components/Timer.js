import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSecond: 99,
      stopTimer: false,
    };
    this.stop = this.stop.bind(this);
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      if (this.state.totalSecond > 0) {
        this.setState(({ totalSecond }) => ({
          totalSecond: totalSecond - 1,
        }));
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  stop() {
    clearInterval(this.myInterval);
    this.setState({ stopTimer: true });
  }

  render() {
    return (
      <div>
        <h2>{this.state.totalSecond}</h2>
        <button onClick={this.stop}>Stop Timer</button>
      </div>
    );
  }
}

export default Timer;
