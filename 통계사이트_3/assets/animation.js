function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

function cal_client_pay(client_pay) {
	if (client_pay >= 1000) {
		return 10;
	} else {
		client_position = (client_pay / 100);
		return parseInt(client_position);
	}
}

async function move_img(client_pay) {
	client_position = cal_client_pay(client_pay);
	var x = 1910;
	var y = 0;
	for (var i = 10; i >= 1; i--) {
		if (i == 1 || i == 2 || i == 3) {
			y = 950;
			animation = "move_" + 1;
		} else if (i == 4 || i == 5) {
			y = 875;
			animation = "move_" + 2;
		} else if (i == 6 || i == 7) {
			y = 737;
			animation = "move_" + 3;
		} else if (i == 8 || i == 9) {
			y = 577;
			animation = "move_" + 4;
		} else if (i == 10) {
			y = 409;
			animation = "move_" + 5;
		}
		await delay(0.35);
		
		document.getElementById("moving_man_" + i).style.width = "40px";
		if (client_position == i) {
			document.getElementById("moving_man_" + i).src = "./assets/images/man_2.png";
		} else {
			document.getElementById("moving_man_" + i).src = "./assets/images/man_1.png";
		}
		document.getElementById("moving_man_" + i).style.zIndex = "2";
		document.getElementById("moving_man_" + i).style.animation = animation + " 1.8s forwards";
		x -= 4;
	}
}