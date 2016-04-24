function hitTo(hitId){
	if (!playInProgress){
		var play = FIELDER_LOCATION_BY_RUNNERS_BY_HIT[$('#runners-on').val()][hitId];
		fieldersSet = false;
		playInProgress = true;
		$('#click-capture').show();
		$('select').selectmenu('disable');
		for (var fielder in play){
			if (play[fielder].fielding){
				$('#fielder' + fielder).addClass('fielding');
			}
		}
		/* pitch */
		$('#ball').animate(scale(BASES.H), ANIMATION_DURATION, function(){
			playAudio('hit');
			$(function(){
				/* hit */
				$('#ball').animate(scale(HIT_LOCATIONS[hitId]), ANIMATION_DURATION);
				/* run */
				$('#runner0').animate(scale(BASES[1]), ANIMATION_DURATION * 3);
				$('#runner1').animate(runTo(1, play, BASES[2]), ANIMATION_DURATION * 3);
				$('#runner2').animate(runTo(2, play, BASES[3]), ANIMATION_DURATION * 3);
				$('#runner3').animate(runTo(3, play, BASES.H), ANIMATION_DURATION * 3);
				/* field */
				$('#fielder1').animate(scale(play[1].position), ANIMATION_DURATION);
				$('#fielder2').animate(scale(play[2].position), ANIMATION_DURATION);
				$('#fielder3').animate(scale(play[3].position), ANIMATION_DURATION);
				$('#fielder4').animate(scale(play[4].position), ANIMATION_DURATION);
				$('#fielder5').animate(scale(play[5].position), ANIMATION_DURATION);
				$('#fielder6').animate(scale(play[6].position), ANIMATION_DURATION);
				$('#fielder7').animate(scale(play[7].position), ANIMATION_DURATION);
				$('#fielder8').animate(scale(play[8].position), ANIMATION_DURATION);
				$('#fielder9').animate(scale(play[9].position), ANIMATION_DURATION, 
					/* throw */
					function(){makeThrows(play);}
				);
			});
		});
	}else{
		setTimeout(function(){
			hitTo(hitId);
		}, 100);
	}
};

function runTo(runner, play, base){
	var advance = play.advance;
	if (advance && advance.indexOf(runner) > -1){
		return scale(base);
	}
	return {};
};

function makeThrows(play){
	var factor = $('#runners-on').val() ? 1.5 : 1;
	$.each(play.throwsToMake, function(i, fielder){
		$('#ball').animate(scale(play[fielder].position), ANIMATION_DURATION / factor, function(){
			if (play.throwsToMake.length - 1 == i){
				checkMyPosition(play.out);
				playInProgress = false;
			}
		});	
	});
};

function clickMsg(){
	var fielder = FIELDERS[$('#my-position').val()].name, action = isMobile() ? 'Tap' : 'Click';
	$('#click-msg').html(action + ' where the ' + fielder + ' should go...').fadeIn();
};

function whereToGo(){
	var hitId = $('#hit').val();
	if ($('#my-position').val() > 0 && hitId != '0'){
		$('#my-click').removeClass('right').removeClass('wrong');
		clickMsg();
		$('#click-capture').show();
		$('select').selectmenu('disable');
		$('#click-capture').one(
			'click',
			function(event){
				$('#click-msg').fadeOut();
				$('#my-click').css({left: event.pageX, top: event.pageY});
				$('#my-click').fadeIn();
				hitTo(hitId);
			}
		);
	}else{
		hitTo(hitId);
	}
};

function closeEnough(left, top){
	if ($(window).width() > 600){
		return left < 60 && top < 60;
	}
	return left < 20 && top < 20;
};

function checkMyPosition(out){
	var myPosition = $('#my-position').val();
	if (myPosition > 0){
		var actual = $('#my-click').position(),
			expected = $('#fielder' + myPosition).position(),
			left = Math.abs(actual.left - expected.left),
			top = Math.abs(actual.top - expected.top),
			rightWrong = $('#right-wrong').html().split(':'),
			right = rightWrong[0] * 1,
			wrong = rightWrong[1] * 1;
		$('#right-wrong').show();
		if (closeEnough(left, top)){
			$('#my-click').addClass('right');
			if (out){
				playAudio('out');
			}
			playAudio('good');
			$('#right-wrong').html((right + 1) + ' : ' + (wrong + 1));
		}else{
			$('#my-click').addClass('wrong');
			playAudio('safe');
			playAudio('bad');
			$('#right-wrong').html(right + ' : ' + (wrong + 1));
		}
	}else{
		playAudio(out ? 'out' : 'safe');
		playAudio('good');
	}
};

