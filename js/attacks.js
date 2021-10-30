import { $formFight } from "./utils.js";
import Result from "./result.js";

const result = new Result();

const playerAttack = () => {
  const attack = {};
  for (let item of $formFight) {
    if (item.checked && item.name === "hit") {
      attack.hit = item.value;
    }
    if (item.checked && item.name === "defence") {
      attack.defence = item.value;
    }
    item.checked = false;
  }
  return attack;
};

const postAttack = async (hit, defence) => {
  const body = fetch(
    "http://reactmarathon-api.herokuapp.com/api/mk/player/fight",
    {
      method: "POST",
      body: JSON.stringify({
        hit,
        defence,
      }),
    }
  );
  return body;
};

const battle = async (player1, player2, generateLogs) => {
  const { hit, defence } = playerAttack();

  const fight = await postAttack(hit, defence).then((res) => res.json());

  const { value } = fight.player1;
  const {
    value: valueEnemy,
    hit: hitEnemy,
    defence: defenceEnemy,
  } = fight.player2;

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

  result.showResult(player1, player2, generateLogs);
};

export default battle;
