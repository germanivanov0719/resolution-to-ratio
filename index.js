function convert() {
    let x = document.getElementById("ResX").value;
    let y = document.getElementById("ResY").value;
    let res = document.getElementById("ResultValue");
    res.style.color = "black";
    if (x == 0 || y == 0) {
        res.textContent = "One or more values are empty.";
        res.style.color = "red";
    }
    else if (x % 1 != 0 || y % 1 != 0) {
        res.textContent = "One or more values are not integers.";
        res.style.color = "red";
        
    }
    else {
        rat = reduce_fraction(x, y)
        res.textContent = String("Result: " + rat[0] + ":" + rat[1]);
        let eight_to_five = ["8:5", "5:8"];
        if (String(rat[0] + ':' + rat[1]) == "8:5" || String(rat[0] + ':' + rat[1]) == "5:8") {
            if (rat[0] == 8) {
                res.textContent += "\n(also known as 16:10)";
            }
            else {
                res.textContent += "\n(also known as 10:16)";
            }
        }
    }
} 

function reduce_fraction(a, b) {
    let x;
    if (a > b) {
        x = a;
    }
    else {
        x = b;
    }
    while (true) {
        x--;
        if (a % x == 0 && b % x == 0) {
            gcd = x;
            a = a / gcd;
            b = b / gcd;
            return [a, b]
        }
    }
}
