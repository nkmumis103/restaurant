restaurant = function(Id,OpenDate,City,P1,P2,P6,P17,P18,P20,P21,P23,P25,P28,P32,P36){

  OpenDate=as.Date(OpenDate)
  year=as.integer(format(OpenDate, "%Y"))
  YearsSince1900 = as.numeric(year - 1900)

  #input=data.frame(P1,P2,P6,P17,P18,P20,P21,P23,P25,P28,P32,P36,YearsSince1900)

  P1=as.integer(P1)
  P6=as.integer(P6)
  P17=as.integer(P17)
  P18=as.integer(P18)
  P20=as.integer(P20)
  P21=as.integer(P21)
  P23=as.integer(P23)
  P25=as.integer(P25)
  P32=as.integer(P32)
  P36=as.integer(P36)

  P2=as.numeric(P2)
  P28=as.numeric(P28)
  YearsSince1900=as.numeric(YearsSince1900)

  important_input = c(P1,P2,P6,P17,P18,P20,P21,P23,P25,P28,P32,P36,YearsSince1900)

  newdata = exp(predict(res_model, important_input))


  list(
    message = newdata
  )
}



#restaurant_fut = function(Id,OpenDate,City,CityGroup,Type,P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,
#                          P21,P22,P23,P24,P25,P26,P27,P28,P29,P30,P31,P32,P33,P34,P35,P36,P37){

#}
