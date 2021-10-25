import { player1, player2 } from "./players.js";
import { $arenas, createElement } from "./utils.js";
import generateLogs from "./logs.js";

const $rendomButton = document.querySelector("button");

const createReloadButton = () => {
  const $reloadButtonDiv = createElement("div", "reloadWrap");
  const $reloadButton = createElement("button", "button");
  $reloadButton.innerText = "Reload";

  $reloadButton.addEventListener("click", function () {
    window.location.reload();
  });

  $reloadButtonDiv.appendChild($reloadButton);
  $arenas.appendChild($reloadButtonDiv);
};

const playerWins = (name) => {
  const $winTitle = createElement("div", "loseTitle");
  if (name) {
    $winTitle.innerText = `${name} wins`;
  } else {
    $winTitle.innerText = "draw";
  }
  return $winTitle;
};

const showResult = () => {
  if (player1.hp === 0 || player2.hp === 0) {
    $rendomButton.disabled = true;
    createReloadButton();
  }
  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWins(player2.name));
    generateLogs("end", player2, player1);
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWins(player1.name));
    generateLogs("end", player1, player2);
  } else if (player2.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWins());
    generateLogs("draw");
  }
};

export default showResult;
