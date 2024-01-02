const prizeDraw = function(number){
    numberDraw=(Math.random()*10+1).toFixed()
    return number==numberDraw? `Parabéns! O número sorteado foi ${numberDraw} e o seu é ${number}`:`Que pena! O número sorteado foi ${numberDraw} e o seu é ${number}`
}

console.log(prizeDraw(3))