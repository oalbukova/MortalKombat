const $arenas = document.querySelector(".arenas");
const $rendomButton = document.querySelector("button");

const player1 = {
  player: 1,
  name: "PREDATOR",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Kunai"],
  attack: function (name) {
    console.log(name + " " + "Fight...");
  },
};

const player2 = {
  player: 2,
  name: "SCORPION",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  weapon: ["fire"],
  attack: function (name) {
    console.log(name + " " + "Fight...");
  },
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

function randomDamage() {
  const random = Math.ceil(Math.random() * 10);
  return random;
}

function buttonDisabled() {
  $rendomButton.disabled = true;
}

function changeHP(damage, player) {
  const $playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );

  player.hp -= damage;
  $playerLife.style.width = player.hp + "%";
  console.log(player.hp);
  if (player.hp <= damage) {
    player.hp = 0;
    buttonDisabled();
    if (player.name === "PREDATOR") {
      $arenas.appendChild(playerWins("SCORPION"));
    } else $arenas.appendChild(playerWins("PREDATOR"));
  }
}

function playerWins(name) {
  const $winTitle = createElement("div", "loseTitle");
  $winTitle.innerText = name + " wins";
  return $winTitle;
}

$rendomButton.addEventListener("click", function () {
  changeHP(randomDamage(), player1);
  changeHP(randomDamage(), player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
