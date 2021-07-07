import React from "react";

class GetDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      day: "",
      month: "",
      year: "",
      showMessage: false,
    };
    this.show = this.show.bind(this);
  }
  show() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    this.setState({ showMessage: true, day: day, month: month, year: year });
  }

  render() {
    return (
      <div>
        <h1>Date API</h1>
        <button onClick={this.show}>show Date</button>
        <div>{"Day: " + this.state.day}</div>
        <div>{"Month: " + this.state.month}</div>
        <div>{"Year: " + this.state.year}</div>
      </div>
    );
  }
}

export default GetDate;
