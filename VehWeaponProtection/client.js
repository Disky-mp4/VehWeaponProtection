setInterval(() => {
    const veh = GetVehiclePedIsIn(GetPlayerPed(-1)); // vehicle the player is in
    if(DoesVehicleHaveWeapons(veh)){ // check if the vehicle has weapons
        emitNet('disky.vehweapons');
    }
}, 500) // run this check every 500 miliseconds (2 times per second)
// I would encourage you lower this delay if you find that people are able to utilize the vehicle's weapons before it is deleted.

onNet('disky.vehweapons2', () => {
    const veh = GetVehiclePedIsIn(GetPlayerPed(-1));
    DeleteVehicle(veh);
    emit('chat:addMessage', {
        args: ['Server', 'Your vehicle was deleted due to it having weapons! (You do not have permission!)'],
        color: [255, 0, 0]
    })
    emitNet('server:logDeletion');
})