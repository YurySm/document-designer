const initVat = (number) => {

    let value = Math.trunc(+number * 20 / 120)

    let penny = Math.round(((+number * 20 / 120) - value).toFixed(2) * 100)

    return [value, penny]
}

export default initVat