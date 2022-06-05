import Character from './character.js';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    super.attack = 40;
    super.defence = 10;
  }
}
