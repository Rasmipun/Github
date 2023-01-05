import styled from "styled-components"
import { FiSearch } from "react-icons/fi"
import { useState } from "react"

const StyledContainer = styled.form`
display: flex;
align-items: center;
background-color: hsl(227, 100%, 98%);
padding: 10px;
padding-left: 10px;
border-radius: 10px;
margin: 10px 0;
&:focus-within{
    box-shadow: 0 0 0 2px red;
}
`

const StyledSearchIcon = styled(FiSearch)`
width: 20px;
height: 20px;
`

const StyledInput = styled.input`
flex: 1;
background: transparent;
border: none;
margin-left: 10px;
margin-right: 10px;
outline: none;
height: 20px;
color: hsl(217, 35%, 45%);
&::placeholder{
    color: black;
}
`
const StyledButton = styled.button`
background: blue;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`

const Search = ({search, setUser}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) =>{
        setSearch(value);
    }
    return<StyledContainer onSubmit={handleSubmit}>
        <StyledSearchIcon></StyledSearchIcon>
        <StyledInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search github username"></StyledInput>
        <StyledButton type="submit">Search</StyledButton>
        </StyledContainer>
}

export default Search;