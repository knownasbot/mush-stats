import { useContext, useRef } from "react";
import styled from "styled-components";
import Panel from "./Panel";
import { ModalContext } from "../../routes/profile";

const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 99;
`;

const ModalPanel = styled(Panel)`
    display: flex;
    margin: auto;
    margin-top: 10vh;
    height: 80vh;
    max-width: 500px;
    flex-direction: column;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;

    h3 {
        margin: 10px 0;
    }
`;

const PanelTitle = styled.h2`
    margin: 10px 0;
    font-size: 42px;
    text-align: center;
    opacity: 0.9;
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

const CloseButton = styled.button`
    margin: 15px auto;
    opacity: 0.85;
    border: none;
    background: none;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
`;

export default function DetailsModal({ stats }: { stats: GameDetails[] }) {
    const { modalDetails, setModalDetails } = useContext(ModalContext);
    const statsContentRef = useRef<HTMLHeadingElement>(null);

    const details = stats?.map((game, i) => (
        <div key={i}>
            <h3>{game.title}</h3>

            {game.fields.map((field, j) => (
                <StatRow key={j}>
                    <span>
                        {field.name + (field.name.length > 0 ? ":" : "")}
                    </span>

                    {typeof field.value == "object" ? (
                        <span
                            style={{
                                color: field.value.color,
                                filter: "saturate(2)",
                            }}
                        >
                            {field.value.value}
                        </span>
                    ) : (
                        <span>{field.value}</span>
                    )}
                </StatRow>
            ))}
        </div>
    ));

    function handleCloseButton(
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
    ) {
        if (e.target !== e.currentTarget) return;

        setModalDetails({
            hidden: true,
            stats: [],
        });

        statsContentRef.current?.scrollTo({
            top: 0,
        });
    }

    return (
        <ModalContainer
            hidden={modalDetails.hidden}
            onClick={handleCloseButton}
        >
            <ModalPanel>
                <PanelTitle>Detalhes</PanelTitle>

                <div
                    style={{
                        padding: "0 10px",
                        height: "100%",
                        overflowY: "auto",
                    }}
                    ref={statsContentRef}
                >
                    {details}
                </div>

                <CloseButton onClick={handleCloseButton}>Fechar</CloseButton>
            </ModalPanel>
        </ModalContainer>
    );
}
