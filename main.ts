input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    Drones.Basic_action(Drones.Basicoptions.Takeoff)
    Drones.Hovering(10)
    Drones.Basic_action(Drones.Basicoptions.Landing)
})
Drones.initModule(Drones.Runmodes.Master)
