import { $formFight, getRandom } from "./utils.js";

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};
const ATTACK = ["head", "body", "foot"];
const enemyAttack = () => {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
};

const playerAttack = () => {
  const attack = {};
  for (let item of $formFight) {
    if (item.checked && item.name === "hit") {
      attack.value = getRandom(HIT[item.value]);
      attack.hit = item.value;
    }
    if (item.checked && item.name === "defence") {
      attack.defence = item.value;
    }
    item.checked = false;
  }
  return attack;
};

const battle = (player1, player2, generateLogs) => {
  const {
    hit: hitEnemy,
    defence: defenceEnemy,
    value: valueEnemy,
  } = enemyAttack();
  const { hit, defence, value } = playerAttack();

  if (defence !== hitEnemy) {
    player1.changeHP(valueEnemy);
    player1.renderHP();
    generateLogs("hit", player2, player1, valueEnemy);
  }
  if (defence === hitEnemy) {
    generateLogs("defence", player2, player1);
  }

  if (defenceEnemy !== hit) {
    player2.changeHP(value);
    player2.renderHP();
    generateLogs("hit", player1, player2, value);
  }
  if (defenceEnemy === hit) {
    generateLogs("defence", player1, player2);
  }
};

export default battle;
