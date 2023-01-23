function delta(a, b, c)
{
    return (b**2 - 4 * a * c)
}


function bhaskara(a, b, c)
{
    let x1 = ((-b + Math.sqrt(delta(a, b, c))) / 2 * a).toFixed(2)
    let x2 = ((-b - Math.sqrt(delta(a, b, c))) / 2 * a).toFixed(2)
    return [x1, x2]
}


function calculate()
{
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    let c = document.getElementById("c").value

    if (a == 0 || b == 0 || c == 0)
    {
        alert("all values must be different than 0")
    }
    else
    {
        let result = bhaskara(a, b, c)
        document.getElementById("result").innerHTML = `Result: X1 = ${result[0]}, X2 = ${result[1]}`
    }
}