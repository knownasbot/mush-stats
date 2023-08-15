/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export default function getCTFFields(stats: Record<string, any>): GameStats {
    return {
        id: "ctf",
        title: "CTF",
        icon: "ctf.webp",
        fields: [
            {
                name: "Jogos",
                value: stats?.ctf?.games_played ?? 0,
            },
            {
                name: "Vítimas",
                value: stats?.ctf?.kills ?? 0,
            },
            {
                name: "Capturas",
                value: stats?.ctf?.captures ?? 0,
            },
        ],
    };
}
