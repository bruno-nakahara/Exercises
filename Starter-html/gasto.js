let receitas = [150, 100, 100]
let despesas = [100, 100, 100]

function soma(contas) {
    let total = 0
    contas.map(conta => {
        total = total + conta
    })
    return total
}

function calculoGasto(receitas, despesas) {
    const receitaFamiliar = soma(receitas)
    const despesaFamiliar = soma(despesas)
    const gastoTotal = receitaFamiliar - despesaFamiliar

    if(gastoTotal > 0) {
        console.log(`Saldo: ${gastoTotal} - Positivo!`)
    } else if(gastoTotal < 0) {
        console.log(`Saldo: ${gastoTotal} - Negativo!`)
    } else if(gastoTotal == 0) {
        console.log(`Saldo: ${gastoTotal} - Zero!`)
    }
    return
}

calculoGasto(receitas, despesas)
