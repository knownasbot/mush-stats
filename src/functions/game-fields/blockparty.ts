export default function getBlockPartyFields(
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    stats: Record<string, any>
): GameStats {
    return {
        id: "blockparty",
        title: "Block Party",
        icon: "jukebox.webp",
        fields: [
            {
                name: "Jogos",
                value: stats?.blockparty?.played ?? 0,
            },
            {
                name: "Rodadas",
                value: stats?.blockparty?.rounds ?? 0,
            },
            {
                name: "Vitórias",
                value: stats?.blockparty?.wins ?? 0,
            },
        ],
    };
}
