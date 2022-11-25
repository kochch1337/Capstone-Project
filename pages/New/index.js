import { useRouter } from "next/router.js";
import { StyledHeader } from "../../components/Card/Card.styled";
import ButtonNew from "../../components/Button";

export default function NewEntries({ mainData, personsData }) {
  const router = useRouter();
  const query = router.query;

  return (
    <>
      <StyledHeader>add new</StyledHeader>
      <ButtonNew
        onClick={() => {
          router.push("/Create");
        }}
      >
        new solution
      </ButtonNew>
      <ButtonNew>new module</ButtonNew>
      <ButtonNew>new person</ButtonNew>
    </>
  );
}
