import { $formFight, $arenas } from "./utils.js";
import Player from "./players.js";
import Result from "./result.js";
import battle from "./attacks.js";
import generateLogs from "./logs.js";

const player1 = new Player({
  player: 1,
  name: "SONYA",
});

const player2 = new Player({
  player: 2,
  name: "KITANA",
});

const result = new Result();

class Game {
  start = () => {
    $arenas.appendChild(player1.createPlayer());
    $arenas.appendChild(player2.createPlayer());

    generateLogs("start", player1, player2);

    $formFight.addEventListener("submit", function (e) {
      e.preventDefault();
      battle(player1, player2, generateLogs);
      result.showResult(player1, player2, generateLogs);
    });
  };
}

export default Game;
