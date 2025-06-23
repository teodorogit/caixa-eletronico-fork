function notasASeremSacadas(valorDesejado) {
    if (typeof valorDesejado !== 'number' || valorDesejado < 0) {
        return [];
      }

    let notasDisponiveis = [100, 50, 20, 10, 5, 2, 1]
    let saidaNotas = []
    let total = 0

    for (let i = 0; i < notasDisponiveis.length; i++) {
        if ((valorDesejado / notasDisponiveis[i]) >= 1) {
            while (total < valorDesejado && total + notasDisponiveis[i] <= valorDesejado) {
                if (total + notasDisponiveis[i] <= valorDesejado) {
                    saidaNotas.push(notasDisponiveis[i])
                }
                
                total = 0
                for (let i = 0; i < saidaNotas.length; i++) {
                    total += saidaNotas[i];
                }
            }
        }
    }

    return saidaNotas
}

export default notasASeremSacadas;