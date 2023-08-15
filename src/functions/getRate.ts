/**
 * Calcula uma proporção entre 2 parâmetros (win rate, K/D, ...).
 */
export default function getRate(a: number, b: number): number {
    return parseFloat(((a ?? 0) / (b ?? 1)).toFixed(2));
}
