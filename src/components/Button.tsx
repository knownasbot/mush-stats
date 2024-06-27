import styled from "styled-components";

export default styled.button`
    display: inline-flex;
    padding: 10px;
    height: fit-content;
    gap: 10px;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    color: white;
    background: var(--main);
    font-size: 1rem;
    font-weight: bold;
    font-family: inherit;
    cursor: pointer;

    &:active {
        background: var(--main-s1);
    }
`;
