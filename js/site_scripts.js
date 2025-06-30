// JavaScript for the bottom pictures
var partners = []; // To save <img> tags
var fileNames = []; // File titles
var imageList = []; // HTML line with <li>
var image;
var openList = "<li class='partner'>";
var closeList = "</li>";
    for (var i = 0; i < 6; i++) {
        fileNames.push("partner-" + [
            "bustour",
            "cabinrental",
            "campingadv",
            "collegetours",
            "rentalbike",
            "tourgroup"
][i]);
partners.push("<img src='partners/" + fileNames[i] + ".png' alt='Partners'>");
image = openList + partners[i] + closeList;
imageList.push(image);
}
document.getElementById("partners").innerHTML = imageList.join('');
