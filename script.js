function addValue(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculate() {
    let expression = document.getElementById("display").value;
    try {
        if (expression === "") {
            return;
        }
        let result = Function(
            '"use strict"; return (' + expression + ')'
        )();
        document.getElementById("display").value =
            Number.isFinite(result) ? result : "Error";

    } catch {
        document.getElementById("display").value = "Error";
    }
}