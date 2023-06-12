function compras(trabalho1, trabalho2) { 
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const manterSaudavel = !comprarSorvete;

    return {comprarSorvete, comprarTv50, manterSaudavel}
}

const produtosComprados = compras(true, false);

console.log(produtosComprados);
console.log(produtosComprados.comprarSorvete);