import Character from './character.js';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    super.attack = 10;
    super.defence = 40;
  }
}
