import { createElement } from "./utils.js";

class Player {
  constructor(props) {
    this.player = props.player;
    this.name = props.name;
    this.hp = 100;
    this.img = `http://reactmarathon-api.herokuapp.com/assets/${this.name.toLowerCase()}.gif`;
  }
  changeHP = (num) => {
    this.hp -= num;
    if (this.hp <= 0) {
      this.hp = 0;
    }
  };
  elHP = () => document.querySelector(`.player${this.player} .life`);

  renderHP = () => (this.elHP().style.width = `${this.hp}%`);

  createPlayer = () => {
    const $player = createElement("div", `player${this.player}`);
    const $progressbar = createElement("div", "progressbar");
    const $character = createElement("div", "character");
    const $life = createElement("div", "life");
    const $name = createElement("div", "name");
    const $img = createElement("img");

    $life.style.width = `${this.hp}%`;
    $name.innerText = this.name;
    $img.src = this.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
  };

}

export default Player;