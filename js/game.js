import { $formFight, createElement } from "./utils.js";
import Player from "./players.js";
import battle from "./attacks.js";
import generateLogs from "./logs.js";

let player1;
let player2;

class Game {
  getPlayers = async () => {
    const body = fetch(
      "https://reactmarathon-api.herokuapp.com/api/mk/player/choose"
    ).then((res) => res.json());
    return body;
  };

  showFigtImg = () => {
    const $arenas = document.querySelector(".arenas");
    const $fight = createElement("img", "fight");
    $fight.src = "../assets/fight.gif";
  
    $formFight.classList.add("control_fight");
    $arenas.appendChild($fight);
    
    setTimeout(() => {
      $fight.style.display = "none";
      $formFight.classList.remove("control_fight");
    }, 2500);
  };

  start = async () => {
    this.showFigtImg();
    const p1 = JSON.parse(localStorage.getItem("player1"));
    const p2 = await this.getPlayers();

    player1 = new Player({
      ...p1,
      player: 1,
      rootSelector: "arenas",
    });
    player2 = new Player({
      ...p2,
      player: 2,
      rootSelector: "arenas",
    });
    player1.createPlayer();
    player2.createPlayer();

    generateLogs("start", player1, player2);

    $formFight.addEventListener("submit", function (e) {
      e.preventDefault();
      battle(player1, player2, generateLogs);
    });
  };
}

export default Game;
