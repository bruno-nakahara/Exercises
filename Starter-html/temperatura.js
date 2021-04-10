function calcurateCelsius(temperature) {
    const celsius = (temperature - 32) * 5 / 9
    return celsius
}

function calcurateFahrenheit(temperature) {
    const fahrenheit = temperature * 9 / 5 + 32
    return fahrenheit
}

function transform(degree) {
    const cExist = degree.toUpperCase().includes("C")
    const fExist = degree.toUpperCase().includes("F")
    
    const parseDegree = degree.slice(0, -1)
    const degreeInNumber = Number(parseDegree)

    if(cExist) {
        const temperatureInFahrenheit = calcurateFahrenheit(degreeInNumber)
        console.log(`Transformar ${parseDegree}°C em ${temperatureInFahrenheit.toFixed(2)}°F`)
    } else if(fExist) {
        const temperatureInCelsius = calcurateCelsius(degreeInNumber)
        console.log(`Transformar ${parseDegree}°F em ${temperatureInCelsius.toFixed(2)}°C`)
    } else {
        throw new Error("Valor Inválido!")
    }
    return  
}

try {
    transform("36.5C")
    transform("36.5c")
    transform("78.9F")
    transform("78.9Z")
} catch (error) {
    console.error(error)
}
