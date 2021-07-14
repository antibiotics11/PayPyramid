// 지연시간 처리하는 함수
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve, n * 1000);
    });
}

// 소득분위 1-10으로 나눠서 리턴하는 함수
function get_position(input_pay) {
	if (input_pay >= 1000) {
		var result_position = 10;
	} else {
		var result_position = (input_pay / 100);
	}
	
	return parseInt(result_position);
}

// 애니메이션 실행 함수
async function exe_animation(input_pay) {
	var result_position = get_position(input_pay);
	
	var x = 1910;
	for (var i = 10; i >= 1; i--) {
		if (i == 1 || i == 2 || i == 3) {
			var y = 950;
			var animation = "move_" + 1;
		} else if (i == 4 || i == 5) {
			var y = 875;
			var animation = "move_" + 2;
		} else if (i == 6 || i == 7) {
			var y = 737;
			var animation = "move_" + 3;
		} else if (i == 8 || i == 9) {
			var y = 577;
			var animation = "move_" + 4;
		} else if (i == 10) {
			var y = 409;
			var animation = "move_" + 5;
		}
		await delay(0.30);
		
		document.getElementById("man_" + i).style.width = "40px";
		if (result_position == i) {
			document.getElementById("man_" + i).src = "./assets/images/man_2.png";
		} else {
			document.getElementById("man_" + i).src = "./assets/images/man_1.png";
		}
		document.getElementById("man_" + i).style.zIndex = "2";
		document.getElementById("man_" + i).style.animation = animation + " 0.8s forwards";
		x -= 4;
	}
}
