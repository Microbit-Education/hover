def on_button_pressed_a():
    basic.show_icon(IconNames.HEART)
    basic.pause(2000)
    Drones.Basic_action(Drones.Basicoptions.TAKEOFF)
    Drones.hovering(10)
    Drones.Basic_action(Drones.Basicoptions.LANDING)
input.on_button_pressed(Button.A, on_button_pressed_a)

Drones.init_module(Drones.Runmodes.MASTER)