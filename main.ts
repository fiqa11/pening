edubitIrBit.onIrSensorEvent(IrEventType.Rise, function () {
    music.setVolume(255)
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Forward, 80)
    basic.pause(randint(200, 1000))
    edubitMotors.brakeMotor(MotorChannel.M1)
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    music.stopAllSounds()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Forever)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    music.stopAllSounds()
})
basic.showString("Hello!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        edubitMotors.setServoPosition(ServoChannel.S1, 30)
    } else if (input.buttonIsPressed(Button.B)) {
        edubitMotors.setServoPosition(ServoChannel.S1, 150)
    } else {
        edubitMotors.setServoPosition(ServoChannel.S1, pins.map(
        edubitPotentioBit.readPotValue(),
        0,
        1023,
        30,
        150
        ))
    }
})