function toggleAudio(){
	var btn = $('#audio-button'), currentlyMuted = !btn.hasClass('mute-audio');
	btn[currentlyMuted ? 'addClass' : 'removeClass']('mute-audio');
	audioVolume(currentlyMuted ? 1 : 0);
};

function runners(){
	var runners = $('#runners-on').val();
	$('.runner').hide();
	if (runners > 0){
		for (var i = 0; i < runners.length; i++){
			var base = runners[i], position = scale(BASES[base]);
			$('#runner' + base).css({
				display: 'block',
				left: position.left + 'px',
				top: position.top + 'px'
			});
		}
	}
};

function timeToPee(){
	var now = new Date().getTime();
	if (now > peeTime){
		peeTime = now + (60000 * 5);
		return true;
	}
};

function iGottaPee(){
	if (timeToPee()){
		var peeMsg = $('#pee-msg'), 
			fielder = $('#fielder' + (Math.floor(Math.random() * 9) + 1)), 
			position = fielder.position();
		peeMsg.css({left: position.left + 'px', top: position.top + 'px'});
		peeMsg.fadeIn(function(){
			playAudio('pee');
			setTimeout(function(){
				playAudio('bad');
				var dugout = scale({left: $(window).width() + 500, top: 1000});
				$(function(){
					peeMsg.animate(dugout, ANIMATION_DURATION * 0.67);
					fielder.animate(dugout, ANIMATION_DURATION * 0.67, 
						function(){
							setTimeout(setUpFielders, 3000);
						}
					);
				});
			}, 1500);
		});
	}else{
		fieldersSet = true;
		$('#click-capture').hide();
		$('select').selectmenu('enable');
	}
};

function setUpFielders(fast){
	if (!fieldersSet && !playInProgress){
		
		var duration = fast === true ? 100 : ANIMATION_DURATION;
		
		$('#hit-button').one('click', setUpFielders);
		playAudio('good');
		$('#my-click').fadeOut();
		$('#hit').val('0').selectmenu('refresh');
		$('#ball').animate(scale({left: 500, top: 530}), 100).show();
		$('.fielding').removeClass('fielding');
		$('#click-capture').show();
		$('select').selectmenu('disable');
		runners();

		$(function(){
			$('#runner0').css({left: '-500px', top: '500px'});
			$('#runner0').animate(scale({left: BASES.H.left + 38, top: BASES.H.top}), duration);
			$('#fielder1').animate(scale(FIELDERS[1].position), duration);
			$('#fielder2').animate(scale(FIELDERS[2].position), duration);
			$('#fielder3').animate(scale(FIELDERS[3].position), duration);
			$('#fielder4').animate(scale(FIELDERS[4].position), duration);
			$('#fielder5').animate(scale(FIELDERS[5].position), duration);
			$('#fielder6').animate(scale(FIELDERS[6].position), duration);
			$('#fielder7').animate(scale(FIELDERS[7].position), duration);
			$('#fielder8').animate(scale(FIELDERS[8].position), duration);
			$('#fielder9').animate(scale(FIELDERS[9].position), duration, iGottaPee);
		});
		
	}
};

function scale(position){
	var x = $(window).width() / 1001,
		y = $(window).height() / 872,
		fieldScale = x > y ? x : y,
		fielderScale = x < y ? x : y;
	if (position && (position.left || position.top)){
		var scaled = {};
		if (!position.offsetTop){
			position.top = position.top ? (offsetTop + position.top) : offsetTop;
			position.offsetTop = offsetTop;
		}
		if (position.left){
			scaled.left = position.left * fielderScale;
		}
		if (position.top){
			scaled.top = position.top * fielderScale;
		}
		return scaled;
	}else{
		$('#field').css({
			'background-size': 1000 * fielderScale + 'px',
			top: offsetTop + 'px'
		});
		fieldersSet = false;
		if (appLoaded) setUpFielders(true);
	}	
	return position;
};


function isMobile(){
	return navigator.userAgent.match(/(iPad|iPhone|iPod|iOS|Android)/g) != null;	
};

var offsetTop = 20;
var appLoaded = false;
var fieldersSet = false;
var playInProgress = false;
var peeTime = new Date().getTime() + (60000 * 5);

$(window).resize(scale);
