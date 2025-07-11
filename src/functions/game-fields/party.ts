import formatHours from "../formatHours";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export default function getPartyFields(stats: Record<string, any>): GameStats {
    return {
        id: "party",
        title: "Party",
        icon: "party.webp",
        fields: [
            {
                name: "Jogos",
                value: stats?.party?.played ?? 0,
            },
            {
                name: "Primeiro Lugar",
                value: stats?.party?.first_place ?? 0,
            },
            {
                name: "Segundo Lugar",
                value: stats?.party?.second_place ?? 0,
            },
            {
                name: "Terceiro Lugar",
                value: stats?.party?.third_place ?? 0,
            },
        ],
        details: [
            {
                title: "",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.party?.played ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.party),
                    },
                    {
                        name: "Pontos",
                        value: stats?.party?.points ?? 0,
                    },
                    {
                        name: "Primeiro Lugar",
                        value: stats?.party?.first_place ?? 0,
                    },
                    {
                        name: "Segundo Lugar",
                        value: stats?.party?.second_place ?? 0,
                    },
                    {
                        name: "Terceiro Lugar",
                        value: stats?.party?.third_place ?? 0,
                    },
                ],
            },
            {
                title: "Block Party",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.party?.block_party_played ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value:
                            formatHours(stats?.play_time?.party_block_party) ??
                            0,
                    },
                    {
                        name: "Pontos",
                        value: stats?.party?.block_party_points ?? 0,
                    },
                    {
                        name: "Primeiro Lugar",
                        value: stats?.party?.block_party_first_place ?? 0,
                    },
                    {
                        name: "Segundo Lugar",
                        value: stats?.party?.block_party_second_place ?? 0,
                    },
                    {
                        name: "Terceiro Lugar",
                        value: stats?.party?.block_party_third_place ?? 0,
                    },
                ],
            },
            {
                title: "Caçador",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.party?.hunter_played ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.party_hunter),
                    },
                    {
                        name: "Pontos",
                        value: stats?.party?.hunter_points ?? 0,
                    },
                    {
                        name: "Primeiro Lugar",
                        value: stats?.party?.hunter_first_place ?? 0,
                    },
                    {
                        name: "Segundo Lugar",
                        value: stats?.party?.hunter_second_place ?? 0,
                    },
                    {
                        name: "Terceiro Lugar",
                        value: stats?.party?.hunter_third_place ?? 0,
                    },
                ],
            },
            {
                title: "Corrida Mortal",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.party?.race_played ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.party_race),
                    },
                    {
                        name: "Pontos",
                        value: stats?.party?.race_points ?? 0,
                    },
                    {
                        name: "Primeiro Lugar",
                        value: stats?.party?.race_first_place ?? 0,
                    },
                    {
                        name: "Segundo Lugar",
                        value: stats?.party?.race_second_place ?? 0,
                    },
                    {
                        name: "Terceiro Lugar",
                        value: stats?.party?.race_third_place ?? 0,
                    },
                ],
            },
            {
                title: "Corrida Grappler",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.party?.grappler_race_played ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(
                            stats?.play_time?.party_grappler_race
                        ),
                    },
                    {
                        name: "Pontos",
                        value: stats?.party?.grappler_race_points ?? 0,
                    },
                    {
                        name: "Primeiro Lugar",
                        value: stats?.party?.grappler_race_first_place ?? 0,
                    },
                    {
                        name: "Segundo Lugar",
                        value: stats?.party?.grappler_race_second_place ?? 0,
                    },
                    {
                        name: "Terceiro Lugar",
                        value: stats?.party?.grappler_race_third_place ?? 0,
                    },
                ],
            },
            {
                title: "Corrida Kangaroo",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.party?.kangaroo_race_played ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(
                            stats?.play_time?.party_kangaroo_race
                        ),
                    },
                    {
                        name: "Pontos",
                        value: stats?.party?.kangaroo_race_points ?? 0,
                    },
                    {
                        name: "Primeiro Lugar",
                        value: stats?.party?.kangaroo_race_first_place ?? 0,
                    },
                    {
                        name: "Segundo Lugar",
                        value: stats?.party?.kangaroo_race_second_place ?? 0,
                    },
                    {
                        name: "Terceiro Lugar",
                        value: stats?.party?.kangaroo_race_third_place ?? 0,
                    },
                ],
            },
            {
                title: "Fisherman",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.party?.fisherman_played ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.party_fisherman),
                    },
                    {
                        name: "Pontos",
                        value: stats?.party?.fisherman_points ?? 0,
                    },
                    {
                        name: "Primeiro Lugar",
                        value: stats?.party?.fisherman_first_place ?? 0,
                    },
                    {
                        name: "Segundo Lugar",
                        value: stats?.party?.fisherman_second_place ?? 0,
                    },
                    {
                        name: "Terceiro Lugar",
                        value: stats?.party?.fisherman_third_place ?? 0,
                    },
                ],
            },
            {
                title: "Lava",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.party?.lava_played ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.party_lava),
                    },
                    {
                        name: "Pontos",
                        value: stats?.party?.lava_points ?? 0,
                    },
                    {
                        name: "Primeiro Lugar",
                        value: stats?.party?.lava_first_place ?? 0,
                    },
                    {
                        name: "Segundo Lugar",
                        value: stats?.party?.lava_second_place ?? 0,
                    },
                    {
                        name: "Terceiro Lugar",
                        value: stats?.party?.lava_third_place ?? 0,
                    },
                ],
            },
            {
                title: "MLG Sumo",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.party?.mlg_sumo_played ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.party_mlg_sumo),
                    },
                    {
                        name: "Pontos",
                        value: stats?.party?.mlg_sumo_points ?? 0,
                    },
                    {
                        name: "Primeiro Lugar",
                        value: stats?.party?.mlg_sumo_first_place ?? 0,
                    },
                    {
                        name: "Segundo Lugar",
                        value: stats?.party?.mlg_sumo_second_place ?? 0,
                    },
                    {
                        name: "Terceiro Lugar",
                        value: stats?.party?.mlg_sumo_third_place ?? 0,
                    },
                ],
            },
            {
                title: "One In The Chamber",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.party?.oitc_played ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.party_oitc),
                    },
                    {
                        name: "Pontos",
                        value: stats?.party?.oitc_points ?? 0,
                    },
                    {
                        name: "Primeiro Lugar",
                        value: stats?.party?.oitc_first_place ?? 0,
                    },
                    {
                        name: "Segundo Lugar",
                        value: stats?.party?.oitc_second_place ?? 0,
                    },
                    {
                        name: "Terceiro Lugar",
                        value: stats?.party?.oitc_third_place ?? 0,
                    },
                ],
            },
            {
                title: "Stomper",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.party?.stomper_played ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.party_stomper),
                    },
                    {
                        name: "Pontos",
                        value: stats?.party?.stomper_points ?? 0,
                    },
                    {
                        name: "Primeiro Lugar",
                        value: stats?.party?.stomper_first_place ?? 0,
                    },
                    {
                        name: "Segundo Lugar",
                        value: stats?.party?.stomper_second_place ?? 0,
                    },
                    {
                        name: "Terceiro Lugar",
                        value: stats?.party?.stomper_third_place ?? 0,
                    },
                ],
            },
            {
                title: "TNT Run",
                fields: [
                    {
                        name: "Jogos",
                        value: stats?.party?.tnt_run_played ?? 0,
                    },
                    {
                        name: "Tempo de Jogo",
                        value: formatHours(stats?.play_time?.party_tnt_run),
                    },
                    {
                        name: "Pontos",
                        value: stats?.party?.tnt_run_points ?? 0,
                    },
                    {
                        name: "Primeiro Lugar",
                        value: stats?.party?.tnt_run_first_place ?? 0,
                    },
                    {
                        name: "Segundo Lugar",
                        value: stats?.party?.tnt_run_second_place ?? 0,
                    },
                    {
                        name: "Terceiro Lugar",
                        value: stats?.party?.tnt_run_third_place ?? 0,
                    },
                ],
            },
        ],
    };
}
