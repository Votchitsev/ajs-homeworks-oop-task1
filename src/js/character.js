class Character {
    constructor(name, type, health, level, attack, defence) {
        this.name = this.#checkName(name)
        // this.type = type,
        // this.health = health, 
        // this.level = level,
        // this.attack = attack,
        // this.defence = defence
    }

    #checkName(name) {
        
        if (typeof name === 'string' && name.length >= 2 && name.length <= 10 ) {
          return name;
        }

        throw new Error("Name not a string" );
    }
}

const character = new Character(963)



