import getBedWarsFields from "./game-fields/bedwars";
import getCTFFields from "./game-fields/ctf";
import getHungerGamesFields from "./game-fields/hungergames";
import getMurderFields from "./game-fields/murder";
import getPartyFields from "./game-fields/party";
import getPvPFields from "./game-fields/pvp";
import getQuickBuildersFields from "./game-fields/quickbuilders";
import getSkyWarsFields from "./game-fields/skywars";
import getDuelsFields from "./game-fields/duels";
import getTheBridgeFields from "./game-fields/thebridge";
import getBlockPartyFields from "./game-fields/blockparty";

// O tipo é ignorado porque o retorno da API é longo e não vale a pena tipar ela inteira.
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export default function getGameFields(stats: Record<string, any>): GameStats[] {
    if (!stats) return [];

    const result: GameStats[] = [
        getBedWarsFields(stats),
        getSkyWarsFields(stats),
        getDuelsFields(stats),
        getHungerGamesFields(stats),
        getCTFFields(stats),
        getTheBridgeFields(stats),
        getBlockPartyFields(stats),
        getMurderFields(stats),
        getPartyFields(stats),
        getPvPFields(stats),
        getQuickBuildersFields(stats),
    ];

    return result;
}
