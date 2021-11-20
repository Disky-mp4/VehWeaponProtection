onNet('server:logDeletion', () => {
    const playerName = GetPlayerName(source);
    console.log(`Weaponized vehicle has been deleted. Player info - Name: ${playerName} | Id: ${source}`); // logs to the server's console
});

onNet('disky.vehweapons', () => {
    if(!IsPlayerAceAllowed(source, 'disky.weaponizedvehicles')){
        emitNet('disky.vehweapons2', source);
    }
})