export const $formFight = document.querySelector(".control");

export const getRandom = (num) => Math.ceil(Math.random() * num);

export const createElement = (tag, className) => {
  const $tag = document.createElement(tag);
  if (className) {
    if (Array.isArray(className)) {
      className.forEach((item) => {
        $tag.classList.add(item);
      });
    } else {
      $tag.classList.add(className);
    }
  }

  return $tag;
};

