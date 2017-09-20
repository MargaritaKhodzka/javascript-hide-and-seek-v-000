function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
  var divs = document.getElementById('grand-node')
  let child = divs.children[0]
  while(child) {
    divs = child
    child = divs.children[0]
  }
  return divs
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('.ranked-list')
  for(let i = 0; i < ranked.length; i++) {
    var numbersLists = ranked[i].children
    for(let ii = 0; ii < numbersLists.length; ii++) {
      numbersLists[ii].innerHTML = parseInt(numbersLists[ii].innerHTML) + n
    }
  }
  return ranked
}
