import formatHours from "../formatHours";
import getRate from "../getRate";

export default function getHungerGamesFields(
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    stats: Record<string, any>
): GameStats {
    return {
        id: "hg",
        title: "Hunger Games",
        icon: "soup.webp",
        fields: [
            {
                name: "Jogos",
                value: stats?.hungergames?.games_played ?? 0,
            },
            {
                name: "Vítimas",
                value: stats?.hungergames?.kills ?? 0,
            },
            {
                name: "Mortes",
                value: stats?.hungergames?.deaths ?? 0,
            },
            {
                name: "Assistências",
                value: stats?.hungergames?.assists ?? 0,
            },
        ],
        details: [
            {
                title: "",
                fields: [
                    {
                        name: "Moedas",
                        value: stats?.hungergames?.coins ?? 0,
                    },
                    {
                        name: "Jogos",
                        value: stats?.hungergames?.games_played ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.hungergames?.kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.hungergames?.deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.hungergames),
                    },
                    {
                        name: "Assistências",
                        value: stats?.hungergames?.assists ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.hungergames?.wins ?? 0,
                    },
                    {
                        name: "Vítimas Recorde",
                        value: stats?.hungergames?.max_kills ?? 0,
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.hungergames?.kills,
                            stats?.hungergames?.deaths
                        ),
                    },
                ],
            },
            {
                title: "Double Kit",
                fields: [
                    {
                        name: "Rank",
                        value: {
                            value:
                                stats?.hungergames?.doublekit_ranking?.name +
                                " " +
                                stats?.hungergames?.doublekit_ranking?.symbol,
                            color: stats?.hungergames?.doublekit_ranking
                                ?.hex_color,
                        },
                    },
                    {
                        name: "Jogos",
                        value:
                            stats?.hungergames?.mode_doublekit_games_played ??
                            0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.hungergames?.mode_doublekit_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.hungergames?.mode_doublekit_deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(
                            stats?.play_time?.hungergames_doublekit
                        ),
                    },
                    {
                        name: "Vítimas Recorde",
                        value:
                            stats?.hungergames?.mode_doublekit_max_kills ?? 0,
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.hungergames?.mode_doublekit_kills,
                            stats?.hungergames?.mode_doublekit_deaths
                        ),
                    },
                ],
            },
            {
                title: "Minimush",
                fields: [
                    {
                        name: "Rank",
                        value: {
                            value:
                                stats?.hungergames?.minimush_ranking?.name +
                                " " +
                                stats?.hungergames?.minimush_ranking?.symbol,
                            color: stats?.hungergames?.minimush_ranking
                                ?.hex_color,
                        },
                    },
                    {
                        name: "Jogos",
                        value:
                            stats?.hungergames?.mode_minimush_games_played ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.hungergames?.mode_minimush_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.hungergames?.mode_minimush_deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(
                            stats?.play_time?.hungergames_minimush
                        ),
                    },
                    {
                        name: "Vítimas Recorde",
                        value: stats?.hungergames?.mode_minimush_max_kills ?? 0,
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.hungergames?.mode_minimush_kills,
                            stats?.hungergames?.mode_minimush_deaths
                        ),
                    },
                ],
            },
        ],
    };
}
