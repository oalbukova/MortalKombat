import { createElement } from "./utils.js";

export const player1 = {
  player: 1,
  name: "SONYA",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  changeHP,
  elHP,
  renderHP,
};

export const player2 = {
  player: 2,
  name: "KITANA",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  changeHP,
  elHP,
  renderHP,
};

function changeHP(num) {
  this.hp -= num;
  if (this.hp <= 0) {
    this.hp = 0;
  }
}

function elHP() {
  return document.querySelector(`.player${this.player} .life`);
}

function renderHP() {
  this.elHP().style.width = `${this.hp}%`;
}

export const createPlayer = (playerObj) => {
  const $player = createElement("div", `player${playerObj.player}`);
  const $progressbar = createElement("div", "progressbar");
  const $character = createElement("div", "character");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $img = createElement("img");

  const { hp, name, img } = playerObj;;

  $life.style.width = `${hp}%`;
  $name.innerText = name;
  $img.src = img;

  $progressbar.appendChild($name);
  $progressbar.appendChild($life);

  $character.appendChild($img);

  $player.appendChild($progressbar);
  $player.appendChild($character);

  return $player;
};
