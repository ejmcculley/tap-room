import { StyledFooter } from "./styles/Footer.styled";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <StyledFooter>
        <ul>
          <li>Natty Tap</li>
          <li>503.333.5775</li>
          <li>crushbro@nattytap.com</li>
          <p>&copy; 2022 Natty Tap. All rights reserved</p>
        </ul>
        
        <ul>
          <li>About</li>
          <li>Visit</li>
          <li>Gallery</li>
        </ul>

        <ul>
          <li>Work with us!</li>
          <li>Friends</li>
          <li>Contact</li>
        </ul>
        
          <SocialIcons /> 
        
    </StyledFooter>
  )
}

