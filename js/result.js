import { createElement } from "./utils.js";

const $arenas = document.querySelector(".arenas");

class Result {
  createReloadButton = () => {
    const $reloadButtonDiv = createElement("div", "reloadWrap");
    const $reloadButton = createElement("button", "button");
    $reloadButton.innerText = "Reload";

    $reloadButton.addEventListener("click", function () {
      window.location.pathname = "index.html";
    });

    $reloadButtonDiv.appendChild($reloadButton);
    $arenas.appendChild($reloadButtonDiv);
  };

  playerWins = (name) => {
    const $winTitle = createElement("div", "loseTitle");
    if (name) {
      $winTitle.innerText = `${name} wins`;
    } else {
      $winTitle.innerText = "draw";
    }
    return $winTitle;
  };

  showResult = (player1, player2, generateLogs) => {
    const $rendomButton = document.querySelector("button");
    if (player1.hp === 0 || player2.hp === 0) {
      $rendomButton.disabled = true;
      this.createReloadButton();
    }
    if (player1.hp === 0 && player1.hp < player2.hp) {
      $arenas.appendChild(this.playerWins(player2.name));
      generateLogs("end", player2, player1);
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
      $arenas.appendChild(this.playerWins(player1.name));
      generateLogs("end", player1, player2);
    } else if (player2.hp === 0 && player2.hp === 0) {
      $arenas.appendChild(this.playerWins());
      generateLogs("draw");
    }
  };
}

export default Result;
