var yr, temp;
function fun() {
    yr = parseInt(document.getElementById("year").value);
    if (yr) {
        temp = document.getElementById("leap");
        temp.style.display = "block";
        if ((yr % 4 == 0) && (yr % 100 != 0))
            document.getElementById("work").innerHTML = "a Leap year";
        else if (yr % 400 == 0)
            document.getElementById("work").innerHTML = "a Leap year";
        else
            document.getElementById("work").innerHTML = "not a Leap year";
    }
}