const skill_data = {
Strike: 
    {
        id : 001,
        formula : (playerStats, weaponStats, dice) => playerStats.str + weaponStats.attackDamage + dice,
        type : physical,
        diceUsed: 1,
    },

Defend:
    {
        id : 002,
        formula : (playerStats, shieldStats = {"defense" : 0}, dice) => playerStats.armor + shieldStats.defense + dice,
        type: physical,
        diceUsed: 1,
    },
}
export default skill_data;