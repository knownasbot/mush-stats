import styled from "styled-components";
import Panel from "../panels/Panel";

const Container = styled(Panel)`
    display: flex;
    padding: 25px 20px;

    @media (max-width: 600px) {
        display: block;
    }
`;

const Avatar = styled.div`
    margin: 0 auto;
    margin-bottom: 10px;
    width: 100px;
    height: 100px;
    background: black;
    border-radius: 50%;
`;

const NameContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;

    @media (max-width: 600px) {
        width: 100%;
        justify-content: center;
    }
`;

const Tag = styled.b`
    display: inline-flex;
    padding: 6px 8px;
    width: 50px;
    height: 20px;
    background: black;
    border-radius: 10px;

    @media (max-width: 600px) {
        margin-left: 0;
    }
`;

const DateContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0 20px;

    @media (max-width: 460px) {
        margin-top: 20px;
    }
`;

const DateInfo = styled.div`
    display: inline-flex;
    width: 150px;
    height: 25px;
    margin-top: 10px;
    background: black;
    border-radius: 10px;
`;

const AnimatedContainer = styled.div`
    display: inherit;
    opacity: 0.2;
    gap: 20px;
    animation-name: pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;

export default function ProfilePanelSkeleton() {
    return (
        <Container>
            <AnimatedContainer>
                <Avatar
                    style={{
                        flex: "none",
                    }}
                />

                <div
                    style={{
                        width: "100%",
                    }}
                >
                    <NameContainer>
                        <Tag
                            style={{
                                margin: 0,
                                width: "100%",
                                maxWidth: "150px",
                                height: "25px",
                            }}
                        />
                        <NameContainer>
                            <Tag />
                            <Tag />
                        </NameContainer>
                    </NameContainer>

                    <DateContainer>
                        <DateInfo />
                        <DateInfo />
                    </DateContainer>
                </div>
            </AnimatedContainer>
        </Container>
    );
}
