const $arenas = document.querySelector(".arenas");
const $rendomButton = document.querySelector("button");

const player1 = {
  player: 1,
  name: "SONYA",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  changeHP: changeHP,
  elHP: elHP,
  renderHP: renderHP,
};

const player2 = {
  player: 2,
  name: "KITANA",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  changeHP: changeHP,
  elHP: elHP,
  renderHP: renderHP,
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(playerObj) {
  const $player = createElement("div", "player" + playerObj.player);
  const $progressbar = createElement("div", "progressbar");
  const $character = createElement("div", "character");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $img = createElement("img");

  $life.style.width = playerObj.hp + "%";
  $name.innerText = playerObj.name;
  $img.src = playerObj.img;

  $progressbar.appendChild($name);
  $progressbar.appendChild($life);

  $character.appendChild($img);

  $player.appendChild($progressbar);
  $player.appendChild($character);

  return $player;
}

function createReloadButton() {
  const $reloadWrap = createElement("div", "reloadWrap");
  $arenas.appendChild($reloadWrap);
  const $button = createElement("button", "button");
  $button.innerText = "Restart";
  $reloadWrap.appendChild($button);
  return $button.addEventListener("click", function () {
    window.location.reload();
  });
}

function changeHP(num) {
  this.hp -= num;
  if (this.hp <= 0) {
    this.hp = 0;
  }
}

function elHP() {
  return this.hp;
}

function renderHP() {
  const $playerLife = document.querySelector(
    ".player" + this.player + " .life"
  );
  $playerLife.style.width = this.elHP() + "%";
}

function getRandom(num) {
  return Math.ceil(Math.random() * num);
}

function playerWins(name) {
  const $winTitle = createElement("div", "loseTitle");
  if (name) {
    $winTitle.innerText = name + " wins";
  } else {
    $winTitle.innerText = "draw";
  }

  return $winTitle;
}

$rendomButton.addEventListener("click", function () {
  player1.changeHP(getRandom(20));
  player2.changeHP(getRandom(20));
  player1.renderHP();
  player2.renderHP();
  if (player1.hp === 0 || player2.hp === 0) {
    $rendomButton.disabled = true;
    createReloadButton();
  }
  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWins(player2.name));
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWins(player1.name));
  } else if (player2.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWins());
  }
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
