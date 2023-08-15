import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Panel from "./Panel";

const ErrorTitle = styled.h2`
    font-size: 30px;
`;

const ErrorMessage = styled.p`
    font-size: 18px;
`;

const TryButton = styled.button`
    padding: 8px 10px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    color: white;
    background: black;
    cursor: pointer;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const PanelFooter = styled.div`
    display: inline-flex;
    margin-top: 5vh;
    width: 100%;
    justify-content: space-between;
    opacity: 0.9;

    @media (max-width: 600px) {
        gap: 25px;
        flex-wrap: wrap;
    }
`;

const errorTitles: Record<string, string> = {
    "404": "Jogador não encontrado 🤔",
    "500": "Servidores pegando fogo 🖥️🔥",
    default: "Um erro ocorreu 😬",
};

const errorMessages: Record<string, string> = {
    "404": "Esse jogador não foi encontrado. Verifique se digitou o nome corretamente.",
    "500": "A API de dados do Mush está enfrentando problemas. Tente novamente mais tarde.",
    default:
        "Um erro desconhecido ocorreu. Caso persista, avise os desenvolvedores.",
};

export default function ErrorPanel({ status }: { status: number }) {
    const navigate = useNavigate();

    return (
        <Panel>
            <ErrorTitle>
                {errorTitles[status?.toString() ?? "default"]}
            </ErrorTitle>
            <ErrorMessage>
                {errorMessages[status?.toString() ?? "default"]}
            </ErrorMessage>

            <PanelFooter>
                <div>
                    <b>Ainda com problemas? Nos avise:</b>
                    <div>
                        <a
                            href="#"
                            style={{
                                display: "inline-block",
                                maxWidth: "300px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            https://forum.mush.com.br/topic/148149/atualiza%C3%A7%C3%A3o-pvp-v1-4-0/1
                        </a>
                    </div>
                </div>

                <TryButton onClick={() => navigate(window.location.pathname)}>
                    Tentar novamente
                </TryButton>
            </PanelFooter>
        </Panel>
    );
}
