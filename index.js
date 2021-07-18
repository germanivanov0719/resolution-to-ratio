function convert() {
    let x = document.getElementById("ResX").value;
    let y = document.getElementById("ResY").value;
    let res = document.getElementById("ResultValue");
    res.style.color = "black";
    if (x % 1 != 0 || y % 1 != 0) {
        res.textContent = "One or more values are not integers!";
        res.style.color = "red";
        
    }
    if (x == 0 || y == 0) {
        res.textContent = "One or more values are empty!";
        res.style.color = "red";
    }
} 