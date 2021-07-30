var characters_num = 40;

// 지연시간 처리하는 함수
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve, n * 1000);
    });
}

// 난수 생성 함수
function rand_num(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 월급 입력받아서 캐릭터 위치 리턴하는 함수
function get_position(input_pay) {
	if (input_pay >= 1000) {
		return characters_num;
	} else {
		return Math.round((input_pay / 10) * 0.4);	
	}
}

// 브라우저 width 픽셀값 리턴하는 함수
function get_browser_width() {
	return Math.max(
		document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth
	);
}

async function animation_mobile(input_pay, browser_width) {
	x = new Array();
	y = new Array();
	
	let statics_height = document.getElementById("result_statics").clientHeight;
	let bg_height = document.getElementById("result_bg").clientHeight;
	
	for (let i = 1; i <= characters_num; i++) {
		// 난수 좌표 생성
		x[i] = rand_num(1, browser_width - 100);
		y[i] = rand_num(-statics_height, bg_height - 200);
		
		document.getElementById("man_" + i).style.width = "22px";
		document.getElementById("man_" + i).style.zIndex = "2";
		document.getElementById("man_" + i).style.position = "absolute";
		document.getElementById("man_" + i).style.top = y[i] + "px";
		document.getElementById("man_" + i).style.left = x[i] + "px";
		if (get_position(input_pay) == i) {
			document.getElementById("man_" + i).src = "./assets/images/man_2.png";
		} else {
			document.getElementById("man_" + i).src = "./assets/images/man_1.png";
		}
	}
	
	await delay(0.5);
	
	// 좌표 보정값 설정
	let bg_width = document.getElementById("result_bg").clientWidth;
	let empty_screen_px = parseInt(browser_width - bg_width);
	
	var correction = 10;
	
	x_pos = [
			0, 20, 50, 80, 110, 140, 170, 200, 230, 260, 290, 320, 350,
			60, 90, 120, 150, 180, 210, 240, 270, 300, 330,
			130, 160, 190, 220, 250, 280, 310, 340,
			170, 200, 230, 260, 290, 320,
			250, 280, 310, 340,
			];
	y_pos = [
			0, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 
			585, 584, 583, 582, 581, 580, 579, 578, 577, 576,
			476, 473, 470, 467, 464, 461, 458, 455,
			345, 342, 339, 336, 333, 330, 
			190, 187, 184, 181
			];
	
	for (let j = 1; j <= characters_num; j++) {
		if ((j % 6) == 0) {
			await delay(0.20);
		} else {
			await delay(0.01);
		}
		
		let move_x = (x_pos[j] - x[j]) + (empty_screen_px + correction) ;
		let move_y = (y_pos[j] - y[j]);
		
		// 캐릭터별 포지션 차이: x+-5, y+-4
		move_x += rand_num(-5, 5);
		move_y += rand_num(-4, 4);
		
		// keyframes 동적으로 생성
		let style = document.createElement("style");
		style.type = "text/css";
		let keyFrames = "\
		@keyframes move_" + j + " {\
			100% {\
				transform: translate(" + move_x + "px, " + move_y + "px);\
			}\
		}";
		style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, "180deg");
		document.getElementsByTagName('head')[0].appendChild(style);
		document.getElementById("man_" + j).style.animation = "move_" + j + " 0.8s forwards";
	}
}

async function animation_desktop(input_pay, browser_width) {
	x = new Array();
	y = new Array();
	
	for (let i = 1; i <= characters_num; i++) {
		// 난수 좌표 생성
		x[i] = rand_num(1, browser_width - 100);
		y[i] = rand_num(1, 760);
		
		document.getElementById("man_" + i).style.width = "28px";
		document.getElementById("man_" + i).style.zIndex = "2";
		document.getElementById("man_" + i).style.position = "absolute";
		document.getElementById("man_" + i).style.top = y[i] + "px";
		document.getElementById("man_" + i).style.left = x[i] + "px";
		if (get_position(input_pay) == i) {
			document.getElementById("man_" + i).src = "./assets/images/man_2.png";
		} else {
			document.getElementById("man_" + i).src = "./assets/images/man_1.png";
		}
	}
	
	await delay(0.5);
	
	// 브라우저 width별 x좌표 보정값 설정
	let bg_width = document.getElementById("result_bg").clientWidth;
	let statics_width = document.getElementById("result_statics").clientWidth;
	let empty_screen_px = parseInt(browser_width - (bg_width + statics_width));
	var correction = 30;
	if (browser_width > 1920) {
		correction = 0;
	} else if (browser_width < 1280) {
		correction = 50;
	}
	

	// x좌표: width 1920px 기준
	/*x_pos = [0, 1480, 1510, 1540, 1570, 1600, 1630, 1660, 1690, 1720, 1750, 1780, 1810, 
			1530, 1560, 1590, 1620, 1650, 1680, 1710, 1740, 1770, 1800, 
			1610, 1640, 1670, 1700, 1730, 1760, 1790, 1820,
			1670, 1700, 1730, 1760, 1790, 1820, 
			1740, 1770, 1800, 1830]; */
	x_pos = [
			0, 680, 710, 740, 770, 800, 830, 860, 890, 920, 950, 980, 1010,
			730, 760, 790, 820, 850, 880, 910, 940, 970, 1000,
			810, 840, 870, 900, 930, 960, 990, 1020,
			870, 900, 930, 960, 990, 1020,
			940, 970, 1000, 1030,
			];
	y_pos = [
			0, 761, 761, 761, 761, 760, 760, 760, 760, 759, 759, 759, 759, 
			695, 694, 693, 692, 691, 690, 689, 688, 687, 686,
			564, 561, 558, 555, 552, 549, 546, 543,
			410, 405, 400, 395, 390, 385, 
			220, 215, 210, 205
			];
	
	for (let j = 1; j <= characters_num; j++) {
		if ((j % 6) == 0) {
			await delay(0.20);
		} else {
			await delay(0.01);
		}
		
		let move_x = (x_pos[j] - x[j]) + (empty_screen_px - correction);
		let move_y = (y_pos[j] - y[j]);
		
		// 캐릭터별 포지션 차이: x+-5, y+-4
		move_x += rand_num(-5, 5);
		move_y += rand_num(-4, 4);
		
		// keyframes 동적으로 생성
		let style = document.createElement("style");
		style.type = "text/css";
		let keyFrames = "\
		@keyframes move_" + j + " {\
			100% {\
				transform: translate(" + move_x + "px, " + move_y + "px);\
			}\
		}";
		style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, "180deg");
		document.getElementsByTagName('head')[0].appendChild(style);
		document.getElementById("man_" + j).style.animation = "move_" + j + " 0.8s forwards";
	}
	

}

// 애니메이션 실행 함수
function exe_animation(input_pay) {
	var browser_width = get_browser_width();
	if (browser_width <= 1120) {
		animation_mobile(input_pay, browser_width);
	} else {
		animation_desktop(input_pay, browser_width);
	}

	return;
}
