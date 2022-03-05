// @ts-ignore
const keys = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

const timestamps: number[] = [];

timestamps.unshift(getTimestamp());

function getRandomNumber(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomKey() {
  return keys[getRandomNumber(0, keys.length - 1)]
}

export default function targetRandomKey() {
  const key = document.getElementById(getRandomKey());
  // @ts-ignore
  key.classList.add('selected');
}

function getTimestamp() {
  return Math.floor(Date.now() / 1000)
}

document.addEventListener('keyup', event => {
  const keyPressed = String.fromCharCode(event.keyCode);
  const keyElement = document.getElementById(keyPressed);
  const highlightedKey = document.querySelector('.selected');

  // @ts-ignore
  keyElement.classList.add('hit')
  // @ts-ignore
  keyElement.addEventListener('animationend', () => {
    // @ts-ignore
    keyElement.classList.remove('hit')
  })

  // @ts-ignore
  if (keyPressed === highlightedKey.innerHTML) {
    timestamps.unshift(getTimestamp());
    // @ts-ignore
    highlightedKey.classList.remove('selected');
    targetRandomKey();
  }
})
