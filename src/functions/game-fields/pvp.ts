import getRate from "../getRate";

/**
 * Retorna o texto do número em tempo (`10s`, `5m`, ...)
 * @param n Número.
 */
function getTimeText(n = 0): string {
    let text = "";

    if (n < 60) {
        text = n + "s";
    } else {
        text = Math.floor(n / 60) + "m";
    }

    return text;
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export default function getPvPFields(stats: Record<string, any>): GameStats {
    const totalKills =
        (stats?.pvp?.arena_kills ?? 0) + (stats?.pvp?.fps_kills ?? 0);
    const totalDeaths =
        (stats?.pvp?.deaths ?? 0) + (stats?.pvp?.fps_deaths ?? 0);

    return {
        id: "pvp",
        title: "PvP",
        icon: "sword.webp",
        fields: [
            {
                name: "Vítimas",
                value: totalKills,
            },
            {
                name: "Mortes",
                value: totalDeaths,
            },
            {
                name: "Moedas",
                value: stats?.pvp?.coins ?? 0,
            },
        ],
        details: [
            {
                title: "",
                fields: [
                    {
                        name: "Moedas",
                        value: stats?.pvp?.coins ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: totalKills,
                    },
                    {
                        name: "Mortes",
                        value: totalDeaths,
                    },
                    {
                        name: "K/D",
                        value: getRate(totalKills, totalDeaths),
                    },
                ],
            },
            {
                title: "Arena",
                fields: [
                    {
                        name: "Vítimas",
                        value: stats?.pvp?.arena_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.pvp?.arena_deaths ?? 0,
                    },
                    {
                        name: "Killstreak",
                        value: stats?.pvp?.arena_killstreak ?? 0,
                    },
                    {
                        name: "Killstreak Recorde",
                        value: stats?.pvp?.arena_max_killstreak ?? 0,
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.pvp?.arena_kills,
                            stats?.pvp?.arena_deaths
                        ),
                    },
                ],
            },
            {
                title: "FPS",
                fields: [
                    {
                        name: "Vítimas",
                        value: stats?.pvp?.fps_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.pvp?.fps_deaths ?? 0,
                    },
                    {
                        name: "Killstreak",
                        value: stats?.pvp?.fps_killstreak ?? 0,
                    },
                    {
                        name: "Killstreak Recorde",
                        value: stats?.pvp?.fps_max_killstreak ?? 0,
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.pvp?.fps_kills,
                            stats?.pvp?.fps_deaths
                        ),
                    },
                ],
            },
            {
                title: "MLG",
                fields: [
                    {
                        name: "Acertos",
                        value: stats?.pvp?.mlg_hits ?? 0,
                    },
                    {
                        name: "Erros",
                        value: stats?.pvp?.mlg_misses ?? 0,
                    },
                    {
                        name: "Sequência no Nivel I",
                        value: stats?.pvp?.mlg_streak_1 ?? 0,
                    },
                    {
                        name: "Sequência no Nivel II",
                        value: stats?.pvp?.mlg_streak_2 ?? 0,
                    },
                    {
                        name: "Sequência no Nivel III",
                        value: stats?.pvp?.mlg_streak_3 ?? 0,
                    },
                    {
                        name: "Sequência no Nivel IV",
                        value: stats?.pvp?.mlg_streak_4 ?? 0,
                    },
                ],
            },
            {
                title: "Desafios: Drops",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.pvp?.challenges_drops_plays ?? 0,
                    },
                    {
                        name: "Maior Dano",
                        value:
                            stats?.pvp?.challenges_drops_max_damage_taken ?? 0,
                    },
                    {
                        name: "Tempo Recorde",
                        value: getTimeText(
                            stats?.pvp?.challenges_drops_max_play_time
                        ),
                    },
                    {
                        name: "Sopas Usadas",
                        value:
                            stats?.pvp?.challenges_drops_total_soups_used ?? 0,
                    },
                ],
            },
            {
                title: "Desafios: Fácil",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.pvp?.challenges_easy_plays ?? 0,
                    },
                    {
                        name: "Maior Dano",
                        value:
                            stats?.pvp?.challenges_easy_max_damage_taken ?? 0,
                    },
                    {
                        name: "Tempo Recorde",
                        value: getTimeText(
                            stats?.pvp?.challenges_easy_max_play_time
                        ),
                    },
                    {
                        name: "Sopas Usadas",
                        value:
                            stats?.pvp?.challenges_easy_total_soups_used ?? 0,
                    },
                ],
            },
            {
                title: "Desafios: Médio",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.pvp?.challenges_medium_plays ?? 0,
                    },
                    {
                        name: "Maior Dano",
                        value:
                            stats?.pvp?.challenges_medium_max_damage_taken ?? 0,
                    },
                    {
                        name: "Tempo Recorde",
                        value: getTimeText(
                            stats?.pvp?.challenges_medium_max_play_time
                        ),
                    },
                    {
                        name: "Sopas Usadas",
                        value:
                            stats?.pvp?.challenges_medium_total_soups_used ?? 0,
                    },
                ],
            },
            {
                title: "Desafios: Difícil",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.pvp?.challenges_hard_plays ?? 0,
                    },
                    {
                        name: "Maior Dano",
                        value:
                            stats?.pvp?.challenges_hard_max_damage_taken ?? 0,
                    },
                    {
                        name: "Tempo Recorde",
                        value: getTimeText(
                            stats?.pvp?.challenges_hard_max_play_time
                        ),
                    },
                    {
                        name: "Sopas Usadas",
                        value:
                            stats?.pvp?.challenges_hard_total_soups_used ?? 0,
                    },
                ],
            },
            {
                title: "Desafios: Extremo",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.pvp?.challenges_extreme_plays ?? 0,
                    },
                    {
                        name: "Maior Dano",
                        value:
                            stats?.pvp?.challenges_extreme_max_damage_taken ??
                            0,
                    },
                    {
                        name: "Tempo Recorde",
                        value: getTimeText(
                            stats?.pvp?.challenges_extreme_max_play_time
                        ),
                    },
                    {
                        name: "Sopas Usadas",
                        value:
                            stats?.pvp?.challenges_extreme_total_soups_used ??
                            0,
                    },
                ],
            },
            {
                title: "Desafios: Variado",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.pvp?.challenges_varying_plays ?? 0,
                    },
                    {
                        name: "Maior Dano",
                        value:
                            stats?.pvp?.challenges_varying_max_damage_taken ??
                            0,
                    },
                    {
                        name: "Tempo Recorde",
                        value: getTimeText(
                            stats?.pvp?.challenges_varying_max_play_time
                        ),
                    },
                    {
                        name: "Sopas Usadas",
                        value:
                            stats?.pvp?.challenges_varying_total_soups_used ??
                            0,
                    },
                ],
            },
            {
                title: "Desafios: Wither",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.pvp?.challenges_whiter_plays ?? 0,
                    },
                    {
                        name: "Maior Dano",
                        value:
                            stats?.pvp?.challenges_whiter_max_damage_taken ?? 0,
                    },
                    {
                        name: "Tempo Recorde",
                        value: getTimeText(
                            stats?.pvp?.challenges_whiter_max_play_time
                        ),
                    },
                    {
                        name: "Sopas Usadas",
                        value:
                            stats?.pvp?.challenges_whiter_total_soups_used ?? 0,
                    },
                ],
            },
        ],
    };
}
