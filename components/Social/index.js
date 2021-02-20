import GithubIcon from "../../svg/GithubIcon.svg";
import GmailIcon from "../../svg/GmailIcon.svg";
import LinkedinIcon from "../../svg/LinkedinIcon.svg";
import ResumeIcon from "../../svg/ResumeIcon.svg";
import { IconsContainer, IconLink } from "./index.style";
const Social = () => {
  return (
    <>
      <IconsContainer>
        <IconLink href="https://github.com/zeus3hd">
          <GithubIcon />
        </IconLink>
        <IconLink href="https://github.com/zeus3hd">
          <GmailIcon />
        </IconLink>
        <IconLink href="https://github.com/zeus3hd">
          <LinkedinIcon />
        </IconLink>
        <IconLink href="https://github.com/zeus3hd">
          <ResumeIcon />
        </IconLink>
      </IconsContainer>
    </>
  );
};

export default Social;
