
import React from 'react';



function Token(){

return(
<>

<div ng-app="charts" ng-controller="MainCtrl">
  <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 contentBlock">
    <div id="chartdiv"></div>
  </div>
  </div>

<script src="https://www.amcharts.com/lib/3/pie.js"></script>
<script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.js"></script>

<script>
var app = angular.module("charts", []); app.controller("MainCtrl",
  function($scope) {"{"}
  $scope.entriesArray = [{"{"} id: 1, category: "adventure", value: 20 {"}"},
  {"{"} id: 2, category: "fantasy", value: 39 {"}"},{"{"} id: 3, category:
  "manga", value: 66 {"}"},{"{"} id: 4, category: "thriller", value: 9 {"}"}
  ]; AmCharts.makeChart("chartdiv", {"{"}
  type: "pie", angle: 12, balloonText: "[[title]]
  <br />
  <span style={{ fontSize: 14 }}>
    <b>[[value]]</b> ([[percents]]%)
  </span>
  ", depth3D: 6, adjustPrecision: true, percentPrecision: 0, radius: 100,
  startEffect: "easeOutSine", innerRadius: "40%", titleField: "category",
  valueField: "value", color: "#000000", backgroundColor: "#B1B1B1", colors:
  ["#4E598C", "#F9C784", "#FCAF58", "#FF8C42"], allLabels: [], balloon: {"{"}
  {"}"}, legend: {"{"}
  enabled: true, align: "center", markerType: "circle", color: "#000000",
  valueAlign: "left"
  {"}"}, titles: [{"{"}
  text: "Book registration", size: 15
  {"}"}
  ], dataProvider: $scope.entriesArray
  {"}"});
  {"}"});

</script>
</>

);


}   

export default Token;