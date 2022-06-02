function numerosAleatorios(cantidad) {
    const numeros = new Map();
    for (let i = 0; i < cantidad; i++) {
        const azar = Math.floor(Math.random() * 1000) +1;
        const existencia = numeros.get(azar) ?? 0;
        numeros.set(azar, existencia+1);
    }
    return Array.from(numeros).sort((x,y)=>x[0]-y[0]).map(elemento=>{return {numero:elemento[0],veces_que_salio:elemento[1]}});
}

process.on("message", cantidad => {
    const resultado = numerosAleatorios(cantidad);
    process.send(resultado);
    process.exit();
})