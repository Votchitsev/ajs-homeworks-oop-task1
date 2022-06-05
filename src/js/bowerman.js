import Character from './character.js';

export default class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    super.attack = 25;
    super.defence = 25;
  }
}
