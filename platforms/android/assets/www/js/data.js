var BASES = {
	1: {left: 675, top: 500},
	2: {left: 500, top: 325},
	3: {left: 325, top: 500},
	H: {left: 500, top: 665}
};

var FIELDERS = {
	1: {position: {left: 500, top: 500}, name: 'Pitcher'}, 
	2: {position: {left: 500, top: 710}, name: 'Catcher'}, 
	3: {position: {left: 680, top: 420}, name: 'First Baseman'}, 
	4: {position: {left: 590, top: 330}, name: 'Second Baseman'}, 
	5: {position: {left: 320, top: 420}, name: 'Third Baseman'},
	6: {position: {left: 410, top: 330}, name: 'Shortstop'},
	7: {position: {left: 780, top: 250}, name: 'Right Fielder'},
	8: {position: {left: 500, top: 100}, name: 'Center Fielder'},
	9: {position: {left: 220, top: 250}, name: 'Left Fielder'}
};

var HIT_LOCATIONS = {
	1: FIELDERS[1].position,
	2: {left: 500, top: 600},
	3: FIELDERS[3].position,
	4: FIELDERS[4].position,
	5: FIELDERS[5].position,
	6: FIELDERS[6].position,
	7: FIELDERS[7].position,
	RC: {left: 650, top: 150},
	8: FIELDERS[8].position,
	LC: {left: 350, top: 150},
	9: FIELDERS[9].position
};

