export default class Game {
  constructor(fieldLength) {
    this.fieldLength = fieldLength;
  }

  init() {
    const { body } = document;
    const field = document.createElement('div');
    field.classList.add('field');
    body.appendChild(field);

    for (let i = 0; i < this.fieldLength; i += 1) {
      const container = document.createElement('div');
      container.classList.add('hole');
      const img = document.createElement('img');
      img.src = '../src/img/tile.png';
      container.appendChild(img);
      field.appendChild(container);
    }
    const character = document.createElement('img');
    character.src = '../src/img/goblin.png';
    character.classList.add('character');
    const array = Array.from(field.getElementsByClassName('hole'));

    window.addEventListener('load', () => {
      const position = this.generatePosition();
      array[position].insertAdjacentElement('afterbegin', character);
    });

    this.move(array, character);
  }

  move(array, character) {
    // eslint-disable-next-line no-unused-vars
    const timer = setInterval(() => {
      let newPosition = this.generatePosition();
      if (array[newPosition].contains(character)) {
        if (newPosition === 15) {
          newPosition = 5;
        } else {
          newPosition += 1;
        }
      }
      character.remove();
      array[newPosition].insertAdjacentElement('afterbegin', character);
    }, 500);
  }

  generatePosition() {
    const min = 0;
    const max = Math.floor(this.fieldLength);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

const game = new Game(16);
game.init();
