import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  width: 100%;
  height: 100vh;
  .card {
    background-color: #8c52e5;
    max-width: 300px;
    padding: 22px;
    border-radius: 10px;
    h5 {
      font-family: 'Roboto', sans-serif;
      text-align: center;
      font-size: 20px;
      color: #fff;

    }

    form {
      display: grid;
      input {
        margin: 10px 0 0 0;
        width: 100%;
      }
    }
  }
  input{
    width: 100%;
    border-radius: 22px;
  }
  .button:hover {
      background: #8c24e2;
      curson: pointer;
      transition: 0,3s;
      border-radius: 10px;
    }
`
