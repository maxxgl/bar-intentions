const main = document.getElementById("root"); 

const render = () => {
  document.getElementById("song-name").innerHTML = song.name
  song.commits.forEach((commit, key) => {
    let c = make("bar-commit")
    if (commit.head) {
      renderHead(commit, c)
    } else {
      renderCommit(commit, key, song.commits.length, c)
    }
    main.appendChild(c);
  })
}

const renderHead = (data, node) => {
  headHeader(data, node)
  let btn = make("button")
  btn.innerHTML = "+"
  btn.className = "add"
  data.bars.forEach((value, key) => {
    let line = make("bar-line")
    let el = make("input")
    el.value = value
    el.className = "line"
    appendWithSpacer(node, el, key, data.split)
  })
}

const headHeader = (data, node) => {
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
  return node.appendChild(header)
}

const renderCommit = (data, key, length, node) => {
  commitHeader(data, key, length, node)
  data.bars.forEach((value, key) => {
    let el = make("div")
    el.innerHTML = value
    appendWithSpacer(node, el, key, data.split)
  })
}

const commitHeader = (data, key, length, node) => {
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
    <span>Version: ${length - key}</span>
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
  commits: [
    {
      head: true,
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
    {
      head: false,
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
    {
      head: false,
      commited: 1529052866575,
      split: 1,
      bars: [
        "Spit your weed, talk your game",
        "I got to like one hoe",
        "Jump or kick?",
      ]
    },
  ],
}

render()
