import { useContext } from "react";
import styled from "styled-components";
import Panel from "./panels/Panel";
import ProfilePanel from "./panels/ProfilePanel";
import { ModalContext } from "../routes/profile";

const GamePanel = styled(Panel)`
    margin-top: 5vh;
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const PanelIcon = styled.img`
    position: absolute;
    width: 52px;
    height: 52px;
    left: -14px;
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

const DetailsButton = styled.div`
    display: flex;
    width: 100%;
    height: 100%
    justify-content: center;

    button {
        display: inline-flex;
        margin: 15px auto;
        align-items: center;
        gap: 10px;
        opacity: 0.85;
        border: none;
        background: none;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
    }
`;

export default function StatsContainer({ info }: { info: ProfileInfo }) {
    let components: React.ReactNode[] = [];
    const { setModalDetails } = useContext(ModalContext);

    function handleDetailsButton(id: string) {
        setModalDetails({
            hidden: false,
            stats: info.stats?.find((v) => v.id === id)?.details,
        });
    }

    if (info.stats) {
        components = info.stats.map((game, i) => (
            <GamePanel key={i}>
                <PanelHeader>
                    <PanelIcon
                        src={`icons/${game.icon}`}
                        alt={`Ícone ${game.title}`}
                        draggable={false}
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
                        <DetailsButton>
                            <button
                                onClick={() => handleDetailsButton(game.id)}
                            >
                                <svg
                                    width="22"
                                    height="18"
                                    viewBox="0 0 22 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11 18L21.3923 0H0.607696L11 18Z"
                                        fill="black"
                                    />
                                </svg>
                                Detalhes
                            </button>
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

            <GameGrid>
                <GamePanelColumn>
                    {components.slice(0, Math.ceil(components.length / 2))}
                </GamePanelColumn>
                <GamePanelColumn>
                    {components.slice(Math.ceil(components.length / 2))}
                </GamePanelColumn>
            </GameGrid>
        </>
    );
}
