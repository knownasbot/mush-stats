import formatHours from "../formatHours";
import getRate from "../getRate";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export default function getDuelsFields(stats: Record<string, any>): GameStats {
    const totalGames =
        (stats?.duels?.boxing_played ?? 0) +
        (stats?.duels?.combo_played ?? 0) +
        (stats?.duels?.gapple_played ?? 0) +
        (stats?.duels?.gladiator_played ?? 0) +
        (stats?.duels?.lava_played ?? 0) +
        (stats?.duels?.no_debuff_played ?? 0) +
        (stats?.duels?.soup_played ?? 0) +
        (stats?.duels?.uhc_played ?? 0);
    const totalKills =
        (stats?.duels?.boxing_kills ?? 0) +
        (stats?.duels?.combo_kills ?? 0) +
        (stats?.duels?.gapple_kills ?? 0) +
        (stats?.duels?.gladiator_kills ?? 0) +
        (stats?.duels?.lava_kills ?? 0) +
        (stats?.duels?.no_debuff_kills ?? 0) +
        (stats?.duels?.soup_kills ?? 0) +
        (stats?.duels?.uhc_kills ?? 0);
    const totalDeaths =
        (stats?.duels?.boxing_deaths ?? 0) +
        (stats?.duels?.combo_deaths ?? 0) +
        (stats?.duels?.gapple_deaths ?? 0) +
        (stats?.duels?.gladiator_deaths ?? 0) +
        (stats?.duels?.lava_deaths ?? 0) +
        (stats?.duels?.no_debuff_deaths ?? 0) +
        (stats?.duels?.soup_deaths ?? 0) +
        (stats?.duels?.uhc_deaths ?? 0);

    return {
        id: "duels",
        title: "Duels",
        icon: "sword.webp",
        fields: [
            {
                name: "Jogos",
                value: totalGames,
            },
            {
                name: "Vítimas",
                value: totalKills,
            },
            {
                name: "Mortes",
                value: totalDeaths,
            },
        ],
        details: [
            {
                title: "",
                fields: [
                    {
                        name: "Jogos",
                        value: totalGames,
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
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.duels),
                    },
                ],
            },
            {
                title: "Boxing",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.duels?.boxing_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.duels?.boxing_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.duels?.boxing_losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.duels?.boxing_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.duels?.boxing_deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.duels_boxing),
                    },
                    {
                        name: "Winstreak",
                        value: stats?.duels?.boxing_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.duels?.boxing_wins,
                            stats?.duels?.boxing_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.duels?.boxing_kills,
                            stats?.duels?.boxing_deaths
                        ),
                    },
                ],
            },
            {
                title: "No Debuff",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.duels?.no_debuff_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.duels?.no_debuff_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.duels?.no_debuff_losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.duels?.no_debuff_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.duels?.no_debuff_deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.duels_no_debuff),
                    },
                    {
                        name: "Winstreak",
                        value: stats?.duels?.no_debuff_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.duels?.no_debuff_wins,
                            stats?.duels?.no_debuff_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.duels?.no_debuff_kills,
                            stats?.duels?.no_debuff_deaths
                        ),
                    },
                ],
            },
            {
                title: "Sopa: Solo",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.duels?.soup_solo_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.duels?.soup_solo_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.duels?.soup_solo_losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.duels?.soup_solo_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.duels?.soup_solo_deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.duels_soup),
                    },
                    {
                        name: "Winstreak",
                        value: stats?.duels?.soup_solo_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.duels?.soup_solo_wins,
                            stats?.duels?.soup_solo_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.duels?.soup_solo_kills,
                            stats?.duels?.soup_solo_deaths
                        ),
                    },
                ],
            },
            {
                title: "Sopa: Duplas",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.duels?.soup_doubles_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.duels?.soup_doubles_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.duels?.soup_doubles_losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.duels?.soup_doubles_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.duels?.soup_doubles_deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value:
                            formatHours(stats?.play_time?.duels_soup_doubles) ??
                            0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.duels?.soup_doubles_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.duels?.soup_doubles_wins,
                            stats?.duels?.soup_doubles_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.duels?.soup_doubles_kills,
                            stats?.duels?.soup_doubles_deaths
                        ),
                    },
                ],
            },
            {
                title: "UHC: Solo",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.duels?.uhc_solo_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.duels?.uhc_solo_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.duels?.uhc_solo_losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.duels?.uhc_solo_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.duels?.uhc_solo_deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.duels_uhc),
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.duels?.uhc_solo_wins,
                            stats?.duels?.uhc_solo_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.duels?.uhc_solo_kills,
                            stats?.duels?.uhc_solo_deaths
                        ),
                    },
                ],
            },
            {
                title: "UHC: Duplas",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.duels?.uhc_doubles_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.duels?.uhc_doubles_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.duels?.uhc_doubles_losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.duels?.uhc_doubles_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.duels?.uhc_doubles_deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value:
                            formatHours(stats?.play_time?.duels_uhc_doubles) ??
                            0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.duels?.uhc_doubles_wins,
                            stats?.duels?.uhc_doubles_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.duels?.uhc_doubles_kills,
                            stats?.duels?.uhc_doubles_deaths
                        ),
                    },
                ],
            },
        ],
    };
}
