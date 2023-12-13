import getRate from "../getRate";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export default function getMurderFields(stats: Record<string, any>): GameStats {
    return {
        id: "murder",
        title: "Murder",
        icon: "sword.webp",
        fields: [
            {
                name: "Jogos",
                value: stats?.murder?.played ?? 0,
            },
            {
                name: "Vitórias",
                value: stats?.murder?.wins ?? 0,
            },
            {
                name: "Derrotas",
                value: stats?.murder?.losses ?? 0,
            },
            {
                name: "Vítimas",
                value: stats?.murder?.kills ?? 0,
            },
            {
                name: "Mortes",
                value: stats?.murder?.deaths ?? 0,
            },
            {
                name: "Winstreak",
                value: stats?.murder?.winstreak ?? 0,
            },
        ],
        details: [
            {
                title: "",
                fields: [
                    {
                        name: "Moedas Coletadas",
                        value: stats?.murder?.coins_picked_up ?? 0,
                    },
                    {
                        name: "Jogos",
                        value: stats?.murder?.played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.murder?.wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.murder?.losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.murder?.kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.murder?.deaths ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.murder?.winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.murder?.wins,
                            stats?.murder?.losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.murder?.kills,
                            stats?.murder?.deaths
                        ),
                    },
                ],
            },
            {
                title: "Assassino",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.murder?.murderer_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.murder?.murderer_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.murder?.murderer_losses ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.murder?.murderer_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.murder?.murderer_deaths ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.murder?.murderer_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.murder?.murderer_wins,
                            stats?.murder?.murderer_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.murder?.murderer_kills,
                            stats?.murder?.murderer_deaths
                        ),
                    },
                ],
            },
            {
                title: "Detetive",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.murder?.detective_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.murder?.detective_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.murder?.detective_losses ?? 0,
                    },
                    {
                        name: "Assassinos Mortos",
                        value: stats?.murder?.detective_killed_murderer ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.murder?.detective_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.murder?.detective_deaths ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.murder?.detective_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.murder?.detective_wins,
                            stats?.murder?.detective_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.murder?.detective_kills,
                            stats?.murder?.detective_deaths
                        ),
                    },
                ],
            },
            {
                title: "Inocente",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.murder?.innocent_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.murder?.innocent_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.murder?.innocent_losses ?? 0,
                    },
                    {
                        name: "Assassinos Mortos",
                        value: stats?.murder?.innocent_killed_murderer ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.murder?.innocent_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.murder?.innocent_deaths ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.murder?.innocent_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.murder?.innocent_wins,
                            stats?.murder?.innocent_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.murder?.innocent_kills,
                            stats?.murder?.innocent_deaths
                        ),
                    },
                ],
            },
            {
                title: "Escoteiro",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.murder?.scout_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.murder?.scout_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.murder?.scout_losses ?? 0,
                    },
                    {
                        name: "Assassinos Mortos",
                        value: stats?.murder?.scout_killed_murderer ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.murder?.scout_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.murder?.scout_deaths ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.murder?.scout_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.murder?.scout_wins,
                            stats?.murder?.scout_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.murder?.scout_kills,
                            stats?.murder?.scout_deaths
                        ),
                    },
                ],
            },
            {
                title: "Médico",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.murder?.medic_played ?? 0,
                    },
                    {
                        name: "Vitórias",
                        value: stats?.murder?.medic_wins ?? 0,
                    },
                    {
                        name: "Derrotas",
                        value: stats?.murder?.medic_losses ?? 0,
                    },
                    {
                        name: "Assassinos Mortos",
                        value: stats?.murder?.medic_killed_murderer ?? 0,
                    },
                    {
                        name: "Vítimas",
                        value: stats?.murder?.medic_kills ?? 0,
                    },
                    {
                        name: "Mortes",
                        value: stats?.murder?.medic_deaths ?? 0,
                    },
                    {
                        name: "Winstreak",
                        value: stats?.murder?.medic_winstreak ?? 0,
                    },
                    {
                        name: "W/L",
                        value: getRate(
                            stats?.murder?.medic_wins,
                            stats?.murder?.medic_losses
                        ),
                    },
                    {
                        name: "K/D",
                        value: getRate(
                            stats?.murder?.medic_kills,
                            stats?.murder?.medic_deaths
                        ),
                    },
                ],
            },
        ],
    };
}
