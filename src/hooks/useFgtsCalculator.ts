export function useFgtsCalculator() {
  function calcularSaque(valor: number): number {
    if (valor <= 500) return Number((valor * 0.5).toFixed(2));
    if (valor <= 1000) return Number((valor * 0.4 + 50).toFixed(2));
    if (valor <= 5000) return Number((valor * 0.3 + 150).toFixed(2));
    if (valor <= 10000) return Number((valor * 0.2 + 650).toFixed(2));
    if (valor <= 15000) return Number((valor * 0.15 + 1150).toFixed(2));
    if (valor <= 20000) return Number((valor * 0.1 + 1900).toFixed(2));
    return Number((valor * 0.05 + 2900).toFixed(2));
  }

  return { calcularSaque };
}
