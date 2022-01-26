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