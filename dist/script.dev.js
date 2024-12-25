"use strict";

var currentDateParagraph = document.getElementById("current-date");
var dateOptionsSelectElement = document.getElementById("date-options");
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var hours = date.getHours();
var minutes = date.getMinutes();
var formattedDate = "".concat(month, "-").concat(day, "-").concat(year, " ").concat(hours, " Hours ").concat(minutes, " Minutes");
currentDateParagraph.textContent = formattedDate;
dateOptionsSelectElement.addEventListener("change", function () {});