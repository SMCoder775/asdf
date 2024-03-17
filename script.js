var player = document.getElementById('player');
var obstacle = document.getElementById('obstacle');
var gameOver = setInterval(function(){
	if (document.getElementById("songs").value !== "0") {
var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
 var obstacleLeft = 
parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
 if(obstacleLeft<40 && obstacleLeft > 0 && playerTop >= 250){
  obstacle.style.animation = 'none';
  obstacle.style.display = 'none';
  if (confirm('Game Over\nRetry?') == true) {
		window.location.reload();
	}
 }
	}
}, 10);