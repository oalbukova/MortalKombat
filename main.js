import { $arenas, $formFight } from "./utils.js";
import { player1, player2, createPlayer } from "./players.js";
import battle from "./attacks.js";
import generateLogs from "./logs.js";
import showResult from "./result.js";

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

generateLogs("start", player1, player2);

$formFight.addEventListener("submit", function (e) {
  e.preventDefault();
  battle();
  showResult();
});
