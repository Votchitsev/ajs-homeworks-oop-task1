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
    this.attack = null;
    this.defence = null;
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

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
      return;
    }
    throw new Error("Can't level up who was dead");
  }
}
