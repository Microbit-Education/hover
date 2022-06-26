input.onButtonPressed(Button.A, function () {
    basic.show_icon(IconNames.HEART)
    basic.pause(2000)
    Drones.Basic_action(Drones.Basicoptions.Takeoff)
    Drones.Hovering(10)
    Drones.Basic_action(Drones.Basicoptions.Landing)
})
Drones.initModule(Drones.Runmodes.Master)
