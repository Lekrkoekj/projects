document.getElementById("lkd-changelog").onload = LKDChangelog();
document.getElementById("lks-changelog").onload = LKSChangelog();
document.getElementById("lkc-changelog").onload = LKCChangelog();
function LKDChangelog() {
    document.getElementById("lkd-changelog").innerHTML = '<h1 style="text-align: center;">New in Version 2.6:</h1><p>Added English Translation.</p><p>Added Language setting.</p><p>Added Crappy Mario bonus level.</p><p>Bugfixes.</p><h1 style="text-align: center;">v2.6.1:</h1><p>Added partial Controller support: Move with the left joystick, Jump with A, Slow down with B, Pause with the start button.</p><p>Splash screen is now dark and shorter.</p><p>Bugfixes.</p>'
}
function LKCChangelog() {
    document.getElementById("lkd-changelog").innerHTML = '<p>Note: This game is currently only available in Dutch! Support for English will be added soon.</p><h1 style="text-align: center;">New in Version 1.2:</h1><p>Brand new UI added!</p><p>Added Quests!</p><p>Added KoekjCoins!</p><p>Powerups added! There are currently 2 powerups, more will be added later.</p><p>Bugfixes.</p><h1 style="text-align: center;">v1.2.1:</h1><p>More bugfixes.</p>'
}
function LKSChangelog() {
    document.getElementById("lks-changelog").innerHTML = '<h1 style="text-align: center;">New in Version 0.3:</h1><p>Sound settings added.</p><p>Added a Credits button to the homepage.</p><p>Bugfixes</p>'
}