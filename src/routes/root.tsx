import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Panel from "../components/panels/Panel";

const RootContainer = styled.div`
    margin: 10vh auto;
    padding: 15px 20px;
    max-width: 900px;

    p {
        font-size: 18px;
    }
`;

const repository = "https://github.com/knownasbot/mush-stats";

export default function Root() {
    document.title = "Mush Stats";

    return (
        <RootContainer>
            <Panel>
                <h2>Bem-vindo(a)!</h2>

                <p>
                    <b>Mush Stats</b> é uma ferramenta não-oficial desenvolvida
                    pelo jogador <Link to="/bot_e">bot_e</Link> para facilitar e
                    agilizar a consulta de dados de jogadores do{" "}
                    <a href="https://mush.com.br">MushMC</a>.
                </p>

                <p>
                    Esse site consulta dados diretamente da API do servidor e
                    exibe para os usuários de uma maneira amigável e fácil de se
                    compartilhar.
                </p>

                <p>
                    O projeto é de código-aberto. Se você é desenvolvedor e
                    gostaria de colaborar, acesse{" "}
                    <a href={repository}>nosso repositório</a>.
                </p>

                <p>
                    Qualquer problema, avise-nos no{" "}
                    <a href="#">tópico do projeto no fórum</a> ou na aba{" "}
                    <a href={repository + "/issues"}>Issues</a> do projeto.
                </p>
            </Panel>
        </RootContainer>
    );
}
