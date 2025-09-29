var wekkdays;
(function (wekkdays) {
    wekkdays[wekkdays["Monday"] = 0] = "Monday";
    wekkdays[wekkdays["Tuesday"] = 1] = "Tuesday";
    wekkdays[wekkdays["Wednesday"] = 2] = "Wednesday";
    wekkdays[wekkdays["Thursday"] = 3] = "Thursday";
    wekkdays[wekkdays["Friday"] = 4] = "Friday";
    wekkdays[wekkdays["Saturday"] = 5] = "Saturday";
    wekkdays[wekkdays["Sunday"] = 6] = "Sunday";
})(wekkdays || (wekkdays = {}));
var day = wekkdays.Friday;
console.log(wekkdays[day]);
