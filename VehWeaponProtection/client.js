setInterval(() => {
    const veh = GetVehiclePedIsIn(GetPlayerPed(-1)); // vehicle the player is in
    if(DoesVehicleHaveWeapons(veh)){ // check if the vehicle has weapons
        DeleteVehicle(veh); // delete the vehicle
        emit('chat:addMessage', { // send message to client's chat
            args: ['Server', 'Your vehicle was deleted due to it having weapons!'],
            color: [255, 0, 0]
        })
        emitNet('server:logDeletion'); // trigger server logging event - player name & id
    }
}, 500) // run this check every 500 miliseconds (2 times per second)
// I would encourage you lower this delay if you find that people are able to utilize the vehicle's weapons before it is deleted.