import formatHours from "../formatHours";
import getRate from "../getRate";

export default function getQuickBuildersFields(
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    stats: Record<string, any>
): GameStats {
    return {
        id: "qb",
        title: "Quick Builders",
        icon: "qb.webp",
        fields: [
            {
                name: "Jogos",
                value: stats?.quickbuilders?.played ?? 0,
            },
            {
                name: "Vitórias",
                value: stats?.quickbuilders?.wins ?? 0,
            },
            {
                name: "Derrotas",
                value: stats?.quickbuilders?.losses ?? 0,
            },
            {
                name: "Winstreak",
                value: stats?.quickbuilders?.winstreak ?? 0,
            },
        ],
        details: [
            {
                title: "",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.quickbuilders?.played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.quickbuilders?.wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.quickbuilders?.losses ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.quickbuilders),
                    },
                    {
                        name: "Construções Perfeitas",
                        value: stats?.quickbuilders?.perfect_builds ?? 0,
                    },
                    {
                        name: "Sequência de Perfeitas",
                        value: stats?.quickbuilders?.perfect_build_streak ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.quickbuilders?.winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.quickbuilders?.wins,
                            stats?.quickbuilders?.losses
                        ),
                    },
                ],
            },
        ],
    };
}
