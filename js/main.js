const main = document.getElementById("root"); 

const render = () => {
  document.getElementById("song-name").innerHTML = song.name

  const headDataStore = Object.assign({}, song.head)
  const head = renderHead(song.head)
  main.appendChild(head)

  for (let i = song.commits.length - 1; i >= 0; i--) {
    let c = make("bar-commit")
    renderCommit(song.commits[i], i, c)
    main.appendChild(c);
  }
}

const renderHead = data => {
  let commit = make("bar-commit")
  commit.appendChild(headHeader(data))

  data.bars.forEach((value, key) => {
    let line = make("bar-line")
    let el = make("input")
    el.value = value
    let btn = make('button')
    btn.innerHTML = '+'
    line.appendChild(el)
    line.appendChild(btn)
    appendWithSpacer(commit, line, key, data.split)
  })
  return commit
}

const headHeader = data => {
  let header = make("head-header")
  header.innerHTML = `
    <span>Version: HEAD</span>
    <span class="commit-right">
      <span>Split: </span>
      <input value=${data.split} class="split"/>
      <button>commit</button>
    </span>
    <hr />
  `
  return header
}

const renderCommit = (data, key, node) => {
  commitHeader(data, key, node)
  data.bars.forEach((value, key) => {
    let el = make("div")
    el.innerHTML = value
    appendWithSpacer(node, el, key, data.split)
  })
}

const commitHeader = (data, key, node) => {
  let header = make("div")
  const d = new Date(data.commited)
  const year = d.getFullYear()
  const month = d.getMonth()
  const day = d.getDate()
  const hour = d.getHours()
  const min = d.getMinutes()
  const hours = d.getHours()
  const minutes = "0" + d.getMinutes()
  const time = hours + ':' + minutes.substr(-2)
  const date = month + '/' + day + '/' + year + ' ' + time
  header.innerHTML = `
    <span>Version: ${key + 1}</span>
    <span class="commit-right">${date}</span>
    <hr />
  `
  node.appendChild(header)
}

const appendWithSpacer = (commit, line, key, split) => {
  commit.appendChild(line);
  if ((key + 1) % split === 0) {
    commit.appendChild(make("spacer"));
  }
}

const make = type => document.createElement(type)

let song = {
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

render()
