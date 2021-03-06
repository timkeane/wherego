function position(obj){
	return obj.position || {};
};

function hitTo(hitId){
	if (!playInProgress){
		var play = PROPER_FIELDER_POSITON[$('#runners-on').val()][hitId];
		fieldersSet = false;
		playInProgress = true;
		$('#click-capture').show();
		$('select').selectmenu('disable');
		$.each(play.fielding, function(_, fielder){
			$('#fielder' + fielder).addClass('fielding');
		});
		/* pitch */
		$('#ball').animate(scale(BASE.H), ANIMATION_DURATION, function(){
			playAudio('hit');
			$(function(){
				/* hit */
				$('#ball').animate(scale(HIT_LOCATION[hitId]), ANIMATION_DURATION);
				/* run */
				$('#runner0').animate(scale(BASE[1]), ANIMATION_DURATION * 3);
				$('#runner1').animate(runTo(1, play, BASE[2]), ANIMATION_DURATION * 3);
				$('#runner2').animate(runTo(2, play, BASE[3]), ANIMATION_DURATION * 3);
				$('#runner3').animate(runTo(3, play, BASE.H), ANIMATION_DURATION * 3);
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
	var fielder = FIELDER[$('#my-position').val()].name, action = isMobile() ? 'Tap' : 'Click';
	$('#message').html(action + ' where the ' + fielder + ' should go...').fadeIn();
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
				$('#message').fadeOut();
				$('#my-click').css({left: event.offsetX, top: event.offsetY});
				$('#my-click').fadeIn();
				hitTo(hitId);
			}
		);
	}else{
		hitTo(hitId);
	}
};

function closeEnough(myPosition){
	var actual = $('#my-click').position(),
		expected = $('#fielder' + myPosition).position(),
		left = Math.abs(actual.left - expected.left),
		top = Math.abs(actual.top - expected.top),
		width = $('#my-click').width() / 2;
	return left < width && top < width;
};

function showPositionMessage(myPosition){
	var play = PROPER_FIELDER_POSITON[$('#runners-on').val()][$('#hit').val()];
	$('#message').html(play[myPosition].message || '').fadeIn();
};

function checkMyPosition(out){
	var myPosition = $('#my-position').val();
	if (myPosition > 0){
		var rightWrong = $('#right-wrong').html().split(':'),
			right = rightWrong[0] * 1,
			wrong = rightWrong[1] * 1;
		$('#right-wrong').show();
		showPositionMessage(myPosition);
		if (closeEnough(myPosition)){
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
			var base = runners[i], position = scale(BASE[base]);
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
				var dugout = scale({x: $(window).width() * 3, y: -$(window).height() * 3});
				$(function(){
					fieldersSet = false;
					peeMsg.animate(dugout, ANIMATION_DURATION);
					fielder.animate(dugout, ANIMATION_DURATION, 
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
	$('#message').fadeOut();
	if (!appLoaded){
		playAudio('play');
	}
	if (!fieldersSet && !playInProgress){
		
		var duration = fast === true ? 100 : ANIMATION_DURATION;
		
		$('#hit-button').one('click', setUpFielders);
		playAudio('good');
		$('#my-click').fadeOut();
		$('#hit').val('0').selectmenu('refresh');
		$('#ball').show().animate(scale({x: 0, y: -35}), 1000);
		$('.fielding').removeClass('fielding');
		$('#click-capture').show();
		$('select').selectmenu('disable');
		runners();

		$(function(){
			$('#runner0').css({left: '-500px', top: '500px'});
			$('#runner0').animate(scale({x: BASE.H.x + 38, y: BASE.H.y}), duration);
			$('#fielder1').animate(scale(FIELDER[1].position), duration);
			$('#fielder2').animate(scale(FIELDER[2].position), duration);
			$('#fielder3').animate(scale(FIELDER[3].position), duration);
			$('#fielder4').animate(scale(FIELDER[4].position), duration);
			$('#fielder5').animate(scale(FIELDER[5].position), duration);
			$('#fielder6').animate(scale(FIELDER[6].position), duration);
			$('#fielder7').animate(scale(FIELDER[7].position), duration);
			$('#fielder8').animate(scale(FIELDER[8].position), duration);
			$('#fielder9').animate(scale(FIELDER[9].position), duration, iGottaPee);
			appLoaded = true;
		});
		
	}
};
function transform(position){
	return {
		left: position.x + 500,
		top: Math.abs(position.y - 500)
	}
};

function scale(position){
	var x = $(window).width() / 1001,
		y = $(window).height() / 872,
		fieldScale = x > y ? x : y,
		fielderScale = x < y ? x : y;
	if (position && (!isNaN(position.x) || !isNaN(position.y))){
		var scaled = {};
		position = transform(position);
		if (position.left){
			scaled.left = position.left * fielderScale;
		}
		if (position.top){
			scaled.top = position.top * fielderScale;
		}
		return scaled;
	}else{
		$('#field').css({
			'width': 1000 * fielderScale + 'px',
			'height': 1000 * fielderScale + 'px'
		});
		fieldersSet = false;
		if (appLoaded){
			setUpFielders(true);
		}
	}	
	return position;
};


function isMobile(){
	return navigator.userAgent.match(/(iPad|iPhone|iPod|iOS|Android)/g) != null;	
};

var appLoaded = false;
var fieldersSet = false;
var playInProgress = false;
var peeTime = new Date().getTime() + (60000 * 5);

$(window).resize(scale);
