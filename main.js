const player1 = {
  name: "PREDATOR",
  hp: 24,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Kunai"],
  attack: function () {
    console.log(`${name} + Fight...`);
  },
};

const player2 = {
  name: "SCORPION",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  weapon: ["fire"],
  attack: function () {
    console.log(`${name} + Fight...`);
  },
};

function createPlayer(type, character) {
  const $arenas = document.querySelector(".arenas");
  const $player1 = document.createElement("div");
  $player1.classList.add(`${type}`);
  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");
  const $character = document.createElement("div");
  $character.classList.add("character");
  const $name = document.createElement("div");
  $name.classList.add("name");
  const $life = document.createElement("div");
  $life.classList.add("life");
  const $img = document.createElement("img");
  $img.classList.add("img");

  $arenas.appendChild($player1);
  $player1.appendChild($progressbar);
  $player1.appendChild($character);
  $progressbar.appendChild($name);
  $progressbar.appendChild($life);
  $character.appendChild($img);

  $life.style.width = `${character.hp}%`;
  $name.innerText = `${character.name}`;
  $life.innerText = `${character.hp}`;
  $img.src = `${character.img}`;
}

createPlayer("player1", player1);
createPlayer("player2", player2);
