function hari() {
    k = ""
    for (i = 0; i < 7; i++) {
        j = document.getElementById("hari" + i)
        if (j.checked == true)
            k = k + j.value + ", "
    }
    document.getElementById("hari").value = k
}
