import React from "react";
import Gaming from "react-progressbar";
import "./styles.css";

class App extends React.Component {
  state = {
    progress: 50
  };

  componentDidMount() {
    const interval = setInterval(() => {
      const { progress } = this.state;
      if (progress > 100) {
        this.setState((prev) => {
          return {
            progress: (prev.progress = 99)
          };
        });
      } else if (progress === 0) {
        this.setState((prev) => {
          return {
            progress: (prev.progress = 0)
          };
        });
      } else {
        this.setState((prev) => {
          return {
            progress: prev.progress - 0.1
          };
        });
      }
    }, 1000);
  }
  clamp = (min, value, max) => {
    return Math.min(Math.max(min, value), max);
  };
  render() {
    const { progress } = this.state;
    return (
      <div className="Bar-Gaming">
        <div className="Gaming">
          <Gaming completed={this.clamp(0, progress, 100)} />
        </div>
        <button
          class="button-54"
          onClick={() => this.setState({ progress: this.state.progress + 10 })}
        >
          Gaming
        </button>
      </div>
    );
  }
}

export default App;
