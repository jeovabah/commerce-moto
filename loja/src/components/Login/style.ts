import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;

    padding:  0 2rem;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

    background-color: rgba(255, 255, 255, 0.1);

    
    h3 {
        margin: 2rem;
        margin-bottom: 1rem;
        color: #fff;
        font-size: 2.5rem;
        font-weight: bold;
    }
    

    .MuiFormControl-root{
        margin-top: 0.5rem;
    }
    label {
        color: white;
    }
    input {
        border-radius: 0.5rem;
    }
    input:hover {
        filter: brightness(0.1);
    }
`

export const Button = styled.button`
    margin-top: 3rem;
    margin-bottom: 2rem;
    padding: .5rem 3rem;
    font-weight: bold;
    background-color: #1976a9;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: filter 0.5s;

    &:hover{
        filter: brightness(0.8);
    }
`