import Character from './character.js';

export default class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    super.attack = 20;
    super.defence = 20;
  }
}
