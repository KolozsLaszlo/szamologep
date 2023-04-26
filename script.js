function Torles() {
    document.getElementById("kijelzo").value=" ";
}

function display(value) {
    document.getElementById("kijelzo").value += value;
}

function szamol() {
    let a = document.getElementById("kijelzo").value;
    let b = eval(a);
    document.getElementById("kijelzo").value = b;

}