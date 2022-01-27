const Potion = require('../lib/Potion');
const Player = require('../lib/Player');


jest.mock('../lib/Potion.js');

test('create a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
        );
});

test("gets player's stats as an object", () => {
    const player = new Player('Dave');
    
    expect(player.getStats()).toHaveProperty('potion');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from the player or return false', () => {
    const player = new Player('Dave');

expect(player.getInventory()).toEqual(expect.any(Array));

player.inventory =[];
expect(player.getInventory()).toEqual(false);
});

test("get player's health value", () => {
    const player = new Player('Dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test(`check to see if player is alive or not`, () => {
    const player = new Player('Dave');

    expect(player.isAlive()).toBeTruthy();
    player.health = 0;
    
    expect(player.isAlive()).toBeFalsy();
});

test("subtrack from player's health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reduceHealth(5);
    expect(player.health).toBe(oldHealth -5);
    
    player.reduceHealth(99999);
    expect(player.health).toBe(0);
});