let idade = Math.floor(Math.random() * 100);

if (idade <= 13 ) {
    console.log(`É uma criança de ${idade} anos.`)
} else if ( idade > 13 && idade <= 18) {
    console.log(`É um adolescente e tem ${idade} anos.`)
} else if ( idade > 18 && idade <= 60) {
    console.log(`É um adulto e tem ${idade} anos.`)
} else {
    console.log(`É um idoso e tem ${idade} anos.`)
}