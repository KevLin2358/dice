const skill_data = {
"Strike" : 
    {
        "id" : 001,
        "name" : "Strike",
        "damageFormula" : (playerStats, weaponStats) => (playerStats.str * 1.5) + weaponStats.attackDamage,
        "type" : physical,

    },
"Defend" :
    {
        "id" : 002,
        "name" : "Defend",
        "damageFormula" : (playerStats, shieldStats = {"defense" : 0}) => (playerStats.armor * 0.5) + shieldStats.defense
    },
}
export default skill_data;