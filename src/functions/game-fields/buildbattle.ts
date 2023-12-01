import getRate from "../getRate";

export default function getBuildBattleFields(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stats: Record<string, any>
): GameStats {
    return {
        id: "build",
        title: "Build Battle",
        icon: "qb.webp",
        fields: [
            {
                name: "Jogos",
                value: stats?.buildbattle?.played ?? 0,
            },
            {
                name: "Vitórias",
                value: stats?.buildbattle?.wins ?? 0,
            },
            {
                name: "Derrotas",
                value: stats?.buildbattle?.losses ?? 0,
            },
            {
                name: "Winstreak",
                value: stats?.buildbattle?.winstreak ?? 0,
            },
        ],
        details: [
            {
                title: "",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.buildbattle?.played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.buildbattle?.wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.buildbattle?.losses ?? 0,
                    },
                    {
                        name: "Construções Perfeitas",
                        value: stats?.buildbattle?.perfects ?? 0,
                    },
                    {
                        name: "Primeiro Lugar",
                        value: stats?.buildbattle?.first_place ?? 0,
                    },
                    {
                        name: "Segundo Lugar",
                        value: stats?.buildbattle?.second_place ?? 0,
                    },
                    {
                        name: "Terceiro Lugar",
                        value: stats?.buildbattle?.third_place ?? 0,
                    },
                    {
                        name: "Pontos",
                        value: stats?.buildbattle?.points ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.buildbattle?.winstreak ?? 0,
                    },
                    {
                        name: "Winstreak Recorde",
                        value: stats?.buildbattle?.max_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.buildbattle?.wins,
                            stats?.buildbattle?.losses
                        ),
                    },
                ],
            },
        ],
    };
}
