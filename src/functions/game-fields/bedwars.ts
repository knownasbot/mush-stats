import formatHours from "../formatHours";
import getRate from "../getRate";

export default function getBedWarsFields(
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    stats: Record<string, any>
): GameStats {
    return {
        id: "bw",
        title: "BedWars",
        icon: "bedwars.webp",
        fields: [
            {
                name: "Jogos",
                value: stats?.bedwars?.games_played ?? 0,
            },
            {
                name: "Vitórias",
                value: stats?.bedwars?.wins ?? 0,
            },
            {
                name: "Derrotas",
                value: stats?.bedwars?.losses ?? 0,
            },
            {
                name: "Vítimas",
                value: stats?.bedwars?.kills ?? 0,
            },
            {
                name: "Mortes",
                value: stats?.bedwars?.deaths ?? 0,
            },
        ],
        details: [
            {
                title: "",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.bedwars?.games_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.bedwars?.wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.bedwars?.losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.bedwars?.kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.bedwars?.deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.bedwars),
                    },
                    {
                        name: "Vítimas finais",
                        value: stats?.bedwars?.final_kills ?? 0,
                    },
                    {
                        name: "Mortes finais",
                        value: stats?.bedwars?.final_deaths ?? 0,
                    },
                    {
                        name: "Camas Quebradas",
                        value: stats?.bedwars?.beds_broken ?? 0,
                    },
                    {
                        name: "Camas Perdidas",
                        value: stats?.bedwars?.beds_lost ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.bedwars?.winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.bedwars?.wins,
                            stats?.bedwars?.losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.bedwars?.kills,
                            stats?.bedwars?.deaths
                        ),
                    },
                ],
            },
            {
                title: "Solo",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.bedwars?.solo_games_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.bedwars?.solo_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.bedwars?.solo_losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.bedwars?.solo_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.bedwars?.solo_deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.bedwars_solo),
                    },
                    {
                        name: "Vítimas finais",
                        value: stats?.bedwars?.solo_final_kills ?? 0,
                    },
                    {
                        name: "Mortes finais",
                        value: stats?.bedwars?.solo_final_deaths ?? 0,
                    },
                    {
                        name: "Camas Quebradas",
                        value: stats?.bedwars?.solo_beds_broken ?? 0,
                    },
                    {
                        name: "Camas Perdidas",
                        value: stats?.bedwars?.solo_beds_lost ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.bedwars?.solo_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.bedwars?.solo_wins,
                            stats?.bedwars?.solo_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.bedwars?.solo_kills,
                            stats?.bedwars?.solo_deaths
                        ),
                    },
                ],
            },
            {
                title: "Duplas",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.bedwars?.doubles_games_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.bedwars?.doubles_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.bedwars?.doubles_losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.bedwars?.doubles_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.bedwars?.doubles_deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.bedwars_doubles),
                    },
                    {
                        name: "Vítimas finais",
                        value: stats?.bedwars?.doubles_final_kills ?? 0,
                    },
                    {
                        name: "Mortes finais",
                        value: stats?.bedwars?.doubles_final_deaths ?? 0,
                    },
                    {
                        name: "Camas Quebradas",
                        value: stats?.bedwars?.doubles_beds_broken ?? 0,
                    },
                    {
                        name: "Camas Perdidas",
                        value: stats?.bedwars?.doubles_beds_lost ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.bedwars?.doubles_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.bedwars?.doubles_wins,
                            stats?.bedwars?.doubles_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.bedwars?.doubles_kills,
                            stats?.bedwars?.doubles_deaths
                        ),
                    },
                ],
            },
            {
                title: "Trios",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.bedwars?.["3v3v3v3_games_played"] ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.bedwars?.["3v3v3v3_wins"] ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.bedwars?.["3v3v3v3_losses"] ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.bedwars?.["3v3v3v3_kills"] ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.bedwars?.["3v3v3v3_deaths"] ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.bedwars_3v3v3v3),
                    },
                    {
                        name: "Vítimas finais",
                        value: stats?.bedwars?.["3v3v3v3_final_kills"] ?? 0,
                    },
                    {
                        name: "Mortes finais",
                        value: stats?.bedwars?.["3v3v3v3_final_deaths"] ?? 0,
                    },
                    {
                        name: "Camas Quebradas",
                        value: stats?.bedwars?.["3v3v3v3_beds_broken"] ?? 0,
                    },
                    {
                        name: "Camas Perdidas",
                        value: stats?.bedwars?.["3v3v3v3_beds_lost"] ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.bedwars?.["3v3v3v3_winstreak"] ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.bedwars?.["3v3v3v3_wins"],
                            stats?.bedwars?.["3v3v3v3_losses"]
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.bedwars?.["3v3v3v3_kills"],
                            stats?.bedwars?.["3v3v3v3_deaths"]
                        ),
                    },
                ],
            },
            {
                title: "Quartetos",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.bedwars?.["4v4v4v4_games_played"] ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.bedwars?.["4v4v4v4_wins"] ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.bedwars?.["4v4v4v4_losses"] ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.bedwars?.["4v4v4v4_kills"] ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.bedwars?.["4v4v4v4_deaths"] ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.bedwars_4v4v4v4),
                    },
                    {
                        name: "Vítimas finais",
                        value: stats?.bedwars?.["4v4v4v4_final_kills"] ?? 0,
                    },
                    {
                        name: "Mortes finais",
                        value: stats?.bedwars?.["4v4v4v4_final_deaths"] ?? 0,
                    },
                    {
                        name: "Camas Quebradas",
                        value: stats?.bedwars?.["4v4v4v4_beds_broken"] ?? 0,
                    },
                    {
                        name: "Camas Perdidas",
                        value: stats?.bedwars?.["4v4v4v4_beds_lost"] ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.bedwars?.["4v4v4v4_winstreak"] ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.bedwars?.["4v4v4v4_wins"],
                            stats?.bedwars?.["4v4v4v4_losses"]
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.bedwars?.["4v4v4v4_kills"],
                            stats?.bedwars?.["4v4v4v4_deaths"]
                        ),
                    },
                ],
            },
            {
                title: "2v2",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.bedwars?.["2v2_games_played"] ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.bedwars?.["2v2_wins"] ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.bedwars?.["2v2_losses"] ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.bedwars?.["2v2_kills"] ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.bedwars?.["2v2_deaths"] ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.bedwars_2v2),
                    },
                    {
                        name: "Vítimas finais",
                        value: stats?.bedwars?.["2v2_final_kills"] ?? 0,
                    },
                    {
                        name: "Mortes finais",
                        value: stats?.bedwars?.["2v2_final_deaths"] ?? 0,
                    },
                    {
                        name: "Camas Quebradas",
                        value: stats?.bedwars?.["2v2_beds_broken"] ?? 0,
                    },
                    {
                        name: "Camas Perdidas",
                        value: stats?.bedwars?.["2v2_beds_lost"] ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.bedwars?.["2v2_winstreak"] ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.bedwars?.["2v2_wins"],
                            stats?.bedwars?.["2v2_losses"]
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.bedwars?.["2v2_kills"],
                            stats?.bedwars?.["2v2_deaths"]
                        ),
                    },
                ],
            },
            {
                title: "3v3",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.bedwars?.["3v3_games_played"] ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.bedwars?.["3v3_wins"] ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.bedwars?.["3v3_losses"] ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.bedwars?.["3v3_kills"] ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.bedwars?.["3v3_deaths"] ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.bedwars_3v3),
                    },
                    {
                        name: "Vítimas finais",
                        value: stats?.bedwars?.["3v3_final_kills"] ?? 0,
                    },
                    {
                        name: "Mortes finais",
                        value: stats?.bedwars?.["3v3_final_deaths"] ?? 0,
                    },
                    {
                        name: "Camas Quebradas",
                        value: stats?.bedwars?.["3v3_beds_broken"] ?? 0,
                    },
                    {
                        name: "Camas Perdidas",
                        value: stats?.bedwars?.["3v3_beds_lost"] ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.bedwars?.["3v3_winstreak"] ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.bedwars?.["3v3_wins"],
                            stats?.bedwars?.["3v3_losses"]
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.bedwars?.["3v3_kills"],
                            stats?.bedwars?.["3v3_deaths"]
                        ),
                    },
                ],
            },
            {
                title: "4v4",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.bedwars?.["4v4_games_played"] ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.bedwars?.["4v4_wins"] ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.bedwars?.["4v4_losses"] ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.bedwars?.["4v4_kills"] ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.bedwars?.["4v4_deaths"] ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.bedwars_4v4),
                    },
                    {
                        name: "Vítimas finais",
                        value: stats?.bedwars?.["4v4_final_kills"] ?? 0,
                    },
                    {
                        name: "Mortes finais",
                        value: stats?.bedwars?.["4v4_final_deaths"] ?? 0,
                    },
                    {
                        name: "Camas Quebradas",
                        value: stats?.bedwars?.["4v4_beds_broken"] ?? 0,
                    },
                    {
                        name: "Camas Perdidas",
                        value: stats?.bedwars?.["4v4_beds_lost"] ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.bedwars?.["4v4_winstreak"] ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.bedwars?.["4v4_wins"],
                            stats?.bedwars?.["4v4_losses"]
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.bedwars?.["4v4_kills"],
                            stats?.bedwars?.["4v4_deaths"]
                        ),
                    },
                ],
            },
        ],
    };
}
