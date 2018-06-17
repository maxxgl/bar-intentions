const main = document.getElementById("root"); 

const render = () => {
  document.getElementById("song-name").innerHTML = song.name
  for (let commit of song.commits) {
    let el = commit.head === true ? renderHead(commit) : renderCommit(commit)
    main.appendChild(el);    
  }
}

const renderHead = data => {
  let newCommit = document.createElement("bar-commit")
  data.bars.forEach((value, key) => {
    let el = document.createElement("input")
    el.value = value
    newCommit.appendChild(el);
    if ((key + 1) % data.split === 0) {
      newCommit.appendChild(document.createElement("spacer"));
    }
  })
  return newCommit
}

const renderCommit = data => {
  let newCommit = document.createElement("bar-commit")
  data.bars.forEach((value, key) => {
    let el = document.createElement("div")
    el.innerHTML = value
    newCommit.appendChild(el);
    if ((key + 1) % data.split === 0) {
      newCommit.appendChild(document.createElement("spacer"));
    }
  })
  return newCommit
}

const song = {
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
        "fight or run?",
      ],
    },
    {
      head: false,
      split: 2,
      bars: [
        "Spit your game, talk your stuff",
        "Grab your gun and your clique and squeeze",
        "Pass that weed, I gotta fight",
        "All them hoes, I got to like one",
        "Our situation is a tight one",
        "fight or run?",
      ]
    }
  ],
}

render()
