var value;
var ratingValues = document.getElementById("rating-container").children;
for (var i=0;i<5;i++) {
    ratingValues[i].onclick = function (){
        value = this.innerHTML;
        document.getElementById("rating-value").innerHTML=value;

    }
}

document.getElementById("submit-container").onclick = function ()
{
    document.getElementById("rating-section").style.display = "none";
    document.getElementById("thank-you-section").style.display="flex";
}


