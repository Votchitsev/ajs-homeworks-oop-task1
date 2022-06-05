import Character from './character.js';

export default class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    super.attack = 25;
    super.defence = 25;
  }
}
