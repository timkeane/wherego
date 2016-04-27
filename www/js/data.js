var BASE = {
	1: {left: 675, top: 500},
	2: {left: 500, top: 325},
	3: {left: 325, top: 500},
	H: {left: 500, top: 665}
};

var FIELDER = {
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

var BACKUP = { /* fielder : backs-up-fielder */
	1: {
		2: {position: {left: 500, top: 750}, message: 'The Pitcher backs up Home Plate'}
	},
	2: {
		3: {position: {left: 685, top: 575}, message: 'The Catcher backs up First Base'}
	},
	7: {
		3: {position: {left: 800, top: 450}, message: 'The Right Fielder backs up First Base'}
	},
	9: {
		5: {position: {left: 200, top: 450}, message: 'The Left Fielder backs up Third Base'}
	}
};

var COVER = { /* base : fielder */
	1: {
		1: {position: BASE[1], message: 'The Pitcher covers First Base'},
		3: {position: BASE[1], message: 'The First Baseman covers First Base'}
	},
	2: {
		4: {position: BASE[2], message: 'The Second Baseman covers Second Base'},
		6: {position: BASE[2], message: 'The Shortstop covers Second Base'}
	},
	3: {
		5: {position: BASE[3], message: 'The Third Baseman covers Third Base'}
	},
	H: {
		1: {position: BASE.H, message: 'The Pitcher covers Home Plate'},
		2: {position: BASE.H, message: 'The Catcher covers Home Plate'}
	}
};

var CUTOFF = { /* hit-to : cutoff-fielder : throw-to-base */
	7:{
		4: {
			2: {position: {left: 650, top: 280}, message: 'The Second Baseman gets the cutoff throw from Right Field and relays to Second Base'},
			3: {position: {left: 650, top: 320}, message: 'The Second Baseman gets the cutoff throw from Right Field and relays to Third Base'},
			H: {position: {left: 700, top: 380}, message: 'The Second Baseman gets the cutoff throw from Right Field and relays to Home Plate'}
		}
	},
	RC:{
		4: {
			2: {position: {left: 580, top: 240}, message: 'The Second Baseman gets the cutoff throw from Right Field and relays to Second Base'},
			3: {position: {left: 550, top: 240}, message: 'The Second Baseman gets the cutoff throw from Right Field and relays to Third Base'},
			H: {position: {left: 600, top: 320}, message: 'The Second Baseman gets the cutoff throw from Right Field and relays to Home Plate'}
		}
	},
	8: {
		6: {
			2: {position: {left: 500, top: 220}, message: 'The Shortstop gets the cutoff throw from Center Field and relays to Second Base'},
			3: {position: {left: 420, top: 280}, message: 'The Shortstop gets the cutoff throw from Center Field and relays to Third Base'},
			H: {position: {left: 500, top: 250}, message: 'The Shortstop gets the cutoff throw from Center Field and relays to Home Plate'}
		}
	},
	LC: {
		6: {
			2: {position: {left: 420, top: 240}, message: 'The Shortstop gets the cutoff throw from Left Field and relays to Second Base'},
			3: {position: {left: 330, top: 300}, message: 'The Shortstop gets the cutoff throw from Left Field and relays to Third Base'},
			H: {position: {left: 400, top: 320}, message: 'The Shortstop gets the cutoff throw from Left Field and relays to Home Plate'}
		}
	},
	9: {
		6: {
			9: {position: {left: 380, top: 80}, message: 'The Shortstop gets the cutoff throw from Left Field and relays to Second Base'},
			3: {position: {left: 260, top: 360}, message: 'The Shortstop gets the cutoff throw from Left Field and relays to Third Base'},
			H: {position: {left: 300, top: 380}, message: 'The Shortstop gets the cutoff throw from Left Field and relays to Home Plate'}
		}
	}
};

var HIT_LOCATION = {
	1: FIELDER[1].position,
	2: {left: 500, top: 600},
	3: FIELDER[3].position,
	4: FIELDER[4].position,
	5: FIELDER[5].position,
	6: FIELDER[6].position,
	7: FIELDER[7].position,
	RC: {left: 650, top: 150},
	8: FIELDER[8].position,
	LC: {left: 350, top: 150},
	9: FIELDER[9].position
};

var PROPER_FIELDER_POSITON = { /* runners-on : hit-to : fielder-position */
	0: {
		1: {
			fielding: [1, 3],
			throwsToMake: [3],
			out: true,
			1: {message: 'The Pitcher fields the ball and throws to First Base'},
			2: BACKUP[2][3],
			3: COVER[1][3],
			4: {position: {left: 560, top: 420}},
			5: {position: {left: 440, top: 420}},
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 120}},
			9: {}
		},
		2: {
			fielding: [2, 3],
			throwsToMake: [3],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATION[2]},
			3: COVER[1][3],
			4: {position: {left: 695, top: 340}},
			5: {position: {left: 400, top: 485}},
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {},
			9: {}
		},
		3: {
			fielding: [1, 3],
			throwsToMake: [1],
			out: true,
			1: COVER[1][1],
			2: BACKUP[2][3],
			3: {},
			4: {position: {left: 695, top: 340}},
			5: {},
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {},
			9: {}
		},
		4: {
			fielding: [3, 4],
			throwsToMake: [3],
			out: true,
			1: {},
			2: BACKUP[2][3],
			3: COVER[1][3],
			4: {},
			5: {},
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 625, top: 170}},
			9: {position: {left: 300, top: 170}}		
		},
		5: {
			fielding: [3, 5],
			throwsToMake: [3],
			out: true,
			1: {},
			2: BACKUP[2][3],
			3: COVER[1][3],
			4: COVER[2][4],
			5: {},
			6: {position: {left: 320, top: 300}},
			7: BACKUP[7][3],
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 200, top: 300}}
		},
		6: {
			fielding: [3, 6],
			throwsToMake: [3],
			out: true,
			1: {},
			2: BACKUP[2][3],
			3: COVER[1][3],
			4: COVER[2][4],
			5: {position: {left: 340, top: 280}},
			6: {},
			7: BACKUP[7][3],
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 300, top: 170}}		
		},
		7: {
			fielding: [4, 6, 7],
			throwsToMake: [4, 6],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: CUTOFF[7][4][2],
			5: COVER[3][5],
			6: COVER[2][6],
			7: {},
			8: {position: {left: 750, top: 170}},
			9: {position: {left: 300, top: 300}}
		},
		RC: {
			fielding: [4, 6, 8],
			throwsToMake: [4, 6],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: CUTOFF.RC[4][2],
			5: COVER[3][5],
			6: COVER[2][6],
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATION.RC, fielding: true},
			9: {position: {left: 300, top: 300}}
		},
		8: {
			fielding: [4, 6, 8],
			throwsToMake: [6, 4],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF[8][6][2],
			7: {position: {left: 620, top: 80}},
			8: {},
			9: CUTOFF[9][6][2]
		},
		LC: {
			fielding: [4, 6, 8],
			throwsToMake: [6, 4],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF.LC[6][2],
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATION.LC},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			fielding: [4, 6, 9],
			throwsToMake: [6, 4],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: {position: {left: 350, top: 280}},
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 250, top: 170}},
			9: {}
		}
	},
	1: {
		1: {
			fielding: [1, 3, 6],
			throwsToMake: [6, 3],
			advance: [1],
			out: true,
			1: {},
			2: BACKUP[2][3],
			3: COVER[1][3],
			4: {position: {left: 560, top: 420}},
			5: {position: {left: 440, top: 420}},
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 350, top: 240}}
		},
		2: {
			fielding: [2, 3, 6],
			throwsToMake: [6, 3],
			advance: [1],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATION[2]},
			3: COVER[1][3],
			4: {position: {left: 695, top: 340}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 350, top: 240}}
		},
		3: {
			fielding: [1, 3, 6],
			throwsToMake: [6, 1],
			advance: [1],
			out: true,
			1: COVER[1][1],
			2: BACKUP[2][3],
			3: {},
			4: {position: {left: 695, top: 340}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: {position: {left: 350, top: 240}}
		},
		4: {
			fielding: [3, 4, 6],
			throwsToMake: [6, 3],
			advance: [1],
			out: true,
			1: {},
			2: BACKUP[2][3],
			3: COVER[1][3],
			4: {},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 625, top: 170}},
			9: {position: {left: 350, top: 240}}
		},
		5: {
			fielding: [3, 4, 5],
			throwsToMake: [4, 3],
			advance: [1],
			out: true,
			1: {},
			2: BACKUP[2][3],
			3: COVER[1][3],
			4: COVER[2][4],
			5: {},
			6: {position: {left: 320, top: 300}},
			7: {position: {left: 650, top: 240}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 200, top: 250}}
		},
		6: {
			fielding: [3, 4, 6],
			throwsToMake: [4, 3],
			advance: [1],
			1: {},
			2: BACKUP[2][3],
			3: COVER[1][3],
			4: COVER[2][4],
			5: {position: {left: 340, top: 280}},
			6: {},
			7: {position: {left: 650, top: 240}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 300, top: 170}}		
		},
		7: {
			fielding: [4, 5, 7],
			throwsToMake: [4, 5],
			advance: [1],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: CUTOFF[7][4][3],
			5: COVER[3][5],
			6: COVER[2][6],
			7: {},
			8: {position: {left: 750, top: 170}},
			9: {position: {left: 300, top: 170}}
		},
		RC: {
			fielding: [4, 5, 8],
			throwsToMake: [4, 5],
			advance: [1],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: CUTOFF.RC[4][2],
			5: COVER[3][5],
			6: COVER[2][6],
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATION.RC},
			9: BACKUP[9][5]
		},
		8: {
			fielding: [5, 6, 8],
			throwsToMake: [6, 5],
			advance: [1],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF[8][6][3],
			7: {position: {left: 620, top: 80}},
			8: {},
			9: CUTOFF[9][6][2]
		},
		LC: {
			fielding: [5, 6, 8],
			throwsToMake: [6, 5],
			advance: [1],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF.LC[6][3],
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATION.LC},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			fielding: [5, 6, 9],
			throwsToMake: [6, 5],
			advance: [1],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF[9][6][3],
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 300, top: 200}},
			9: {}
		}
	},
	12: {
		1: {
			fielding: [1, 3, 5],
			throwsToMake: [5, 3],
			advance: [1, 2],
			out: true,
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: {position: {left: 560, top: 420}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: BACKUP[9][5]
		},
		2: {
			fielding: [2, 3, 5],
			throwsToMake: [5, 3],
			advance: [1, 2],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATION[2]},
			3: COVER[1][3],
			4: {position: {left: 695, top: 340}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: BACKUP[9][5]
		},
		3: {
			fielding: [1, 3, 5],
			throwsToMake: [5, 1],
			advance: [1, 2],
			out: true,
			1: COVER[1][1],
			2: COVER.H[2],
			3: {},
			4: {position: {left: 695, top: 340}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: BACKUP[9][5]
		},
		4: {
			fielding: [3, 4, 5],
			throwsToMake: [5, 3],
			advance: [1, 2],
			out: true,
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: {},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 625, top: 170}},
			9: BACKUP[9][5]
		},
		5: {
			fielding: [3, 4, 5],
			throwsToMake: [4, 3],
			advance: [1, 2],
			out: true,
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: {},
			6: {position: {left: 320, top: 300}},
			7: BACKUP[7][3],
			8: {position: {left: 600, top: 200}},
			9: {position: {left: 200, top: 250}}
		},
		6: {
			fielding: [3, 5, 6],
			throwsToMake: [5, 3],
			advance: [1, 2],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: {},
			7: BACKUP[7][3],
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 300, top: 170}}		
		},
		7: {
			fielding: [2, 4, 7],
			throwsToMake: [4, 2],
			advance: [1, 2],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: CUTOFF[7][4].H,
			5: COVER[3][5],
			6: COVER[2][6],
			7: {},
			8: {position: {left: 750, top: 170}},
			9: BACKUP[9][5]
		},
		RC: {
			fielding: [2, 4, 8],
			throwsToMake: [4, 2],
			advance: [1, 2],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: CUTOFF.RC[4].H,
			5: COVER[3][5],
			6: COVER[2][6],
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATION.RC},
			9: BACKUP[9][5]
		},
		8: {
			fielding: [2, 4, 8],
			throwsToMake: [6, 2],
			advance: [1, 2],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF[8][6].H,
			7: {position: {left: 620, top: 80}},
			8: {},
			9: CUTOFF[9][6][2]
		},
		LC: {
			fielding: [2, 6, 8],
			throwsToMake: [6, 2],
			advance: [1, 2],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF.LC[6].H,
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATION.LC},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			fielding: [2, 6, 9],
			throwsToMake: [6, 2],
			advance: [1, 2],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF[9][6].H,
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 300, top: 200}},
			9: {}
		}
	},
	123: {
		1: {
			fielding: [1, 2, 5],
			throwsToMake: [2, 5],
			advance: [1, 2, 3],
			out: true,
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: {position: {left: 560, top: 420}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: BACKUP[9][5]
		},
		2: {
			fielding: [2, 3, 5],
			throwsToMake: [5, 3],
			advance: [1, 2, 3],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATION[2]},
			3: COVER[1][3],
			4: {position: {left: 695, top: 340}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: BACKUP[9][5]
		},
		3: {
			fielding: [2, 3, 5],
			throwsToMake: [2, 5],
			advance: [1, 2, 3],
			out: true,
			1: COVER[1][1],
			2: COVER.H[2],
			3: {},
			4: {position: {left: 695, top: 340}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: BACKUP[9][5]
		},
		4: {
			fielding: [2, 4, 5],
			throwsToMake: [2, 5],
			advance: [1, 2, 3],
			out: true,
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: {},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 625, top: 170}},
			9: BACKUP[9][5]
		},
		5: {
			fielding: [2, 3, 5],
			throwsToMake: [2, 3],
			advance: [1, 2, 3],
			out: true,
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: {},
			6: {position: {left: 320, top: 300}},
			7: BACKUP[7][3],
			8: {position: {left: 600, top: 200}},
			9: {position: {left: 200, top: 250}}
		},
		6: {
			fielding: [2, 5, 6],
			throwsToMake: [2, 5],
			advance: [1, 2, 3],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: {},
			7: BACKUP[7][3],
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 300, top: 170}}		
		},
		7: {
			fielding: [2, 4, 7],
			throwsToMake: [4, 2],
			advance: [1, 2, 3],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: {position: {left: 700, top: 380}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: {},
			8: {position: {left: 750, top: 170}},
			9: BACKUP[9][5]
		},
		RC: {
			fielding: [2, 4, 8],
			throwsToMake: [4, 2],
			advance: [1, 2, 3],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: CUTOFF.RC[4].H,
			5: COVER[3][5],
			6: COVER[2][6],
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATION.RC},
			9: BACKUP[9][5]
		},
		8: {
			fielding: [2, 6, 8],
			throwsToMake: [6, 2],
			advance: [1, 2, 3],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF[8][6].H,
			7: {position: {left: 620, top: 80}},
			8: {},
			9: CUTOFF[9][6][2]
		},
		LC: {
			fielding: [2, 6, 8],
			throwsToMake: [6, 2],
			advance: [1, 2, 3],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF.LC[6].H,
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATION.LC},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			fielding: [2, 6, 9],
			throwsToMake: [6, 2],
			advance: [1, 2, 3],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF[9][6].H,
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 300, top: 200}},
			9: {}
		}
	},
	2: {
		1: {
			fielding: [1, 3],
			throwsToMake: [3],
			out: true,
			1: {},
			2: BACKUP[2][3],
			3: COVER[1][3],
			4: {position: {left: 560, top: 420}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 120}},
			9: BACKUP[9][5]
		},
		2: {
			fielding: [2, 3],
			throwsToMake: [3],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATION[2]},
			3: COVER[1][3],
			4: {position: {left: 695, top: 340}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 485, top: 120}},
			9: BACKUP[9][5]
		},
		3: {
			fielding: [1, 3],
			throwsToMake: [1],
			out: true,
			1: COVER[1][1],
			2: BACKUP[2][3],
			3: {},
			4: {position: {left: 695, top: 340}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {},
			9: BACKUP[9][5]
		},
		4: {
			fielding: [3, 4],
			throwsToMake: [3],
			out: true,
			1: {},
			2: BACKUP[2][3],
			3: COVER[1][3],
			4: {},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 625, top: 170}},
			9: BACKUP[9][5]
		},
		5: {
			fielding: [3, 5],
			throwsToMake: [3],
			out: true,
			1: {},
			2: BACKUP[2][3],
			3: COVER[1][3],
			4: COVER[2][4],
			5: {},
			6: {position: {left: 320, top: 300}},
			7: BACKUP[7][3],
			8: {position: {left: 485, top: 150}},
			9: BACKUP[9][5]
		},
		6: {
			fielding: [3, 6],
			throwsToMake: [3],
			out: true,
			1: {},
			2: BACKUP[2][3],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: {},
			7: BACKUP[7][3],
			8: {position: {left: 485, top: 150}},
			9: BACKUP[9][5]
		},
		7: {
			fielding: [2, 4, 7],
			throwsToMake: [4, 2],
			advance: [2],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: CUTOFF[7][4].H,
			5: COVER[3][5],
			6: COVER[2][6],
			7: {},
			8: {position: {left: 750, top: 170}},
			9: BACKUP[9][5]
		},
		RC: {
			fielding: [2, 4, 8],
			throwsToMake: [4, 2],
			advance: [2],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: CUTOFF.RC[4].H,
			5: COVER[3][5],
			6: COVER[2][6],
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATION.RC},
			9: BACKUP[9][5]
		},
		8: {
			fielding: [2, 6, 8],
			throwsToMake: [6, 2],
			advance: [2],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF[8][6].H,
			7: {position: {left: 620, top: 80}},
			8: {},
			9: CUTOFF[9][6][2]
		},
		LC: {
			fielding: [2, 6, 8],
			throwsToMake: [6, 2],
			advance: [2],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF.LC[6].H,
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATION.LC},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			fielding: [2, 6, 9],
			throwsToMake: [6, 2],
			advance: [2],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF[9][6].H,
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 300, top: 200}},
			9: {}
		}
	},
	3: {
		1: {
			fielding: [1, 3],
			throwsToMake: [3],
			out: true,
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: {position: {left: 560, top: 420}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 120}},
			9: BACKUP[9][5]
		},
		2: {
			fielding: [2, 3],
			throwsToMake: [3],
			out: true,
			1: COVER[1].H,
			2: {position: HIT_LOCATION[2]},
			3: COVER[1][3],
			4: {position: {left: 695, top: 340}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 485, top: 120}},
			9: BACKUP[9][5]
		},
		3: {
			fielding: [1, 3],
			throwsToMake: [1, 3],
			out: true,
			1: COVER[1][1],
			2: COVER.H[2],
			3: {},
			4: {position: {left: 695, top: 340}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 625, top: 170}},
			9: BACKUP[9][5]
		},
		4: {
			fielding: [3, 4],
			throwsToMake: [3],
			out: true,
			1: BACKUP[1].H,
			2: COVER.H[2],
			3: COVER[1][3],
			4: {},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 625, top: 170}},
			9: BACKUP[9][5]
		},
		5: {
			fielding: [3, 5],
			throwsToMake: [3],
			out: true,
			1: BACKUP[1].H,
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: {},
			6: {position: {left: 320, top: 300}},
			7: BACKUP[7][3],
			8: {position: {left: 485, top: 150}},
			9: BACKUP[9][5]
		},
		6: {
			fielding: [3, 6],
			throwsToMake: [3],
			out: true,
			1: BACKUP[1].H,
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: {},
			7: BACKUP[7][3],
			8: {position: {left: 485, top: 150}},
			9: BACKUP[9][5]
		},
		7: {
			fielding: [4, 6, 7],
			throwsToMake: [4, 6],
			advance: [3],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: CUTOFF[7][4][2],
			5: COVER[3][5],
			6: COVER[2][6],
			7: {},
			8: {position: {left: 750, top: 170}},
			9: BACKUP[9][5]
		},
		RC: {
			fielding: [4, 6, 8],
			throwsToMake: [4, 6],
			advance: [3],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: CUTOFF.RC[4][2],
			5: COVER[3][5],
			6: {position: BASE[2], fielding: true},
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATION.RC},
			9: BACKUP[9][5]
		},
		8: {
			fielding: [4, 6, 8],
			throwsToMake: [6, 4],
			advance: [3],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF[8][6][2],
			7: {position: {left: 620, top: 80}},
			8: {},
			9: CUTOFF[9][6][2]
		},
		LC: {
			fielding: [4, 6, 8],
			throwsToMake: [6, 4],
			advance: [3],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF.LC[6][2],
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATION.LC},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			fielding: [4, 6, 9],
			throwsToMake: [6, 4],
			advance: [3],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: {position: {left: 350, top: 280}},
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 250, top: 170}},
			9: {}
		}
	},
	13: {
		1: {
			fielding: [1, 3, 6],
			throwsToMake: [6, 3],
			advance: [1],
			out: true,
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: {position: {left: 560, top: 420}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: BACKUP[9][5]
		},
		2: {
			fielding: [2, 3, 6],
			throwsToMake: [6, 3],
			advance: [1],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATION[2]},
			3: COVER[1][3],
			4: {position: {left: 695, top: 340}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: BACKUP[9][5]
		},
		3: {
			fielding: [1, 3, 6],
			throwsToMake: [6, 1],
			advance: [1],
			out: true,
			1: COVER[1][1],
			2: COVER.H[2],
			3: {},
			4: {position: {left: 695, top: 340}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: BACKUP[9][5]
		},
		4: {
			fielding: [3, 4, 6],
			throwsToMake: [6, 3],
			advance: [1],
			out: true,
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: {},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 625, top: 170}},
			9: BACKUP[9][5]
		},
		5: {
			fielding: [3, 4, 5],
			throwsToMake: [4, 3],
			advance: [1],
			out: true,
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: {},
			6: {position: {left: 320, top: 300}},
			7: BACKUP[7][3],
			8: {position: {left: 485, top: 150}},
			9: BACKUP[9][5]
		},
		6: {
			fielding: [3, 4, 6],
			throwsToMake: [4, 3],
			advance: [1],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: {position: BASE[2],},
			5: COVER[3][5],
			6: {},
			7: BACKUP[7][3],
			8: {position: {left: 485, top: 150}},
			9: BACKUP[9][5]
		},
		7: {
			fielding: [4, 5, 7],
			throwsToMake: [4, 5],
			advance: [1, 3],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: CUTOFF[7][4][3],
			5: COVER[3][5],
			6: COVER[2][6],
			7: {},
			8: {position: {left: 750, top: 170}},
			9: BACKUP[9][5]
		},
		RC: {
			fielding: [4, 5, 8],
			throwsToMake: [4, 5],
			advance: [1, 3],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: CUTOFF.RC[4][2],
			5: COVER[3][5],
			6: COVER[2][6],
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATION.RC},
			9: BACKUP[9][5]
		},
		8: {
			fielding: [5, 6, 8],
			throwsToMake: [6, 5],
			advance: [1, 3],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF[8][6][3],
			7: {position: {left: 620, top: 80}},
			8: {},
			9: CUTOFF[9][6][2]
		},
		LC: {
			fielding: [5, 6, 8],
			throwsToMake: [6, 5],
			advance: [1, 3],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF.LC[6][3],
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATION.LC},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			fielding: [5, 6, 9],
			throwsToMake: [6, 5],
			advance: [1, 3],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF[9][6][3],
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 300, top: 200}},
			9: {}
		}
	},
	23: {
		1: {
			fielding: [1, 3],
			throwsToMake: [3],
			out: true,
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: {position: {left: 560, top: 420}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: BACKUP[9][5]
		},
		2: {
			fielding: [2, 3],
			throwsToMake: [3],
			out: true,
			1: {position: {left: 500, top: 530}},
			2: {position: HIT_LOCATION[2]},
			3: COVER[1][3],
			4: {position: {left: 695, top: 340}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: BACKUP[9][5]
		},
		3: {
			fielding: [1, 3],
			throwsToMake: [1],
			out: true,
			1: COVER[1][1],
			2: COVER.H[2],
			3: {},
			4: {position: {left: 695, top: 340}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 500, top: 150}},
			9: BACKUP[9][5]
		},
		4: {
			fielding: [3, 4],
			throwsToMake: [3],
			out: true,
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: {},
			5: COVER[3][5],
			6: COVER[2][6],
			7: BACKUP[7][3],
			8: {position: {left: 625, top: 170}},
			9: BACKUP[9][5]
		},
		5: {
			fielding: [3, 5],
			throwsToMake: [3],
			out: true,
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: {},
			6: {position: {left: 320, top: 300}},
			7: {position: {left: 650, top: 240}},
			8: {position: {left: 600, top: 200}},
			9: {position: {left: 200, top: 250}}
		},
		6: {
			fielding: [5, 6],
			throwsToMake: [3],
			1: {},
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: {},
			7: {position: {left: 650, top: 240}},
			8: {position: {left: 485, top: 150}},
			9: {position: {left: 300, top: 170}}		
		},
		7: {
			fielding: [2, 4, 7],
			throwsToMake: [4, 2],
			advance: [2, 3],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: {position: {left: 700, top: 380}},
			5: COVER[3][5],
			6: COVER[2][6],
			7: {},
			8: {position: {left: 750, top: 170}},
			9: BACKUP[9][5]
		},
		RC: {
			fielding: [2, 4, 8],
			throwsToMake: [4, 2],
			advance: [2, 3],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: CUTOFF.RC[4].H,
			5: COVER[3][5],
			6: COVER[2][6],
			7: {position: {left: 700, top: 100}},
			8: {position: HIT_LOCATION.RC},
			9: BACKUP[9][5]
		},
		8: {
			fielding: [2, 6, 8],
			throwsToMake: [6, 2],
			advance: [2, 3],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF[8][6].H,
			7: {position: {left: 620, top: 80}},
			8: {},
			9: CUTOFF[9][6][2]
		},
		LC: {
			fielding: [2, 6, 8],
			throwsToMake: [6, 2],
			advance: [2, 3],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF.LC[6].H,
			7: {position: {left: 700, top: 300}},
			8: {position: HIT_LOCATION.LC},
			9: {position: {left: 300, top: 100}}
		},
		9: {
			fielding: [2, 6, 9],
			throwsToMake: [6, 2],
			advance: [2, 3],
			1: BACKUP[1][2],
			2: COVER.H[2],
			3: COVER[1][3],
			4: COVER[2][4],
			5: COVER[3][5],
			6: CUTOFF[9][6].H,
			7: {position: {left: 700, top: 300}},
			8: {position: {left: 300, top: 200}},
			9: {}
		}
	}
};

var SOUNDS = {
	play: {medias: [], sources: ['mp3/play.mp3'], next: 0},
	hit: {medias: [], sources: ['mp3/hit.mp3'], next: 0},
	good: {medias: [], sources: ['mp3/cheer.mp3', 'mp3/organ.mp3'], next: 0},
	bad: {medias: [], sources: ['mp3/boo.mp3'], next: 0},
	safe: {medias: [], sources: ['mp3/safe.mp3'], next: 0},
	out: {medias: [], sources: ['mp3/out.mp3'], next: 0},
	pee: {medias: [], sources: ['mp3/pee.mp3'], next: 0}
};
var ANIMATION_DURATION = 1500;
