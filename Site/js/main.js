function transmite() {
    let text = document.getElementById("intrebare").value;
    window.open("mailto:mihaiagustinn@gmail.com?subject=Intrebare&body=" + text);
}