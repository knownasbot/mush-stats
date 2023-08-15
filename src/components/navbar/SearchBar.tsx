import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchForm = styled.form`
    display: flex;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const SearchInput = styled.input`
    padding: 10px 15px;
    height: 20px;
    max-width: 165px;
    border: 0;
    border-radius: 25px;
    background: white;
    font-size: 16px;
    font-family: inherit;

    @media (max-width: 600px) {
        width: 100%;
        max-width: none;
    }
`;

const SearchButton = styled.button`
    display: flex;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 50%;
    background: var(--main-s1);
    cursor: pointer;

    @media (max-width: 600px) {
        display: none;
    }
`;

export default function SearchBar() {
    const navigate = useNavigate();
    const [usernameInput, setUsernameInput] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (usernameInput.length < 1) return;

        navigate("/" + usernameInput.trim());
        setUsernameInput("");
    }

    return (
        <SearchForm onSubmit={handleSubmit}>
            <SearchInput
                type="text"
                name="nickname"
                minLength={3}
                maxLength={16}
                value={usernameInput}
                onChange={(e) => {
                    let value = e.target.value?.trim();
                    value = value.replace(/[^a-z0-9_]+/i, "");

                    setUsernameInput(value);
                }}
                placeholder="Procurar jogador..."
            />

            <SearchButton type="submit">
                <Icon
                    icon={"material-symbols:search"}
                    width={"100%"}
                    height={"100%"}
                    color={"white"}
                />
            </SearchButton>
        </SearchForm>
    );
}
