import React, {Component} from "react";

export default class Jokes extends Component {
  componentDidMount() {
    this.props.Jokes.getJoke();
  }

  render() {
    return (
      <div>
        {this.props.jokes.list.map((joke, key) => (
          <div key={key} data-test="joke">
            {joke}
          </div>
        ))}
      </div>
    )
  }
};
