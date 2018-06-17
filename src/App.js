import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { ...song }

  onSplitChange = e => this.setState({
    head: {
      ...this.state.head,
      [e.target.name]: e.target.value,
    }
  })

  onBarChange = e => {
    let newBars = [...this.state.head.bars]
    newBars[e.target.name] = e.target.value
    this.setState({
      head: {
        ...this.state.head,
        bars: newBars,
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h2>Bar Intentions</h2>
        </header>
        <main>
          <h3>{this.state.name}</h3>
          <bar-commit>
            <HeadHeader data={this.state.head} change={this.onSplitChange} />
            <hr />
            <Head data={this.state.head} change={this.onBarChange} />
          </bar-commit>
        </main>
      </React.Fragment>
    );
  }
}

const Head = props => props.data.bars.map((value, i) =>
  <bar-line key={i}>
    <input
      name={i}
      value={value}
      onChange={props.change}
    />
    <button>+</button>
    {(i + 1) % props.data.split === 0 ? <space-out /> : null}
  </bar-line>
)

const HeadHeader = props => (
  <head-header>
    <span>Version: HEAD</span>
    <span className="commit-right">
      Split:
      <input
        type="number"
        value={props.data.split}
        className="split"
        name="split"
        onChange={props.change}
      />
      <button>commit</button>
    </span>
  </head-header>
)

export default App;

var song = {
  name: "Notorious",
  author: "maxx",
  head: {
    split: 2,
    bars: [
      "Spit your game, talk your stuff",
      "Grab your gun and your clique and squeeze",
      "Pass that weed, I gotta fight",
      "All them hoes, I got to like one",
      "Our situation is a tight one",
      "now what? fight or run?",
    ],
  },
  commits: [
    {
      commited: 1529052866575,
      split: 1,
      bars: [
        "Spit your weed, talk your game",
        "I got to like one hoe",
        "Jump or kick?",
      ]
    },
    {
      split: 2,
      commited: 1529253863575,
      bars: [
        "Spit your game, talk your stuff",
        "Grab your gun and your clique and squeeze",
        "Pass that weed, I gotta fight",
        "All them hoes, I got to like one",
        "Our situation is a tight one",
        "now what? fight or run?",
      ]
    },
  ],
}
