onNet('server:logDeletion', () => {
    const playerName = GetPlayerName(source);
    console.log(`Weaponized vehicle has been deleted. Player info - Name: ${playerName} | Id: ${src}`); // logs to the server's console
});

onNet('disky.vehweapons', () => {
    if(!IsPlayerAceAllowed(source, 'disky.weaponizedvehicless')){
        emitNet('disky.vehweapons2', source);
    }
})