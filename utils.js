export const $arenas = document.querySelector(".arenas");
export const $formFight = document.querySelector(".control");

export const getRandom = (num) => Math.ceil(Math.random() * num);

export const createElement = (tag, className) => {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
};
