hourDisplay();

//Pull Date from moment.js and Place Date in Header
var momentDate = moment().format('LL');
$("#currentDay").append(momentDate);

//Past Present and Future Display and Save Button Functionality
function hourDisplay() {
    //Pull Hour from moment.js
    var momentHour = moment().hour();
    //Variables for Text Areas
    var nine = $("#nineText");
    var ten = $("#tenText");
    var eleven = $("#elevenText");
    var twelve = $("#twelveText");
    var thirteen = $("#thirteenText");
    var fourteen = $("#fourteenText");
    var fifteen = $("#fifteenText");
    var sixteen = $("#sixteenText");
    var seventeen = $("#seventeenText");

    //Save Button Click Functions
    $("#saveBtn9").on("click", function () {
        var hour9 = ("0900");
        var nineTextArea = nine.val();
        localStorage.setItem(hour9, nineTextArea);
        console.log(hour9, nineTextArea);
    });
    $("#saveBtn10").on("click", function () {
        var hour10 = ("1000");
        var tenTextArea = ten.val();
        localStorage.setItem(hour10, tenTextArea);
        console.log(hour10, tenTextArea);
    });
    $("#saveBtn11").on("click", function () {
        var hour11 = ("1100");
        var elevenTextArea = eleven.val();
        localStorage.setItem(hour11, elevenTextArea);
        console.log(hour11, elevenTextArea);
    });
    $("#saveBtn12").on("click", function () {
        var hour12 = ("1200");
        var twelveTextArea = twelve.val();
        localStorage.setItem(hour12, twelveTextArea);
        console.log(hour12, twelveTextArea);
    });
    $("#saveBtn13").on("click", function () {
        var hour13 = ("1300");
        var thirteenTextArea = thirteen.val();
        localStorage.setItem(hour13, thirteenTextArea);
        console.log(hour13, thirteenTextArea);
    });
    $("#saveBtn14").on("click", function () {
        var hour14 = ("1400");
        var fourteenTextArea = fourteen.val();
        localStorage.setItem(hour14, fourteenTextArea);
        console.log(hour14, fourteenTextArea);
    });
    $("#saveBtn15").on("click", function () {
        var hour15 = ("1500");
        var fifteenTextArea = fifteen.val();
        localStorage.setItem(hour15, fifteenTextArea);
        console.log(hour15, fifteenTextArea);
    });
    $("#saveBtn16").on("click", function () {
        var hour16 = ("1600");
        var sixteenTextArea = sixteen.val();
        localStorage.setItem(hour16, sixteenTextArea);
        console.log(hour16, sixteenTextArea);
    });
    $("#saveBtn17").on("click", function () {
        var hour17 = ("1700");
        var seventeenTextArea = seventeen.val();
        localStorage.setItem(hour17, seventeenTextArea);
        console.log(hour17, seventeenTextArea);
    });

    //Add Classes Depending on Hour
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


