$(document).ready(function(){
	var playbtn = $('#playBtn');
	var pausebtn = $('#pauseBtn');
	var stopbtn = $('#stopBtn');
	playbtn.click(function(play) {
		player.play();
	});
	pausebtn.click(function(pause) {
		player.pause();
	});
	stopbtn.click(function(stop) {
		player.stop();
	});
});

function Jukebox(){
		var self = this;
		SC.initialize({
			client_id: 'KkjgcX0clCHr567S0vyZGVX5RDCmZgcD'
		});
		
		SC.get('/tracks', {
	 		 q: 'buskers', license: 'cc-by-sa'
		}).then(function(tracks) {
	  		console.log(tracks);
	  		SC.stream(`/tracks/${tracks[0].id}`).then(function(player){
				//when the song is done playing print some stuff
				player.play();
				player.on('finish', function(){

					console.log('nice song!')
				});
			});
		});	
		this.play = function(){
			this.player.play();
		};
		this.pause = function(){
			this.player.pause();
		};
		this.stop = function(){
			this.player.pause();
			this.player.currentTime = 0;
		};
	}


var soundcloud = new Jukebox();

