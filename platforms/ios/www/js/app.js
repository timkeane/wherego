if (window.angular){ /* ionic */
	
	angular.module('app', ['ionic', 'ngCordova'])
		.controller("SoundController", function($scope, $ionicPlatform, $cordovaMedia) {
			$ionicPlatform.ready(function() {
				for (var type in SOUNDS){
					var soundType = SOUNDS[type], sources = soundType.sources;
					for (var i = 0; i < sources.length; i++){
						soundType.medias.push($cordovaMedia.newMedia(sources[i]));
					}
				};
				scale({});
		        navigator.splashscreen.hide();
				setTimeout(function(){
					setUpFielders();
					$(document).click(setUpFielders);
				}, 2000);
			});
		});

}else{ /* web */
	
	$(document).ready(function(){
		for (var type in SOUNDS){
			var soundType = SOUNDS[type], sources = soundType.sources;
			for (var i = 0; i < sources.length; i++){
				var audio = $('<audio type="audio/mp3"></audio>');
				audio.addClass(type);
				audio.attr('src', sources[i]);
				$('body').append(audio);
				soundType.medias.push(audio.get(0));
			}
		}
		scale({});
		$('#splash').fadeOut();
		setTimeout(function(){
			setUpFielders();
			$(document).click(setUpFielders);
		}, 2000);
		
	});

}

function playAudio(type){
	try{
		var soundType = SOUNDS[type];
		if (soundType.medias.length){
			soundType.medias[soundType.next].play();
			soundType.next = soundType.next + 1;
			if (soundType.next == soundType.sources.length){
				soundType.next = 0;
			}
		}		
	}catch(ignore){}
};

function audioVolume(volume){
	for (var type in SOUNDS){
		var soundType = SOUNDS[type], sources = soundType.sources;
		for (var i = 0; i < sources.length; i++){
			var audio = soundType.medias[i];
			if (audio.setVolume){
				soundType.medias[i].setVolume(volume);
			}else{
				soundType.medias[i].muted = !volume;
			}
		}
	};
};

