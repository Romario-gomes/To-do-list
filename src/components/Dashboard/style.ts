import styled from "styled-components";
import checkSquareImg from '../../assets/check-square.svg';

export const Content = styled.div`
  max-width: 830px;
  margin: 0 auto;
  background-color: #FFF;
  color: #000;
  padding: 3rem 3rem 5rem;

  margin-top: -7rem;
  border-radius: 1rem; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

export const CreateTask = styled.form`
display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width:3rem;  
  }

  span {
    font-size: 1.75rem;
    font-weight: 600;
  }


  input {
    width: 15rem;
    height: 3rem;
    border-radius: 0.25rem 0rem 0rem 0.25rem;
    padding-left: 1rem;
    border: 1px solid #d7d7d7;

    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
  }

  .input-task{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-checked{
    cursor: pointer;
    background-color: #33CC95;
    background-image: url(${checkSquareImg});
    background-size: 2rem 2rem;
    background-repeat: no-repeat;
    background-position: center;
    
    width: 2.8rem;
    height: 3rem;
    padding: 0.7rem;
    border: none;
    border-radius: 0rem 0.25rem 0.25rem 0rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Tasks = styled.div`
  margin-top: 1.5rem;

  table {
    width: 100%;
  }

  td {
    margin-top: 0.5rem;
    border-bottom: 1px solid #e9e9e9;
    padding: 0.25rem;
  }

  .checked-task {
    width: 1.25rem;
    height: 1.25rem;

  }

  .delete-button {
    display: flex;
    justify-content: flex-end;
  }

  img {
    width: 25px;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`
