import { useRouter } from "next/router.js";
import { StyledHeader } from "../../components/Card/Card.styled";
import ButtonNew from "../../components/Button";
import { StyledButtonContainerCentered } from "../../components/Button/Button.styled";

export default function NewEntries() {
  const router = useRouter();

  return (
    <>
      <StyledHeader>add new</StyledHeader>
      <StyledButtonContainerCentered>
        <ButtonNew
          onClick={() => {
            router.push("/createSolution");
          }}
        >
          solution
        </ButtonNew>
        <ButtonNew
          onClick={() => {
            router.push("/createModule");
          }}
        >
          module
        </ButtonNew>
        <ButtonNew
          onClick={() => {
            router.push("/createPerson");
          }}
        >
          person
        </ButtonNew>
      </StyledButtonContainerCentered>
    </>
  );
}
