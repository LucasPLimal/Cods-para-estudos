function primo() {
    let n=document.getElementById("numero").value;

    for (let i = 2; i <= n; i++) {
        if (n % i == 0) return true
        else {
            return false}
    }

        if (true) {
            document.getElementById("resultado").innerHTML = `O numero ${n} primo <br><br> Números primos até ${n}: ${primo(i)}`
        }
        if (false) {
            document.getElementById("resultado").innerHTML = `O numero ${n} não é primo <br><br> Números primos até ${n}: ${primo(i)}`
        }
}