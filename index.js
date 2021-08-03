let darkEnabled = true;
let darkAuto = true;

autoDarkMode();

function autoDarkMode() {
    if (!darkAuto) {
        return 0
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkEnabled = false;
        darkModeToggle();
    }
    else {
        darkEnabled = true;
        darkModeToggle();
    }
}

function convert() {
    abs = Math.abs;
    let x = abs(document.getElementById("ResX").value);
    let y = abs(document.getElementById("ResY").value);
    let res = document.getElementById("ResultValue");
    let more_info = document.getElementById("MoreInfo");
    console.log(x, y);
    more_info.textContent = "";
    if (res.textContent == "One or more values are empty or bigger than " + String(Number.MAX_VALUE) + '.') {
        res.textContent = "";
    }
    res.style.color = "black";
    if (x === 0 || y === 0) {
        res.textContent = "One or more values are empty or bigger than " + String(Number.MAX_VALUE) + '.';
        res.style.color = "red";
    }
    else if (x % 1 != 0 || y % 1 != 0) {
        res.textContent = "One or more values are not integers.";
        res.style.color = "red";
    }
    else {
        if (Math.min(x, y) > 100000000) {
            if (confirm("This might take a long time, and page would not respond suring the progress! Are you sure you want to continue?") == true) {
            }
            else {
                return 0;
            }
        }
        rat = reduce_fraction(x, y);
        res.textContent = String("Result: " + rat[0] + ":" + rat[1]);
        let eight_to_five = ["8:5", "5:8"];
        if (String(rat[0] + ':' + rat[1]) == "8:5" || String(rat[0] + ':' + rat[1]) == "5:8") {
            if (rat[0] == 8) {
                more_info.textContent = "(also known as 16:10)";
            }
            else {
                more_info.textContent = "(also known as 10:16)";
            }
        }
        else if (rat[0] == rat[1] == 1) {
            more_info.textContent = "(square)";
        }
        darkModeToggle();
        darkModeToggle();
    }
} 


function reduce_fraction(a, b) {
    let x = Math.min(a, b);
    while (x > 1) {
        x--;
        if (a % x == 0 && b % x == 0) {
            gcd = x;
            a = a / gcd;
            b = b / gcd;
            return [a, b]
        }
    }
    return [a, b]

}

function darkModeToggle(){
    console.log("Previous dark: ", darkEnabled, "\nSwitching the Mode...");
    darkEnabled = !darkEnabled;
    colors = ["#FFFFFF", "#121212"];
    if (!darkEnabled) {
        colors.reverse();
        document.getElementById("darkModeToggle").textContent = "Switch to Dark Mode";
    }
    else {
        document.getElementById("darkModeToggle").textContent = "Switch to Light Mode";
    }
    document.getElementById("body").style.backgroundColor = colors[1];
    let x = 0;
    font = document.getElementsByClassName("font");
    while (x < font.length)
    {
        font[x].style.color = colors[0];
        x += 1;
    }
    x = 0;
    border = document.getElementsByClassName("border");
    while (x < border.length) {
        border[x].style.backgroundColor = colors[1];
        x++;
    }

}

$(".inpResolution").keypress(function (event){
    if (event.keyCode == 13) {
        $("#Convert").click();
    }
});

setInterval(function () {
    autoDarkMode();
}, 500);








