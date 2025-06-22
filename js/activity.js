$(document).ready(function () {
    $("td.activity-cell").css("cursor", "pointer");
    $("td.activity-cell").on("click", function () {
        $(this).toggleClass("selected");
    });
});