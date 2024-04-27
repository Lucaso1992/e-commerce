const words = ["CANAL", "HOLA"];
const phoneNumbers = ["+1522625234", "+154652321642", "+154264125"];

const wordsToNumbers = (words) => {
    const numerosConvertidos = words.map(word => {
        const letters = word.split("");
        const numbersArray = [];
        for (let i = 0; i < letters.length; i++) {
            if (letters[i] === "A" || letters[i] === "B" || letters[i] === "C") {
                numbersArray.push("2");
            } else if (letters[i] === "D" || letters[i] === "E" || letters[i] === "F") {
                numbersArray.push("3");
            } else if (letters[i] === "G" || letters[i] === "H" || letters[i] === "I") {
                numbersArray.push("4");
            } else if (letters[i] === "J" || letters[i] === "K" || letters[i] === "L") {
                numbersArray.push("5");
            } else if (letters[i] === "M" || letters[i] === "N" || letters[i] === "O") {
                numbersArray.push("6");
            } else if (letters[i] === "P" || letters[i] === "Q" || letters[i] === "R" || letters[i] === "S") {
                numbersArray.push("7");
            } else if (letters[i] === "T" || letters[i] === "U" || letters[i] === "V") {
                numbersArray.push("8");
            } else {
                numbersArray.push("9");
            }
        }
        return numbersArray.join("");
    });
    return numerosConvertidos;
}

const buscarNumerosEnPhoneNumbers = (numeros, phoneNumbers) => {
    const numerosEncontrados = [];
    for (let i = 0; i < phoneNumbers.length; i++) {
        for (let j = 0; j < numeros.length; j++) {
            if (phoneNumbers[i].includes(numeros[j])) {
                numerosEncontrados.push(phoneNumbers[i])
            }
        }
    }
    return numerosEncontrados;
}
const numerosConvertidos = wordsToNumbers(words);
console.log("Números convertidos:", numerosConvertidos);

const numerosEncontrados = buscarNumerosEnPhoneNumbers(numerosConvertidos, phoneNumbers);
console.log("Números que contienen ambos números convertidos:", numerosEncontrados);


