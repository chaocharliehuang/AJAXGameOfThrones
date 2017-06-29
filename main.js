$("img").click(function(e) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput;
    url += "&&appid=bcd49dc0a841151f291b4e69279dfb71";
    $.get(url, function(res) {
        
        $('.weather-data').html(infoHTML);
    }, 'json');
});

// 