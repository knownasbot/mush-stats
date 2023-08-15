import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import GithubButton from "./GithubButton";
import SearchBar from "./SearchBar";

const NavContainer = styled.nav`
    width: 100%;
    height: 65px;
    padding: 5px 30px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    background: var(--main);
    box-sizing: border-box;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 600px) {
        padding: 10px;
        gap: 10px;
        justify-content: space-around;
    }
`;

export default function Header() {
    return (
        <NavContainer>
            <Link
                to="/"
                style={{
                    display: "inline-flex",
                    gap: "10px",
                    alignItems: "center",
                }}
            >
                <Logo />
            </Link>
            <GithubButton />
            <SearchBar />
        </NavContainer>
    );
}
