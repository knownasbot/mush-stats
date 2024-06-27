import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import ProfilePanel from "./panels/ProfilePanel";
import styled from "styled-components";
import Panel from "./panels/Panel";
import Button from "./Button";

const GamePanel = styled(Panel)`
    margin-top: 2em;
    width: 100%;
    max-width: 400px;
    height: fit-content;

    @media (max-width: 800px) {
        max-width: 100%;
    }
`;

const GamePanelColumn = styled.div`
    display: flex;
    flex-flow: column;
`;

const GameGrid = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 800px) {
        display: block;
    }
`;

const PanelHeader = styled.div`
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const PanelTitle = styled.h2`
    margin: 0;
    font-size: 36px;
    text-align: center;
    opacity: 0.9;
    font-weight: 600;

    @media (max-width: 400px) {
        max-width: 250px;
    }
`;

const PanelStats = styled.div`
    margin-top: 15px;
    font-size: 24px;
    font-weight: 600;
`;

const StatRow = styled.p`
    display: inline-flex;
    margin: 5px 0;
    width: 100%;
    justify-content: space-between;

    span:nth-child(2) {
        opacity: 0.8;
        font-weight: bold;
    }
`;

const DetailsButton = styled(Button)`
    width: 100%;
    padding: 5px;
    margin-top: 1em;
    border: 1px solid black;
    color: black;
    background: white;

    &:active {
        color: white;
        border-color: var(--main-s1);
    }
`;

const DetailsTitle = styled.div`
    display: inline-flex;
    margin-top: 2em;
    gap: 20px;
    align-items: center;

    h2 {
        opacity: 0.9;
    }
`;

export default function StatsContainer({ info }: { info: ProfileInfo }) {
    let components: React.ReactNode[] = [];
    const location = useLocation();
    const [gameDetails, setGameDetails] = useState<GameStats | null>();
    const [hasHistoryHandler, setHistoryHandler] = useState(false);

    useEffect(() => {
        if (!hasHistoryHandler) {
            setHistoryHandler(true);
            window.addEventListener("popstate", () => setGameDetails(null));
        }

        if (!gameDetails) {
            const gameId = location.hash.slice(1);
            const details = info.stats?.find((v) => v.id == gameId);
            if (details) {
                setGameDetails(details);
                window.history.pushState("d", "");
            }
        }
    }, [location, hasHistoryHandler, gameDetails, info.stats]);

    function handleDetailsButton(id: string) {
        setGameDetails(info.stats?.find((v) => v.id === id));
        window.scrollTo({ top: 0 });
        window.history.pushState("d", "");
    }

    if (gameDetails?.details) {
        components = gameDetails.details.map((field, i) => (
            <GamePanel key={i}>
                <PanelHeader>
                    <img
                        src={`icons/${gameDetails.icon}`}
                        alt={`Ícone ${gameDetails.title}`}
                        draggable={false}
                        width={50}
                    />
                    <PanelTitle>
                        {field.title ? field.title : "Geral"}
                    </PanelTitle>
                </PanelHeader>

                <PanelStats>
                    <div>
                        {field.fields.map((stat, i) => (
                            <StatRow key={i}>
                                <span>{stat.name}</span>
                                {typeof stat.value == "object" ? (
                                    <span
                                        style={{
                                            color: stat.value.color,
                                        }}
                                    >
                                        {stat.value.value}
                                    </span>
                                ) : (
                                    <span>{stat.value}</span>
                                )}
                            </StatRow>
                        ))}
                    </div>
                </PanelStats>
            </GamePanel>
        ));
    } else if (info.stats) {
        components = info.stats.map((game, i) => (
            <GamePanel key={i}>
                <PanelHeader>
                    <img
                        src={`icons/${game.icon}`}
                        alt={`Ícone ${game.title}`}
                        draggable={false}
                        width={50}
                    />
                    <PanelTitle>{game.title}</PanelTitle>
                </PanelHeader>

                <PanelStats>
                    <div>
                        {game.fields.map((stat, i) => (
                            <StatRow key={i}>
                                <span>{stat.name}</span>
                                <span>{stat.value}</span>
                            </StatRow>
                        ))}
                    </div>

                    {game.details && (
                        <DetailsButton
                            onClick={() => handleDetailsButton(game.id)}
                        >
                            <Icon icon={"mingcute:down-fill"} />
                            Detalhes
                        </DetailsButton>
                    )}
                </PanelStats>
            </GamePanel>
        ));
    }

    return (
        <>
            <ProfilePanel
                account={info.account}
                tag={info.tag}
                rank={info.rank}
                clan={info.clan}
                createdAt={info.createdAt}
                joinedAt={info.joinedAt}
            />

            <div>
                {gameDetails && (
                    <DetailsTitle>
                        <Button onClick={() => setGameDetails(null)}>
                            <Icon icon={"streamline:return-2-solid"} />
                        </Button>

                        <h2>Detalhes de {gameDetails.title}</h2>
                    </DetailsTitle>
                )}
                <GameGrid>
                    <GamePanelColumn>
                        {components.slice(0, Math.ceil(components.length / 2))}
                    </GamePanelColumn>
                    <GamePanelColumn>
                        {components.slice(Math.ceil(components.length / 2))}
                    </GamePanelColumn>
                </GameGrid>
            </div>
        </>
    );
}
