import styled from "styled-components";
import Panel from "../panels/Panel";
import ProfilePanelSkeleton from "./ProfilePanelSkeleton";
import { useState, useEffect } from "react";

const GamePanel = styled(Panel)`
    margin-top: 5vh;
    width: 400px;

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

const PanelTitle = styled.h2`
    margin: 0;
    width: 200px;
    height: 36px;
    background: black;
    border-radius: 10px;

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

    span {
        height: 36px;
        width: 100px;
        background: black;
        border-radius: 10px;
    }
`;

const AnimatedContainer = styled.div`
    display: inherit;
    opacity: 0.2;
    animation-name: pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;

export default function StatsContainerSkeleton() {
    const [components, setComponents] = useState<JSX.Element[]>([]);

    useEffect(() => {
        if (components.length) return;

        setComponents(
            [...Array(6)].map((_, i) => (
                <GamePanel key={i}>
                    <AnimatedContainer>
                        <PanelHeader>
                            <PanelTitle
                                style={{
                                    width:
                                        100 +
                                        Math.floor(Math.random() * 6) * 35,
                                }}
                            />
                        </PanelHeader>

                        <PanelStats>
                            <div>
                                {[
                                    ...Array(Math.floor(3 + Math.random() * 3)),
                                ].map((_, j) => (
                                    <StatRow key={j}>
                                        <span
                                            style={{
                                                width:
                                                    80 +
                                                    Math.floor(
                                                        Math.random() * 8
                                                    ) *
                                                        10,
                                            }}
                                        />
                                        <span
                                            style={{
                                                width:
                                                    80 +
                                                    Math.floor(
                                                        Math.random() * 8
                                                    ) *
                                                        10,
                                            }}
                                        />
                                    </StatRow>
                                ))}
                            </div>
                        </PanelStats>
                    </AnimatedContainer>
                </GamePanel>
            ))
        );
    }, [components]);

    return (
        <>
            <ProfilePanelSkeleton />

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
