input.onButtonPressed(Button.A, function () {
    CutebotPro.fullSpeedAhead()
    CutebotPro.trolleySteering(CutebotProTurn.Left, 90)
    CutebotPro.extendMotorStop()
})
