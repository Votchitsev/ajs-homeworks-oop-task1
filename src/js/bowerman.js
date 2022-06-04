import Character from './character.js';

export default class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 20;
    this.defence = 20;
  }
}
