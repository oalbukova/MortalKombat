const player1 = {
  name: "Arbok",
  hp: 24,
  img: "src",
  weapon: ["Kunai"],
  attack: function () {
    console.log(`${name} ` + "Fight...");
  },
};

const player2 = {
  name: "Pikacu",
  hp: 19,
  img: "src",
  weapon: ["fire"],
  attack: function () {
    console.log(`${name} ` + "Fight...");
  },
};

function createPlayer(type, name, hp) {
  const $player1 = document.createElement("div");
  $player1.classList.add(`${type}`);
  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");
  const $character = document.createElement("div");
  $character.classList.add("character");
  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.style.width = "100%";

  const $name = document.createElement("div");
  $name.classList.add("name");
  const $img = document.createElement("img");
  $img.classList.add("img");
  const $arenas = document.querySelector(".arenas");

  $arenas.appendChild($player1);
  $player1.appendChild($progressbar);
  $player1.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  $name.innerText = `${name}`;
  $life.innerText = `${hp}`;
  $img.src = "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif";
}

createPlayer("player1", "SCORPION", 50);
createPlayer("player2", "SUB-ZERO", 80);
