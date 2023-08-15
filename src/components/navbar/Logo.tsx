import styled from "styled-components";

const Icon = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    user-select: none;

    @media (max-width: 600px) {
        width: 40px;
        height: 40px;
    }
`;

export default function Logo() {
    return <Icon src="/logo.png" alt="Logo" />;
}
