function prepareData(a) {
    return new DataView(new ArrayBuffer(a));
}

var BotsNick = "";

asd();
function asd(){
	
	var msg = prepareData(5);
    msg.setUint8(0, 254);
    msg.setUint32(1, 5, true);
	for(var i = 0; i < 5; i++){
		console.log(msg.getUint8(i));
	}
	console.log("Buffer 1");
	msg = prepareData(5);
    msg.setUint8(0, 255);
    msg.setUint32(1, 154669603, true);
	for(var i = 0; i < 5; i++){
		console.log(msg.getUint8(i));
	}
	console.log();
	console.log();
	console.log();
	var name = "MeMez";
	var msg = prepareData(1 + 2 * name.length);
                msg.setUint8(0, 0);
                for(var i = 0; i < name.length; ++i) {msg.setUint16(1 + 2 * i, name.charCodeAt(i), true);}
                for(var i = 0; i < 1 + 2 * name.length; i++){
		        console.log(msg.getUint8(i));
	}
	console.log();
	console.log();
	console.log();
	var pingBuffer = prepareData(5);
			pingBuffer.setUint8(0, 90);
			pingBuffer.setUint32(1, 2200049715);
			for(var i = 0; i < 5; i++){
		console.log(pingBuffer.getUint8(i));
	}
	console.log();
	var nickBuffer = prepareData(3 + 2 * BotsNick.length);
			nickBuffer.setUint8(0 ,0 ,1);
			for (var a = 0; a < BotsNick.length; ++a){
				nickBuffer.setUint16(1 + 2* a, 59 , 1);
				nickBuffer.setUint16(1 + 2 * (a + 1), BotsNick.charCodeAt(a), 1);
				
			}
			for(var i = 0; i < 3 + 2 * BotsNick.length; i++){
		console.log(nickBuffer.getUint8(i));
	}
}