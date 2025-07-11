import formatHours from "../formatHours";
import getRate from "../getRate";

export default function getHideAndSeekFields(
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    stats: Record<string, any>
): GameStats {
    return {
        id: "hns",
        title: "Hide and Seek",
        icon: "hns.webp",
        fields: [
            {
                name: "Jogos",
                value: stats?.seek?.played ?? 0,
            },
            {
                name: "Vítimas",
                value: stats?.seek?.kills ?? 0,
            },
            {
                name: "Mortes",
                value: stats?.seek?.deaths ?? 0,
            },
            {
                name: "Vitórias",
                value: stats?.seek?.wins ?? 0,
            },
            {
                name: "Derrotas",
                value: stats?.seek?.losses ?? 0,
            },
        ],
        details: [
            {
                title: "",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.seek?.played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.seek?.wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.seek?.losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.seek?.kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.seek?.deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.seek),
                    },
                    {
                        name: "Winstreak",
                        value: stats?.seek?.winstreak ?? 0,
                    },
                    {
                        name: "Winstreak Recorde",
                        value: stats?.seek?.max_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(stats?.seek?.wins, stats?.seek?.losses),
                    },
                    {
                        name: "K/D",
                        value: getRate(stats?.seek?.kills, stats?.seek?.deaths),
                    },
                ],
            },
            {
                title: "Procurador",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.seek?.seeker_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.seek?.seeker_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.seek?.seeker_losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.seek?.seeker_kills ?? 0,
                    },
                    {
                        name: "Escondidos Detectados",
                        value: stats?.seek?.seeker_detected_hiders ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.seek?.seeker_winstreak ?? 0,
                    },
                    {
                        name: "Winstreak Recorde",
                        value: stats?.seek?.seeker_max_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.seek?.seeker_wins,
                            stats?.seek?.seeker_losses
                        ),
                    },
                ],
            },
            {
                title: "Escondido",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.seek?.hider_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.seek?.hider_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.seek?.hider_losses ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.seek?.hider_deaths ?? 0,
                    },
                    {
                        name: "Congelamentos",
                        value: stats?.seek?.hider_frozen ?? 0,
                    },
                    {
                        name: "Trocas de Aparência",
                        value: stats?.seek?.hider_blocks_changed ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.seek?.hider_winstreak ?? 0,
                    },
                    {
                        name: "Winstreak Recorde",
                        value: stats?.seek?.hider_max_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.seek?.hider_wins,
                            stats?.seek?.hider_losses
                        ),
                    },
                ],
            },
        ],
    };
}
