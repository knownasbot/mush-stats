/**
 * Formata um número para uma string contendo as horas.
 */
export default function formatHours(value = 0) {
    return Math.floor(value / 60 / 60) + "h";
}
