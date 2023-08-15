import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";

const Logo = styled.a`
    border-radius: 50%;

    @media (max-width: 600px) {
        order: 3;
    }

    svg {
        width: 50px;
        height: 50px;

        @media (max-width: 600px) {
            width: 40px;
            height: 40px;
        }
    }
`;

export default function GithubButton() {
    return (
        <Logo href="https://github.com/knownasbot/mush-stats">
            <Icon icon={"bi:github"} color={"white"} />
        </Logo>
    );
}
