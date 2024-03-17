var noteNames = [];
var checkStart = setInterval(() => {
        if (document.getElementById("songs").value == "1") {
            noteNames = ["E", "D", "C", "D", "E", "E", "E", "D", "D", "D", "E", "E", "E", "E", "D", "C", "D", "E", "E", "E", "E", "D", "D", "E", "D", "C", "Congratulations, you're done!"];
					clearInterval(checkStart);
        }
        else if (document.getElementById("songs").value == "2") {
            noteNames = ["B", "A", "G", "B", "A", "G", "G", "G", "G", "G", "A", "A", "A", "A", "B", "A", "G", "Congratulations, you're done!"];
					clearInterval(checkStart);
        }
        else if (document.getElementById("songs").value == "3") {
            noteNames = ["D", "F#", "G", "A", "D", "F#", "A", "G", "A", "F#", "D", "Congratulations, you're done!"];
					clearInterval(checkStart);
        }
        else {
            noteNames = ["pick a song"];
        }
}, 10);
const jump = () => {
    if (player.classList !== 'animate') {
        player.classList.add('animate');
    }
    setTimeout(function() {
        player.classList.remove('animate');
    }, 1500);
};
document.addEventListener('click', jump);
var refresh = setInterval(() => {
        document.getElementById("notename").innerText = noteNames[0];
				document.getElementById("urmom2").innerText = "play: " + noteNames[0];
        if (document.getElementById("note-name").innerText == noteNames[0]) {
          times2.innerHTML = "good";
          if (player.classList !== 'animate') {
              player.classList.add('animate');
          }
          noteNames.shift();
          setTimeout(function() {
              player.classList.remove('animate');
          }, 1500);
        }
        else {
            times2.innerHTML = "bad";
        }
        if (noteNames[0] == "Congratulations, you're done!") {
            window.alert("You won!\nTry again?");
        }
}, 1);