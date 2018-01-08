rm(list=ls())

library(Boruta)
library(lubridate)
library(randomForest)
library(readr)

download.file("https://raw.githubusercontent.com/nkmumis103/restaurant/master/inst/res/test.csv", destfile="train.csv")

add_features = function (data) {
  data$CityGroup = as.factor(data[["City Group"]])
  data$OpenDate = mdy(data[["Open Date"]])
  data$YearsSince1900 = as.numeric(data$OpenDate-mdy("01/01/1900"), units="days")/365
  return(data)
}

features = c(names(train)[c(-1, -2, -3, -4, -5, -43)], "CityGroup", "YearsSince1900")

train = add_features(train)
test = add_features(test)
train$Revenue = train$revenue / 1e6
train$LogRevenue = log(train$revenue)

boruta = Boruta(train[,features], train$LogRevenue, doTrace=2)
important_features = features[boruta$finalDecision!="Rejected"]

res_model = randomForest(train[,important_features], train$LogRevenue, importance=FALSE, replace=FALSE,ntree=20000, nPerm=1)
save(res_model,file="D:/input/TFI/res_model.rda")
