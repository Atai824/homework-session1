$(document).ready(function () {
    $("td").click(function() {
        var content = $(this).text();

        if (content != "Not Available") {
            $(this).toggleClass("tdhighlight");

            var columnIndex = $(this).index();
            var cliffName = $("table thead th").eq(columnIndex).text();

            var fullText = content + " at " + cliffName;

            if($(this).hasClass("tdhighlight")) {
                $('#displaySelected').css("visibility","visible");
                $('#displaySelected').css("margin-top","2em");
                $('#result').append("<p>" + fullText + "</p>");

            } else {
                $('#result p:contains("' + fullText + '")').remove();
                if ($('#result').has('p').length == false) {
                    $('#displaySelected').css("visibility","hidden");
                    $('#displaySelected').css("margin-top","0");
                }
            }
        }
    });
});