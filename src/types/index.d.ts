type StatsField = {
    name: string;
    value: number;
};

type GameStats = {
    id: string;
    title: string;
    icon: string;
    fields: StatsField[];
    details?: GameDetails[];
};

declare type ModalDetails = {
    hidden: boolean;
    stats?: GameDetails[];
};

declare interface ProfileInfo {
    account: {
        id?: number;
        uuid: string;
        username: string;
        banned?: boolean;
    };
    rank: {
        title: string;
        color: string;
    };
    clan?: {
        tag: string;
        color: string;
    };
    stats?: GameStats[];
    createdAt: Date;
    joinedAt: Date;
}

declare interface GameDetails {
    title: string;
    fields: {
        name: string;
        value:
            | string
            | {
                  value: string;
                  color: string;
              };
    }[];
}
