import formatHours from "../formatHours";
import getRate from "../getRate";

export default function getSkyWarsFields(
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    stats: Record<string, any>
): GameStats {
    return {
        id: "sw",
        title: "SkyWars",
        icon: "skywars.webp",
        fields: [
            {
                name: "Jogos",
                value: stats?.skywars_r1?.games_played ?? 0,
            },
            {
                name: "Vitórias",
                value: stats?.skywars_r1?.wins ?? 0,
            },
            {
                name: "Derrotas",
                value: stats?.skywars_r1?.losses ?? 0,
            },
            {
                name: "Vítimas",
                value: stats?.skywars_r1?.kills ?? 0,
            },
            {
                name: "Mortes",
                value: stats?.skywars_r1?.deaths ?? 0,
            },
        ],
        details: [
            {
                title: "",
                fields: [
                    {
                        name: "Nível",
                        value:
                            stats?.skywars_r1?.level_badge.symbol +
                            " " +
                            (stats?.skywars_r1?.level ?? 1),
                    },
                    {
                        name: "Moedas",
                        value: stats?.skywars_r1?.coins,
                    },
                    {
                        name: "Almas",
                        value: stats?.skywars_r1?.souls,
                    },
                    {
                        name: "",
                        value: "",
                    },
                    {
                        name: "Jogos",
                        value: stats?.skywars_r1?.games_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.skywars_r1?.wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.skywars_r1?.losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.skywars_r1?.kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.skywars_r1?.deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.skywars),
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.skywars_r1?.["wins"],
                            stats?.skywars_r1?.["losses"]
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.skywars_r1?.["kills"],
                            stats?.skywars_r1?.["deaths"]
                        ),
                    },
                ],
            },
            {
                title: "Solo",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.skywars_r1?.games_played_solo ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.skywars_r1?.wins_solo ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.skywars_r1?.losses_solo ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.skywars_r1?.kills_solo ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.skywars_r1?.deaths_solo ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.skywars_solo),
                    },
                    {
                        name: "Winstreak",
                        value: stats?.skywars_r1?.winstreak_solo ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.skywars_r1?.wins_solo,
                            stats?.skywars_r1?.losses_solo
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.skywars_r1?.kills_solo,
                            stats?.skywars_r1?.deaths_solo
                        ),
                    },
                ],
            },
            {
                title: "Duplas",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.skywars_r1?.games_played_team ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.skywars_r1?.wins_team ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.skywars_r1?.losses_team ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.skywars_r1?.kills_team ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.skywars_r1?.deaths_team ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.skywars_team),
                    },
                    {
                        name: "Winstreak",
                        value: stats?.skywars_r1?.winstreak_team ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.skywars_r1?.wins_team,
                            stats?.skywars_r1?.losses_team
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.skywars_r1?.kills_team,
                            stats?.skywars_r1?.deaths_team
                        ),
                    },
                ],
            },
        ],
    };
}
