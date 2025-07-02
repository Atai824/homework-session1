$(document).ready(function () {
    let selectedActivities = [];
    
    $("td").click(function() {
        var content = $(this).text();
        var columnIndex = $(this).index();
        var cliffName = $("table thead th").eq(columnIndex).text();
        var fullText = content + " at " + cliffName;

        if (content != "Not Available") {
            $(this).toggleClass("tdhighlight");

            if ($(this).hasClass("tdhighlight")) {
                selectedActivities.push(fullText);
            } else {
                selectedActivities = selectedActivities.filter(item => item !== fullText);
            }
            
            // Активируем/деактивируем кнопку
            $("#showSelectedBtn").prop("disabled", selectedActivities.length === 0);
        }
    });
    
    // Обработчик для кнопки показа модального окна
    $("#showSelectedBtn").click(function() {
        $("#modalActivitiesList").empty();
        
        if (selectedActivities.length > 0) {
            selectedActivities.forEach(function(activity) {
                $("#modalActivitiesList").append("<p>" + activity + "</p>");
            });
        } else {
            $("#modalActivitiesList").append("<p>No activities selected</p>");
        }
        
        $("#activitiesModal").modal("show");
    });
});