// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var controller = angular.module('app', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {});
})

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

function audioVolume(mute){
	console.info(type);
	for (var type in SOUNDS){
		var soundType = SOUNDS[type], sources = soundType.sources;
		for (var i = 0; i < sources.length; i++){
			soundType.medias[i].setVolume(mute);
		}
	};
};

function playAudio(type){
	var soundType = SOUNDS[type];
	if (soundType.medias.length){
		soundType.medias[soundType.next].play();
		soundType.next = soundType.next + 1;
		if (soundType.next == soundType.sources.length){
			soundType.next = 0;
		}
	}
};
