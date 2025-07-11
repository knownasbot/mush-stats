import formatHours from "../formatHours";
import getRate from "../getRate";

export default function getTheBridgeFields(
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    stats: Record<string, any>
): GameStats {
    return {
        id: "bridge",
        title: "The Bridge",
        icon: "bridge.webp",
        fields: [
            {
                name: "Jogos",
                value: stats?.duels?.bridge_played ?? 0,
            },
            {
                name: "Vítimas",
                value: stats?.duels?.bridge_kills ?? 0,
            },
            {
                name: "Mortes",
                value: stats?.duels?.bridge_deaths ?? 0,
            },
            {
                name: "Vitórias",
                value: stats?.duels?.bridge_wins ?? 0,
            },
            {
                name: "Derrotas",
                value: stats?.duels?.bridge_losses ?? 0,
            },
        ],
        details: [
            {
                title: "",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.duels?.bridge_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.duels?.bridge_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.duels?.bridge_losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.duels?.bridge_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.duels?.bridge_deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.duels_bridge),
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.duels?.bridge_wins,
                            stats?.duels?.bridge_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.duels?.bridge_kills,
                            stats?.duels?.bridge_deaths
                        ),
                    },
                ],
            },
            {
                title: "Solo",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.duels?.bridge_solo_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.duels?.bridge_solo_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.duels?.bridge_solo_losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.duels?.bridge_solo_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.duels?.bridge_solo_deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value:
                            formatHours(stats?.play_time?.duels_bridge_solo) ??
                            0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.duels?.bridge_solo_wins,
                            stats?.duels?.bridge_solo_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.duels?.bridge_solo_kills,
                            stats?.duels?.bridge_solo_deaths
                        ),
                    },
                ],
            },
            {
                title: "Duplas",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.duels?.bridge_doubles_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.duels?.bridge_doubles_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.duels?.bridge_doubles_losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.duels?.bridge_doubles_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.duels?.bridge_doubles_deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(
                            stats?.play_time?.duels_bridge_doubles
                        ),
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.duels?.bridge_doubles_wins,
                            stats?.duels?.bridge_doubles_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.duels?.bridge_doubles_kills,
                            stats?.duels?.bridge_doubles_deaths
                        ),
                    },
                ],
            },
            {
                title: "Quartetos",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.duels?.bridge_four_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.duels?.bridge_four_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.duels?.bridge_four_losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.duels?.bridge_four_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.duels?.bridge_four_deaths ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.duels_bridge_four),
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.duels?.bridge_four_wins,
                            stats?.duels?.bridge_four_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.duels?.bridge_four_kills,
                            stats?.duels?.bridge_four_deaths
                        ),
                    },
                ],
            },
        ],
    };
}
