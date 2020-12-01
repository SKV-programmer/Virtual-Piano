let whiteKeys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"]
let blackKeys = ["KeyW", "KeyE", "KeyT", "KeyY", "KeyU"]


document.addEventListener("keydown", function (e) {
    if (whiteKeys.includes(e.code)) {
        let pianokey = new Audio("assets/" + e.code.replace("Key", "") + ".mp3");
        pianokey.play();
        console.log("The '" + e.code.replace("Key", "") + "' key is pressed");
    } else if (blackKeys.includes(e.code)) {
        let pianokey = new Audio("assets/" + e.code.replace("Key", "") + ".mp3");
        pianokey.play();
        console.log("The '" + e.code.replace("key", "") + "' key is pressed");
    } else console.log("The '" + e.code.replace("Key", "") + "' key is not on the piano");

});
