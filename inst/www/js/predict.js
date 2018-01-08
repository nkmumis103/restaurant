$(document).ready(function(){
	var Id,OpenDate,City,P1,P2,P6,P17,P18,P20,P21,P23,P25,P28,P32,P36;
	/* $(".pred").css("display", "none"); */
	$("#submit").on("click", function(){ 
	//disable the button to prevent multiple clicks
		get_val();
		$("#submit").attr("disabled", "disabled");
		//$("#submit_fut").attr("disabled", "disabled");
		/* if(Open==0){
			alert("當日店休!!");
			$("#output_sale").html(today+" 的預測銷售額為："+output.message+"(USD)");
		}
		else{ */
			/* $(".pred").css('height','100px'); */	
		if((Id=="")||(OpenDate=="")||(City=="")||(P1<0)||(P2<0)||(P6<0)||(P17<0)||(P18<0)||(P20<0)||(P21<0)||(P23<0)||(P25<0)||(P28<0)||(P32<0)||(P36<0)){
			alert("資料格式錯誤，請填入完整資料!!");
			$("#submit").removeAttr("disabled");
			//$("#submit_fut").removeAttr("disabled");
		}
		else{
			var req = ocpu.rpc("restaurant", {
				Id : Id,
				OpenDate : OpenDate,
				City : City,
				P1 : P1,
				P2 : P2,
				P6 : P6,
				P17 : P17,
				P18 : P18,
				P20 : P20,
				P21 : P21,
				P23 : P23,
				P25 : P25,
				P28 : P28,
				P32 : P32,
				P36 : P36
			}, function(output){
				$(".preddiv").css('height','170px');
				$(".pred").css("display", "none");
				$("#output_sale").css("display", "block");
				$("#output_sale").html("預測銷售額為："+output.message);
				//alert(output.message);
			});
			
			//if R returns an error, alert the error message
			req.fail(function(err){
				alert("資料格式錯誤，請填入完整資料!!");
				alert("Server error: " + req.responseText + "error：" + JSON.stringify(err));
			});
			
			//after request complete, re-enable the button 
			req.always(function(){
				$("#submit").removeAttr("disabled");
				//$("#submit_fut").removeAttr("disabled");
			});
		}
		//}
	});
	
	function get_val(){
		Id = Number($("#Id").val());
		OpenDate = String($("#OpenDate").val());
		City = String($("#City").val());
		P1 = Number($("#P1").val());
		P2 = Number($("#P2").val());
		P6 = Number($("#P6").val());
		P17 = Number($("#P17").val());
		P18 = Number($("#P18").val());
		P20 = Number($("#P20").val());
		P21 = Number($("#P21").val());
		P23 = Number($("#P23").val());
		P25 = Number($("#P25").val());
		P28 = Number($("#P28").val());
		P32 = Number($("#P32").val());
		P36 = Number($("#P36").val());
	}
});