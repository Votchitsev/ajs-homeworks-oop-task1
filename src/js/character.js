export default class Character {
  #characterTypes = [
    'Bowerman',
    'Swordsman',
    'Magician',
    'Undead',
    'Zombie',
    'Daemon',
  ];

  constructor(name, type) {
    this.name = this.#checkName(name);
    this.type = this.#checkType(type);
    this.health = 100;
    this.level = 1;
  }

  #checkName(name) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      return name;
    }

    throw new Error("Name not a string or length  doesn't match");
  }

  #checkType(type) {
    if (typeof type === 'string' && this.#characterTypes.includes(type)) {
      return type;
    }

    throw new Error("Type not a string or character doesn't exist");
  }
}
