$(document).ready(function(){
	var Store,DayOfWeek,today,Promo,Open,SchoolHoliday,StoreType,Assortment,CompetitionDistance,CompetitionOpenSinceYear,CompetitionOpenSinceMonth,Promo2,Promo2SinceYear,Promo2SinceWeek,PromoInterval,best_Promo,best_SchoolHoliday,best_Promo2;
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
		if((Id=="")||(OpenDate=="")||(City=="")||(Type=="")||(P1<0)||(P2<0)||(P3<0)||(P4<0)||(P5<0)||(P6<0)||(P7<0)||(P8<0)||(P9<0)||(P10<0)||(P11<0)||(P12<0)||(P13<0)||(P14<0)||(P15<0)||(P16<0)||(P17<0)||(P18<0)||(P19<0)||(P20<0)||(P21<0)||(P22<0)||(P23<0)||(P24<0)||(P25<0)||(P26<0)||(P27<0)||(P28<0)||(P29<0)||(P30<0)||(P31<0)||(P32<0)||(P33<0)||(P34<0)||(P35<0)||(P36<0)||(P37<0)){
			alert("資料格式錯誤，請填入完整資料!!");
			$("#submit").removeAttr("disabled");
			//$("#submit_fut").removeAttr("disabled");
		}
		else{
			var req = ocpu.rpc("restaurant", {
				Id : Id,
				OpenDate : OpenDate,
				City : City,
				CityGroup : CityGroup,
				Type : Type,
				P1 : P1,
				P2 : P2,
				P3 : P3,
				P4 : P4,
				P5 : P5,
				P6 : P6,
				P7 : P7,
				P8 : P8,
				P9 : P9,
				P10 : P10,
				P11 : P11,
				P12 : P12,
				P13 : P13,
				P14 : P14,
				P15 : P15,
				P16 : P16,
				P17 : P17,
				P18 : P18,
				P19 : P19,
				P20 : P20,
				P21 : P21,
				P22 : P22,
				P23 : P23,
				P24 : P24,
				P25 : P25,
				P26 : P26,
				P27 : P27,
				P28 : P28,
				P29 : P29,
				P30 : P30,
				P31 : P31,
				P32 : P32,
				P33 : P33,
				P34 : P34,
				P35 : P35,
				P36 : P36,
				P37 : P37,
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
	
	/*$("#submit_fut").on("click", function(){ 
		$("#submit").attr("disabled", "disabled");
		$("#submit_fut").attr("disabled", "disabled");
		get_val();
		
		if((Store=="")||(DayOfWeek=="")||(today=="")||(Promo=="")||(Open=="")||(SchoolHoliday=="")||(StoreType=="")||(Assortment=="")||(CompetitionDistance=="")||(CompetitionOpenSinceYear<1911)||(CompetitionOpenSinceMonth=="")||(CompetitionOpenSinceMonth>9)||(Promo2=="")){
			alert("資料格式錯誤，請填入完整資料!!");
			//console.log(Store,DayOfWeek,today,Promo,Open,SchoolHoliday,StoreType,Assortment,CompetitionDistance,CompetitionOpenSinceYear,CompetitionOpenSinceMonth,Promo2);
			$("#submit").removeAttr("disabled");
			$("#submit_fut").removeAttr("disabled");
		}
		else{
			$(".preddiv").css('height','530px');
			$(".pred").css("display", "none");
			$("#output_plot").css("display", "block");
			var req = $("#output_plot").rplot("rossmann_fut", {
			  Store : Store,
			  DayOfWeek : DayOfWeek,
			  Date : today,
			  Promo : Promo,
			  Open : Open,
			  SchoolHoliday : SchoolHoliday,
			  StoreType : StoreType,
			  Assortment : Assortment,
			  CompetitionDistance : CompetitionDistance,
			  CompetitionOpenSinceYear : CompetitionOpenSinceYear,
			  CompetitionOpenSinceMonth : CompetitionOpenSinceMonth,
			  Promo2 : Promo2,
			  Promo2SinceYear : Promo2SinceYear,
			  Promo2SinceWeek : Promo2SinceWeek,
			  PromoInterval : PromoInterval
			 }).always(function(){
				 $("#submit").removeAttr("disabled");
				$("#submit_fut").removeAttr("disabled");
			}).fail(function(err){
				alert("資料格式錯誤，請填入完整資料!!");
				//alert("Server error: " + req.responseText + "error：" + JSON.stringify(err));
			});
		}
	});*/
	function get_val(){
		Id = Number($("#Id").val());
		OpenDate = String($("#OpenDate").val());
		City = String($("#City").val());
		if((City == "Adana")||(City == "Afyonkarahisar")||(City == "Antalya")||(City == "Aydın")||(City == "Balıkesir")||(City == "Batman")||(City == "Bilecik")||(City == "Bursa")||(City == "Canakkale")||(City == "Denizli")||(City == "Düzce")||(City == "Edirne")||(City == "Erzurum")||(City == "Eskişehir")||(City == "Gaziantep")||(City == "Giresun")||(City == "Kırıkkale")||(City == "Kars")||(City == "Kocaeli")||(City == "Konya")||(City == "Malatya")||(City == "Mardin")||(City == "Muğla")||(City == "Niğde")||(City == "Rize")||(City == "Sivas")||(City == "Tekirdağ")||(City == "Trabzon")||(City == "Zonguldak"))
		{
			CityGroup = String("Other");
		}
		else
		{
			CityGroup = String("BigCities");
		}		
		Type = String($("#Type").val());
		P1 = Number($("#P1").val());
		P2 = Number($("#P2").val());
		P3 = Number($("#P3").val());
		P4 = Number($("#P4").val());
		P5 = Number($("#P5").val());
		P6 = Number($("#P6").val());
		P7 = Number($("#P7").val());
		P8 = Number($("#P8").val());
		P9 = Number($("#P9").val());
		P10 = Number($("#P10").val());
		P11 = Number($("#P11").val());
		P12 = Number($("#P12").val());
		P13 = Number($("#P13").val());
		P14 = Number($("#P14").val());
		P15 = Number($("#P15").val());
		P16 = Number($("#P16").val());
		P17 = Number($("#P17").val());
		P18 = Number($("#P18").val());
		P19 = Number($("#P19").val());
		P20 = Number($("#P20").val());
		P21 = Number($("#P21").val());
		P22 = Number($("#P22").val());
		P23 = Number($("#P23").val());
		P24 = Number($("#P24").val());
		P25 = Number($("#P25").val());
		P26 = Number($("#P26").val());
		P27 = Number($("#P27").val());
		P28 = Number($("#P28").val());
		P29 = Number($("#P29").val());
		P30 = Number($("#P30").val());
		P31 = Number($("#P31").val());
		P32 = Number($("#P32").val());
		P33 = Number($("#P33").val());
		P34 = Number($("#P34").val());
		P35 = Number($("#P35").val());
		P36 = Number($("#P36").val());
		P37 = Number($("#P37").val());
	}
});