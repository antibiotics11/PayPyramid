function view_contents(client_pay) {
	
	if (client_pay) {
		if (client_pay <= 0 || isNaN(client_pay)) {
			alert("정확한 값을 입력하세요.");
			
			return 0;
		}
		document.getElementById('input_box').style.display = "none";
		document.getElementById('result_box').style.display = "block";
		var client_position = get_position(client_pay)
		document.getElementById('client_position').innerHTML = client_position;
		setTimeout(function() { move_img(client_pay); }, 100);
	} else {
		alert("월급을 입력하세요.");
		
		return 0;
	}
}

function get_position(client_pay) {
	
	var client_position;
	if (client_pay < 85) {
		client_position = 100;
	} else if (85 <= client_pay && client_pay < 150) {
		client_position = 83.7;
	} else if (150 <= client_pay && client_pay < 250) {
		client_position = 72.5;
	} else if (250 <= client_pay && client_pay < 350) {
		client_position = 43.6;
	} else if (350 <= client_pay && client_pay < 450) {
		client_position = 28.2;
	} else if (450 <= client_pay && client_pay < 550) {
		client_position = 18.9;
	} else if (550 <= client_pay && client_pay < 650) {
		client_position = 12.8;
	} else if (650 <= client_pay && client_pay < 800) {
		client_position = 8.5;
	} else if (800 <= client_pay && client_pay < 1000) {
		client_position = 4.5;
	} else if (1000 <= client_pay) {
		client_position = 2.2;
	}
	
	return client_position;
}