import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  width: 100%;
  height: 100vh;
  .card {
    display: grid;
    background-color: #8c52e5;
    max-width: 300px;
    padding: 22px;
    border-radius: 22px;
    h5 {
      font-family: 'Roboto', sans-serif;
      text-align: center;
      font-size: 20px;
      color: #fff;

    }

    form {
      input {
        height: 32px;
        width: 100%;
        text-align: center;
        border-radius: 22px;
        border: 1px solid #e2e2e2;
        margin: 10px 0 0 0;
      }

      input[type="submit"] {
        cursor: pointer;
        border: none;
        background: #00cc47;
        padding: 5px;
        border-radius: 22px;
        transition: 0.6s;
        &:hover {
          background: #8c24e2;
          color: #fff;
        }
      }
    }

    a {
      text-decoration: none;
      text-align: center;
      color: #fff;
      padding-top: 12px;
      font-family: 'Roboto', sans-serif;
    }
  }
`
