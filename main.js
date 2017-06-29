$.ajax({
      type: "POST",
      dataType: 'jsonp',
      success: function(response) {
        alert("success");
      },
      error: function(response) {
        console.log(JSON.stringify(response));
      }
    });

$(".houses img").click(function() {
    var houseID = $(this).attr("id");
    var url = "https://www.anapioficeandfire.com/api/houses/" + houseID;
    $.get(url, function(res) {
        console.log(res);
        var infoHTML = "<div class='info col-md-6'>";
        infoHTML += "<h3>House Details</h3>";
        infoHTML += "<p><b>Name:</b> " + res.name + "</p>";
        infoHTML += "<p><b>Words:</b> " + res.words + "</p>";
        infoHTML += "<p><b>Titles:</b> " + res.titles.join(', ') + "</p>";
        infoHTML += "</div>";
        $('.house-info').html(infoHTML);
        $('.house-info').hide();
        $('.house-info').fadeIn('slow');
    }, 'json');
});