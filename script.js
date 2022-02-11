hourDisplay();

var momentDate = moment().format('LL');
$("#currentDay").append(momentDate);


function hourDisplay() {
    var momentHour = moment().hour();
    var nine = $("#nineText");
    var ten = $("#tenText");
    var eleven = $("#elevenText");
    var twelve = $("#twelveText");
    var thirteen = $("#thirteenText");
    var fourteen = $("#fourteenText");
    var fifteen = $("#fifteenText");
    var sixteen = $("#sixteenText");
    var seventeen = $("#seventeenText");

    if (momentHour === 9) {
        nine.removeClass("past");
        nine.removeClass("future");
        nine.addClass("present");
    } else if (momentHour < 9){
        nine.removeClass("present");
        nine.removeClass("past");
        nine.addClass("future");
    } else if (momentHour > 9){
        nine.removeClass("future");
        nine.removeClass("present");
        nine.addClass("past");
    };
    if (momentHour === 10) {
        ten.removeClass("past");
        ten.removeClass("future");
        ten.addClass("present");
    } else if (momentHour < 10){
        ten.removeClass("present");
        ten.removeClass("past");
        ten.addClass("future");
    } else if (momentHour > 10){
        ten.removeClass("future");
        ten.removeClass("present");
        ten.addClass("past");
    };
    if (momentHour === 11) {
        eleven.removeClass("past");
        eleven.removeClass("future");
        eleven.addClass("present");
    } else if (momentHour < 11){
        eleven.removeClass("present");
        eleven.removeClass("past");
        eleven.addClass("future");
    } else if (momentHour > 11){
        eleven.removeClass("future");
        eleven.removeClass("present");
        eleven.addClass("past");
    };
    if (momentHour === 12) {
        twelve.removeClass("past");
        twelve.removeClass("future");
        twelve.addClass("present");
    } else if (momentHour < 12){
        twelve.removeClass("present");
        twelve.removeClass("past");
        twelve.addClass("future");
    } else if (momentHour > 12){
        twelve.removeClass("future");
        twelve.removeClass("present");
        twelve.addClass("past");
    };
    if (momentHour === 13) {
        thirteen.removeClass("past");
        thirteen.removeClass("future");
        thirteen.addClass("present");
    } else if (momentHour < 13){
        thirteen.removeClass("present");
        thirteen.removeClass("past");
        thirteen.addClass("future");
    } else if (momentHour > 13){
        thirteen.removeClass("future");
        thirteen.removeClass("present");
        thirteen.addClass("past");
    };
    if (momentHour === 14) {
        fourteen.removeClass("past");
        fourteen.removeClass("future");
        fourteen.addClass("present");
    } else if (momentHour < 14){
        fourteen.removeClass("present");
        fourteen.removeClass("past");
        fourteen.addClass("future");
    } else if (momentHour > 14){
        fourteen.removeClass("future");
        fourteen.removeClass("present");
        fourteen.addClass("past");
    };
    if (momentHour === 15) {
        fifteen.removeClass("past");
        fifteen.removeClass("future");
        fifteen.addClass("present");
    } else if (momentHour < 15){
        fifteen.removeClass("present");
        fifteen.removeClass("past");
        fifteen.addClass("future");
    } else if (momentHour > 15){
        fifteen.removeClass("future");
        fifteen.removeClass("present");
        fifteen.addClass("past");
    };
    if (momentHour === 16) {
        sixteen.removeClass("past");
        sixteen.removeClass("future");
        sixteen.addClass("present");
    } else if (momentHour < 16){
        sixteen.removeClass("present");
        sixteen.removeClass("past");
        sixteen.addClass("future");
    } else if (momentHour > 16){
        sixteen.removeClass("future");
        sixteen.removeClass("present");
        sixteen.addClass("past");
    };
    if (momentHour === 17) {
        seventeen.removeClass("past");
        seventeen.removeClass("future");
        seventeen.addClass("present");
    } else if (momentHour < 17){
        seventeen.removeClass("present");
        seventeen.removeClass("past");
        seventeen.addClass("future");
    } else if (momentHour > 17){
        seventeen.removeClass("future");
        seventeen.removeClass("present");
        seventeen.addClass("past");
    }
}
