import {FiSun} from 'react-icons/fi'
import styled from "styled-components"


const StyledHeader = styled.header`
display:flex;
justify-content: space-between;
align-items: center;
`

const StyledToggler = styled.button`
background: transparent;
border: none;
color: white;
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;
`
const StyledSunIcon = styled(FiSun)`
width: 18px;
height: 18px;
color: blue;
`

const StyledThemeText = styled.span`
    color:blue;
`

const Header = () =>{
    return(
        <StyledHeader>
            <h1>
                devhunter
            </h1>
            <StyledToggler>
            <StyledThemeText>Dark Mode</StyledThemeText>
            <StyledSunIcon></StyledSunIcon>
            </StyledToggler>
           
        </StyledHeader>
    )
}

export default Header;