import Bowerman from '../bowerman.js';
import Daemon from '../daemon.js';
import Magician from '../magician.js';
import Swordsman from '../swordsman.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';

const characterBowerman = new Bowerman('Ivan', 'Bowerman');
const characterDaemon = new Daemon('Devil', 'Daemon');
const characterMagician = new Magician('Petr', 'Magician');
const chracterSwordsman = new Swordsman('Vasily', 'Swordsman');
const characterUndead = new Undead('Misha', 'Undead');
const characterZombie = new Zombie('Stas', 'Zombie');

test.each([
  ['name', characterBowerman.name, 'Ivan'],
  ['type', characterBowerman.type, 'Bowerman'],
  ['health', characterBowerman.health, 100],
  ['level', characterBowerman.level, 1],
  ['attack', characterBowerman.attack, 25],
  ['defence', characterBowerman.defence, 25],
])('get Bowerman class property %s', (_, property, exp) => {
  expect(property).toBe(exp);
});

test.each([
  ['name', characterDaemon.name, 'Devil'],
  ['type', characterDaemon.type, 'Daemon'],
  ['health', characterDaemon.health, 100],
  ['level', characterDaemon.level, 1],
  ['attack', characterDaemon.attack, 10],
  ['defence', characterDaemon.defence, 40],
])('get Daemon class property %s', (_, property, exp) => {
  expect(property).toBe(exp);
});

test.each([
  ['name', characterMagician.name, 'Petr'],
  ['type', characterMagician.type, 'Magician'],
  ['health', characterMagician.health, 100],
  ['level', characterMagician.level, 1],
  ['attack', characterMagician.attack, 10],
  ['defence', characterMagician.defence, 40],
])('get Magician class property %s', (_, property, exp) => {
  expect(property).toBe(exp);
});

test.each([
  ['name', chracterSwordsman.name, 'Vasily'],
  ['type', chracterSwordsman.type, 'Swordsman'],
  ['health', chracterSwordsman.health, 100],
  ['level', chracterSwordsman.level, 1],
  ['attack', chracterSwordsman.attack, 40],
  ['defence', chracterSwordsman.defence, 10],
])('get Swordsman class property %s', (_, property, exp) => {
  expect(property).toBe(exp);
});

test.each([
  ['name', characterUndead.name, 'Misha'],
  ['type', characterUndead.type, 'Undead'],
  ['health', characterUndead.health, 100],
  ['level', characterUndead.level, 1],
  ['attack', characterUndead.attack, 25],
  ['defence', characterUndead.defence, 25],
])('get Undead class property %s', (_, property, exp) => {
  expect(property).toBe(exp);
});

test.each([
  ['name', characterZombie.name, 'Stas'],
  ['type', characterZombie.type, 'Zombie'],
  ['health', characterZombie.health, 100],
  ['level', characterZombie.level, 1],
  ['attack', characterZombie.attack, 40],
  ['defence', characterZombie.defence, 10],
])('get Zombie class property %s', (_, property, exp) => {
  expect(property).toBe(exp);
});

test('create character having invalid name', () => {
  expect(() => {
    const character = new Bowerman(1, 'Bowerman');
    character.name = 'Petr';
  }).toThrow();
});

test('create character having invalid type', () => {
  expect(() => {
    const character = new Bowerman('Ivan', 'Bobik');
    character.name = 'Petr';
  }).toThrow();
});

test('LevelUp method checking', () => {
  const character = new Bowerman('Ivan', 'Bowerman');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(30);
  expect(character.defence).toBe(30);
  expect(character.health).toBe(100);
});

test('Damage method checking', () => {
  const character = new Bowerman('Ivan', 'Bowerman');
  character.damage(50);
  expect(character.health).toBe(62.5);
});

test('LevelUp method checking with who was dead', () => {
  const character = new Bowerman('Ivan', 'Bowerman');
  character.health = 0;
  expect(() => character.levelUp()).toThrow();
});

test('Level is positive checking', () => {
  const character = new Bowerman('Ivan', 'Bowerman');
  character.health = 2;
  character.damage(50);
  expect(character.health).toBe(0);
});
