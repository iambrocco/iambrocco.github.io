var dc = document.getElementById("discordstuff");
var mc = document.getElementById("minecraftstuff");
var gen = document.getElementById("otherstuff");
var brocco = document.getElementById("brocco");

mc.onclick = () => {
    window.location.href = "minecraft/"
}
dc.onclick = () => {
    window.location.href = "discord/"
}
gen.onclick = () => {
    window.location.href = "others/"
}
brocco.onclick = () => {
    window.location.href = "about/"
}