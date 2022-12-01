import { useRouter } from "next/router.js";
import { StyledHeader } from "../../components/Card/Card.styled";
import ButtonNew from "../../components/Button";

export default function NewEntries() {
  const router = useRouter();

  return (
    <>
      <StyledHeader>add new</StyledHeader>
      <ButtonNew
        onClick={() => {
          router.push("/createSolution");
        }}
      >
        new solution
      </ButtonNew>
      <ButtonNew
        onClick={() => {
          router.push("/createModule");
        }}
      >
        new module
      </ButtonNew>
    </>
  );
}
