<template>
  <section class="container">
    <div id="container">
      <h1 id="isRight"></h1>
      <ul id="list"></ul>
    </div>
  </section>
</template>

<script>
export default {};
var list = document.getElementById("list");
var base, randomized, dragging, draggedOver;
var isRight = "Not In Order!";

const genRandom = array => {
  base = array.slice();
  randomized = array.sort(() => Math.random() - 0.5);
  if (randomized.join("") !== base.join("")) {
    renderItems(randomized);
  } else {
    //recursion to account if the randomization returns the original array
    genRandom();
  }
};

const renderItems = data => {
  document.getElementById("isRight").innerText = isRight;
  list.innerText = "";
  data.forEach(item => {
    var node = document.createElement("li");
    node.draggable = true;
    node.style.backgroundColor = item;
    node.style.backgroundColor =
      node.style.backgroundColor.length > 0 ? item : "lightblue";
    node.addEventListener("drag", setDragging);
    node.addEventListener("dragover", setDraggedOver);
    node.addEventListener("drop", compare);
    node.innerText = item;
    list.appendChild(node);
  });
};

const compare = e => {
  var index1 = randomized.indexOf(dragging);
  var index2 = randomized.indexOf(draggedOver);
  randomized.splice(index1, 1);
  randomized.splice(index2, 0, dragging);

  isRight =
    randomized.join("") === base.join("") ? "In Order!" : "Not In Order!";

  renderItems(randomized);
};

const setDraggedOver = e => {
  e.preventDefault();
  draggedOver = Number.isNaN(parseInt(e.target.innerText))
    ? e.target.innerText
    : parseInt(e.target.innerText);
};

const setDragging = e => {
  dragging = Number.isNaN(parseInt(e.target.innerText))
    ? e.target.innerText
    : parseInt(e.target.innerText);
};

// genRandom([0, 1, 2, 3, 4, 5, 6])
genRandom(["red", "orange", "yellow", "green", "blue", "indigo", "violet"]);
</script>
<style scoped>
#container {
  width: 300px;
  display: block;
  margin: auto;
}

p {
  float: right;
}

#list {
  list-style: none;
}

#list li {
  margin: 10px;
  cursor: pointer;
}
</style>
