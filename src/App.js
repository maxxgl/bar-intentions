import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = { ...song }

  onLineChange = e => this.setState({
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

  onCommit = () => {
    const newCommit = { ...this.state.head, commited: + new Date() }
    this.setState({ commits: [...this.state.commits, newCommit] })
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
            <HeadHeader
              data={this.state.head}
              change={this.onLineChange}
              commit={this.onCommit}
            />
            <hr />
            <Head data={this.state.head} change={this.onBarChange} />
          </bar-commit>
          {this.state.commits.slice(0).reverse().map((commit, i) =>
            <bar-commit key={i}>
              <Header data={commit} index={this.state.commits.length - i} />
              <hr />
              <Bars bars={commit.bars} split={commit.split} />
            </bar-commit>
          )}
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

const Bars = props => props.bars.map((bar, i) =>
  <bar-line key={i}>
    {bar}
    {(i + 1) % props.split === 0 ? <space-out /> : null}
  </bar-line>
)

const HeadHeader = props => (
  <head-header>
    <span>Version: HEAD</span>
    <span>
      <input
        type="number"
        value={props.data.split}
        className="split"
        name="split"
        onChange={props.change}
      />
      &nbsp; Lines per Bar
    </span>
    <button onClick={props.commit}>commit</button>
  </head-header>
)


const Header = props => {
  const d = new Date(props.data.commited)
  const year = d.getFullYear()
  const month = d.getMonth()
  const day = d.getDate()
  const hours = d.getHours()
  const minutes = "0" + d.getMinutes()
  const time = hours + ':' + minutes.substr(-2)
  const date = month + '/' + day + '/' + year + ' ' + time
  return (
    <head-header>
      <span>Version: {props.index}</span>
      <span>
        {props.data.split}
      </span>
      <span>{date}</span>
    </head-header>
  )
}

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
      split: 1,
      commited: 1529052866575,
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