var FIELDER_LOCATION_BY_RUNNERS_BY_HIT = {
	0: {
		1: {
			throwsToMake: [3],
			out: true,
			1: {fielding: true},
			2: {position: {left: 685, top: 575}},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 560, top: 420}},
			5: {position: {left: 440, top: 420}},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 120}},
			9: {}
		},
		2: {
			throwsToMake: [3],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATIONS[2], fielding: true},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: {left: 400, top: 485}},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {},
			9: {}
		},
		3: {
			throwsToMake: [1],
			out: true,
			1: {position: BASES[1], fielding: true},
			2: {position: {left: 685, top: 575}},
			3: {fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {},
			9: {}
		},
		4: {
			throwsToMake: [3],
			out: true,
			1: {},
			2: {position: {left: 685, top: 575}},
			3: {position: BASES[1], fielding: true},
			4: {fielding: true},
			5: {},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 625, top: 170}},
			9: {position: {left: 300, top: 170}}		
		},
		5: {
			throwsToMake: [3],
			out: true,
			1: {},
			2: {position: {left: 685, top: 575}},
			3: {position: BASES[1], fielding: true},
			4: {position: BASES[2]},
			5: {fielding: true},
			6: {position: {left: 320, top: 300}},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 200, top: 300}}
		},
		6: {
			throwsToMake: [3],
			out: true,
			1: {},
			2: {position: {left: 685, top: 575}},
			3: {position: BASES[1], fielding: true},
			4: {position: BASES[2]},
			5: {position: {left: 340, top: 280}},
			6: {fielding: true},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 300, top: 170}}		
		},
		7: {
			throwsToMake: [4, 6],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: {left: 650, top: 280}, fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2], fielding: true},
			7: {fielding: true},
			8: {position: {left: 750, top: 170}},
			9: {position: {left: 300, top: 300}}
		},
		RC: {
			throwsToMake: [4, 6],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: {left: 580, top: 240}, fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2], fielding: true},
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATIONS.RC, fielding: true},
			9: {position: {left: 300, top: 300}}
		},
		8: {
			throwsToMake: [6, 4],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: BASES[2], fielding: true},
			5: {position: BASES[3]},
			6: {position: {left: 500, top: 220}, fielding: true},
			7: {position: {left: 620, top: 80}},
			8: {fielding: true},
			9: {position: {left: 380, top: 80}}
		},
		LC: {
			throwsToMake: [6, 4],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: BASES[2], fielding: true},
			5: {position: BASES[3]},
			6: {position: {left: 420, top: 240}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATIONS.LC, fielding: true},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			throwsToMake: [6, 4],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: BASES[2], fielding: true},
			5: {position: BASES[3]},
			6: {position: {left: 350, top: 280}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 250, top: 170}},
			9: {fielding: true}
		}
	},
	1: {
		1: {
			throwsToMake: [6, 3],
			advance: [1],
			out: true,
			1: {fielding: true},
			2: {position: {left: 685, top: 575}},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 560, top: 420}},
			5: {position: {left: 440, top: 420}},
			6: {position: BASES[2], fielding: true},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 350, top: 240}}
		},
		2: {
			throwsToMake: [6, 3],
			advance: [1],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATIONS[2], fielding: true},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: BASES[3]},
			6: {position: BASES[2], fielding: true},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 350, top: 240}}
		},
		3: {
			throwsToMake: [6, 1],
			advance: [1],
			out: true,
			1: {position: BASES[1], fielding: true},
			2: {position: {left: 685, top: 575}},
			3: {fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: BASES[3]},
			6: {position: BASES[2], fielding: true},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 350, top: 240}}
		},
		4: {
			throwsToMake: [6, 3],
			advance: [1],
			out: true,
			1: {},
			2: {position: {left: 685, top: 575}},
			3: {position: BASES[1], fielding: true},
			4: {fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2], fielding: true},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 625, top: 170}},
			9: {position: {left: 350, top: 240}}
		},
		5: {
			throwsToMake: [4, 3],
			advance: [1],
			out: true,
			1: {},
			2: {position: {left: 685, top: 575}},
			3: {position: BASES[1], fielding: true},
			4: {position: BASES[2], fielding: true},
			5: {fielding: true},
			6: {position: {left: 320, top: 300}},
			7: {position: {left: 650, top: 240}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 200, top: 250}}
		},
		6: {
			throwsToMake: [4, 3],
			advance: [1],
			1: {},
			2: {position: {left: 685, top: 575}},
			3: {position: BASES[1], fielding: true},
			4: {position: BASES[2], fielding: true},
			5: {position: {left: 340, top: 280}},
			6: {fielding: true},
			7: {position: {left: 650, top: 240}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 300, top: 170}}		
		},
		7: {
			throwsToMake: [4, 5],
			advance: [1],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: {left: 650, top: 320}, fielding: true},
			5: {position: BASES[3], fielding: true},
			6: {position: BASES[2]},
			7: {fielding: true},
			8: {position: {left: 750, top: 170}},
			9: {position: {left: 300, top: 170}}
		},
		RC: {
			throwsToMake: [4, 5],
			advance: [1],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: {left: 550, top: 240}, fielding: true},
			5: {position: BASES[3], fielding: true},
			6: {position: BASES[2]},
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATIONS.RC, fielding: true},
			9: {position: {left: 200, top: 450}}
		},
		8: {
			throwsToMake: [6, 5],
			advance: [1],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3], fielding: true},
			6: {position: {left: 420, top: 280}, fielding: true},
			7: {position: {left: 620, top: 80}},
			8: {fielding: true},
			9: {position: {left: 380, top: 80}}
		},
		LC: {
			throwsToMake: [6, 5],
			advance: [1],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3], fielding: true},
			6: {position: {left: 330, top: 300}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATIONS.LC, fielding: true},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			throwsToMake: [6, 5],
			advance: [1],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3], fielding: true},
			6: {position: {left: 260, top: 360}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 300, top: 200}},
			9: {fielding: true}
		}
	},
	12: {
		1: {
			throwsToMake: [5, 3],
			advance: [1, 2],
			out: true,
			1: {fielding: true},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 560, top: 420}},
			5: {position: BASES[3], fielding: true},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		2: {
			throwsToMake: [5, 3],
			advance: [1, 2],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATIONS[2], fielding: true},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: BASES[3], fielding: true},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		3: {
			throwsToMake: [5, 1],
			advance: [1, 2],
			out: true,
			1: {position: BASES[1], fielding: true},
			2: {position: BASES.H},
			3: {fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: BASES[3], fielding: true},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		4: {
			throwsToMake: [5, 3],
			advance: [1, 2],
			out: true,
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {fielding: true},
			5: {position: BASES[3], fielding: true},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 625, top: 170}},
			9: {position: {left: 200, top: 450}}
		},
		5: {
			throwsToMake: [4, 3],
			advance: [1, 2],
			out: true,
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {position: BASES[2], fielding: true},
			5: {fielding: true},
			6: {position: {left: 320, top: 300}},
			7: {position: {left: 650, top: 240}},
			8: {position: {left: 600, top: 200}},
			9: {position: {left: 200, top: 250}}
		},
		6: {
			throwsToMake: [5, 3],
			advance: [1, 2],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {position: BASES[2]},
			5: {position: BASES[3], fielding: true},
			6: {fielding: true},
			7: {position: {left: 650, top: 240}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 300, top: 170}}		
		},
		7: {
			throwsToMake: [4, 2],
			advance: [1, 2],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: {left: 700, top: 380}, fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {fielding: true},
			8: {position: {left: 750, top: 170}},
			9: {position: {left: 200, top: 450}}
		},
		RC: {
			throwsToMake: [4, 2],
			advance: [1, 2],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: {left: 600, top: 320}, fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATIONS.RC, fielding: true},
			9: {position: {left: 200, top: 450}}
		},
		8: {
			throwsToMake: [6, 2],
			advance: [1, 2],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3]},
			6: {position: {left: 500, top: 250}, fielding: true},
			7: {position: {left: 620, top: 80}},
			8: {fielding: true},
			9: {position: {left: 380, top: 80}}
		},
		LC: {
			throwsToMake: [6, 2],
			advance: [1, 2],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3]},
			6: {position: {left: 400, top: 320}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATIONS.LC, fielding: true},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			throwsToMake: [6, 2],
			advance: [1, 2],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3]},
			6: {position: {left: 300, top: 380}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 300, top: 200}},
			9: {fielding: true}
		}
	},
	123: {
		1: {
			throwsToMake: [2, 5],
			advance: [1, 2, 3],
			out: true,
			1: {fielding: true},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: {left: 560, top: 420}},
			5: {position: BASES[3], fielding: true},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		2: {
			throwsToMake: [5, 3],
			advance: [1, 2, 3],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATIONS[2], fielding: true},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: BASES[3], fielding: true},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		3: {
			throwsToMake: [2, 5],
			advance: [1, 2, 3],
			out: true,
			1: {position: BASES[1]},
			2: {position: BASES.H, fielding: true},
			3: {fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: BASES[3], fielding: true},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		4: {
			throwsToMake: [2, 5],
			advance: [1, 2, 3],
			out: true,
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {fielding: true},
			5: {position: BASES[3], fielding: true},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 625, top: 170}},
			9: {position: {left: 200, top: 450}}
		},
		5: {
			throwsToMake: [2, 3],
			advance: [1, 2, 3],
			out: true,
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1], fielding: true},
			4: {position: BASES[2]},
			5: {fielding: true},
			6: {position: {left: 320, top: 300}},
			7: {position: {left: 650, top: 240}},
			8: {position: {left: 600, top: 200}},
			9: {position: {left: 200, top: 250}}
		},
		6: {
			throwsToMake: [2, 5],
			advance: [1, 2, 3],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3], fielding: true},
			6: {fielding: true},
			7: {position: {left: 650, top: 240}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 300, top: 170}}		
		},
		7: {
			throwsToMake: [4, 2],
			advance: [1, 2, 3],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: {left: 700, top: 380}, fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {fielding: true},
			8: {position: {left: 750, top: 170}},
			9: {position: {left: 200, top: 450}}
		},
		RC: {
			throwsToMake: [4, 2],
			advance: [1, 2, 3],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: {left: 600, top: 320}, fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATIONS.RC, fielding: true},
			9: {position: {left: 200, top: 450}}
		},
		8: {
			throwsToMake: [6, 2],
			advance: [1, 2, 3],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3]},
			6: {position: {left: 500, top: 250}, fielding: true},
			7: {position: {left: 620, top: 80}},
			8: {fielding: true},
			9: {position: {left: 380, top: 80}}
		},
		LC: {
			throwsToMake: [6, 2],
			advance: [1, 2, 3],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3]},
			6: {position: {left: 400, top: 320}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATIONS.LC, fielding: true},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			throwsToMake: [6, 2],
			advance: [1, 2, 3],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3]},
			6: {position: {left: 300, top: 380}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 300, top: 200}},
			9: {fielding: true}
		}
	},
	2: {
		1: {
			throwsToMake: [3],
			out: true,
			1: {fielding: true},
			2: {position: {left: 685, top: 575}},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 560, top: 420}},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 120}},
			9: {position: {left: 200, top: 450}}
		},
		2: {
			throwsToMake: [3],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATIONS[2], fielding: true},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 485, top: 120}},
			9: {position: {left: 200, top: 450}}
		},
		3: {
			throwsToMake: [1],
			out: true,
			1: {position: BASES[1], fielding: true},
			2: {position: {left: 685, top: 575}},
			3: {fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {},
			9: {position: {left: 200, top: 450}}
		},
		4: {
			throwsToMake: [3],
			out: true,
			1: {},
			2: {position: {left: 685, top: 575}},
			3: {position: BASES[1], fielding: true},
			4: {fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 625, top: 170}},
			9: {position: {left: 200, top: 450}}
		},
		5: {
			throwsToMake: [3],
			out: true,
			1: {},
			2: {position: {left: 685, top: 575}},
			3: {position: BASES[1], fielding: true},
			4: {position: BASES[2]},
			5: {fielding: true},
			6: {position: {left: 320, top: 300}},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		6: {
			throwsToMake: [3],
			out: true,
			1: {},
			2: {position: {left: 685, top: 575}},
			3: {position: BASES[1], fielding: true},
			4: {position: BASES[2]},
			5: {position: BASES[3]},
			6: {fielding: true},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		7: {
			throwsToMake: [4, 2],
			advance: [2],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: {left: 700, top: 380}, fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {fielding: true},
			8: {position: {left: 750, top: 170}},
			9: {position: {left: 200, top: 450}}
		},
		RC: {
			throwsToMake: [4, 2],
			advance: [2],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: {left: 600, top: 320}, fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATIONS.RC, fielding: true},
			9: {position: {left: 200, top: 450}}
		},
		8: {
			throwsToMake: [6, 2],
			advance: [2],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3]},
			6: {position: {left: 500, top: 250}, fielding: true},
			7: {position: {left: 620, top: 80}},
			8: {fielding: true},
			9: {position: {left: 380, top: 80}}
		},
		LC: {
			throwsToMake: [6, 2],
			advance: [2],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3]},
			6: {position: {left: 400, top: 320}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATIONS.LC, fielding: true},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			throwsToMake: [6, 2],
			advance: [2],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3]},
			6: {position: {left: 300, top: 380}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 300, top: 200}},
			9: {fielding: true}
		}
	},
	3: {
		1: {
			throwsToMake: [3],
			out: true,
			1: {fielding: true},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 560, top: 420}},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 120}},
			9: {position: {left: 200, top: 450}}
		},
		2: {
			throwsToMake: [3],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATIONS[2], fielding: true},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 485, top: 120}},
			9: {position: {left: 200, top: 450}}
		},
		3: {
			throwsToMake: [1],
			out: true,
			1: {position: BASES[1], fielding: true},
			2: {position: BASES.H},
			3: {fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 625, top: 170}},
			9: {position: {left: 200, top: 450}}
		},
		4: {
			throwsToMake: [3],
			out: true,
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 625, top: 170}},
			9: {position: {left: 200, top: 450}}
		},
		5: {
			throwsToMake: [3],
			out: true,
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {position: BASES[2]},
			5: {fielding: true},
			6: {position: {left: 320, top: 300}},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		6: {
			throwsToMake: [3],
			out: true,
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {position: BASES[2]},
			5: {position: BASES[3]},
			6: {fielding: true},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		7: {
			throwsToMake: [4, 6],
			advance: [3],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: {left: 650, top: 280}, fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2], fielding: true},
			7: {fielding: true},
			8: {position: {left: 750, top: 170}},
			9: {position: {left: 200, top: 450}}
		},
		RC: {
			throwsToMake: [4, 6],
			advance: [3],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: {left: 580, top: 240}, fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2], fielding: true},
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATIONS.RC, fielding: true},
			9: {position: {left: 200, top: 450}}
		},
		8: {
			throwsToMake: [6, 4],
			advance: [3],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: BASES[2], fielding: true},
			5: {position: BASES[3]},
			6: {position: {left: 500, top: 220}, fielding: true},
			7: {position: {left: 620, top: 80}},
			8: {fielding: true},
			9: {position: {left: 380, top: 80}}
		},
		LC: {
			throwsToMake: [6, 4],
			advance: [3],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: BASES[2], fielding: true},
			5: {position: BASES[3]},
			6: {position: {left: 420, top: 240}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATIONS.LC, fielding: true},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			throwsToMake: [6, 4],
			advance: [3],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: BASES[2], fielding: true},
			5: {position: BASES[3]},
			6: {position: {left: 350, top: 280}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 250, top: 170}},
			9: {fielding: true}
		}
	},
	13: {
		1: {
			throwsToMake: [6, 3],
			advance: [1],
			out: true,
			1: {fielding: true},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 560, top: 420}},
			5: {position: BASES[3]},
			6: {position: BASES[2], fielding: true},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		2: {
			throwsToMake: [6, 3],
			advance: [1],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATIONS[2], fielding: true},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: BASES[3]},
			6: {position: BASES[2], fielding: true},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		3: {
			throwsToMake: [6, 1],
			advance: [1],
			out: true,
			1: {position: BASES[1], fielding: true},
			2: {position: BASES.H},
			3: {fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: BASES[3]},
			6: {position: BASES[2], fielding: true},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		4: {
			throwsToMake: [6, 3],
			advance: [1],
			out: true,
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2], fielding: true},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 625, top: 170}},
			9: {position: {left: 200, top: 450}}
		},
		5: {
			throwsToMake: [4, 3],
			advance: [1],
			out: true,
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {position: BASES[2], fielding: true},
			5: {fielding: true},
			6: {position: {left: 320, top: 300}},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		6: {
			throwsToMake: [4, 3],
			advance: [1],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {position: BASES[2], fielding: true},
			5: {position: BASES[3]},
			6: {fielding: true},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		7: {
			throwsToMake: [4, 5],
			advance: [1, 3],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: {left: 650, top: 320}, fielding: true},
			5: {position: BASES[3], fielding: true},
			6: {position: BASES[2]},
			7: {fielding: true},
			8: {position: {left: 750, top: 170}},
			9: {position: {left: 200, top: 450}}
		},
		RC: {
			throwsToMake: [4, 5],
			advance: [1, 3],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: {left: 550, top: 240}, fielding: true},
			5: {position: BASES[3], fielding: true},
			6: {position: BASES[2]},
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATIONS.RC, fielding: true},
			9: {position: {left: 200, top: 450}}
		},
		8: {
			throwsToMake: [6, 5],
			advance: [1, 3],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3], fielding: true},
			6: {position: {left: 420, top: 280}, fielding: true},
			7: {position: {left: 620, top: 80}},
			8: {fielding: true},
			9: {position: {left: 380, top: 80}}
		},
		LC: {
			throwsToMake: [6, 5],
			advance: [1, 3],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3], fielding: true},
			6: {position: {left: 330, top: 300}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATIONS.LC, fielding: true},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			throwsToMake: [6, 5],
			advance: [1, 3],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3], fielding: true},
			6: {position: {left: 260, top: 360}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 300, top: 200}},
			9: {fielding: true}
		}
	},
	23: {
		1: {
			throwsToMake: [3],
			out: true,
			1: {fielding: true},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 560, top: 420}},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		2: {
			throwsToMake: [3],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATIONS[2]},
			3: {position: BASES[1], fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		3: {
			throwsToMake: [1],
			out: true,
			1: {position: BASES[1], fielding: true},
			2: {position: BASES.H},
			3: {fielding: true},
			4: {position: {left: 695, top: 340}},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 200, top: 450}}
		},
		4: {
			throwsToMake: [3],
			out: true,
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 800, top: 450}},
			8: {position: {left: 625, top: 170}},
			9: {position: {left: 200, top: 450}}
		},
		5: {
			throwsToMake: [3],
			out: true,
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1], fielding: true},
			4: {position: BASES[2]},
			5: {fielding: true},
			6: {position: {left: 320, top: 300}},
			7: {position: {left: 650, top: 240}},
			8: {position: {left: 600, top: 200}},
			9: {position: {left: 200, top: 250}}
		},
		6: {
			throwsToMake: [3],
			1: {},
			2: {position: BASES.H},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3], fielding: true},
			6: {fielding: true},
			7: {position: {left: 650, top: 240}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 300, top: 170}}		
		},
		7: {
			throwsToMake: [4, 2],
			advance: [2, 3],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: {left: 700, top: 380}, fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {fielding: true},
			8: {position: {left: 750, top: 170}},
			9: {position: {left: 200, top: 450}}
		},
		RC: {
			throwsToMake: [4, 2],
			advance: [2, 3],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: {left: 600, top: 320}, fielding: true},
			5: {position: BASES[3]},
			6: {position: BASES[2]},
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATIONS.RC, fielding: true},
			9: {position: {left: 200, top: 450}}
		},
		8: {
			throwsToMake: [6, 2],
			advance: [2, 3],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3]},
			6: {position: {left: 500, top: 250}, fielding: true},
			7: {position: {left: 620, top: 80}},
			8: {fielding: true},
			9: {position: {left: 380, top: 80}}
		},
		LC: {
			throwsToMake: [6, 2],
			advance: [2, 3],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3]},
			6: {position: {left: 400, top: 320}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATIONS.LC, fielding: true},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			throwsToMake: [6, 2],
			advance: [2, 3],
			1: {},
			2: {position: BASES.H, fielding: true},
			3: {position: BASES[1]},
			4: {position: BASES[2]},
			5: {position: BASES[3]},
			6: {position: {left: 300, top: 380}, fielding: true},
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 300, top: 200}},
			9: {fielding: true}
		}
	}
};

var SOUNDS = {
	hit: {medias: [], sources: ['mp3/hit.mp3'], next: 0},
	good: {medias: [], sources: ['mp3/cheer.mp3', 'mp3/organ.mp3'], next: 0},
	bad: {medias: [], sources: ['mp3/boo.mp3'], next: 0},
	safe: {medias: [], sources: ['mp3/safe.mp3'], next: 0},
	out: {medias: [], sources: ['mp3/out.mp3'], next: 0},
	pee: {medias: [], sources: ['mp3/pee.mp3'], next: 0}
};
var ANIMATION_DURATION = 1500;
