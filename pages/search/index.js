import { useRouter } from "next/router.js";
import { StyledHeader } from "../../components/Card/Card.styled";
import { FormsBase } from "../../components/InputForm/InputForm.styled";
import ButtonNew from "../../components/Button";
import {
  StyledCard,
  StyledCardContent,
  StyledCardContentElement,
  StyledCardTitle,
  StyledCardModuleList,
  StyledCardModuleListItem,
} from "../../components/Card/Card.styled";
import Fuse from "fuse.js";
import { useState } from "react";
import Link from "next/link";

export default function Solution({ solutionsData, modulesData, personsData }) {
  const router = useRouter();

  const initialState = [];
  const [solutionMatch, setSolutionMatch] = useState(initialState);
  const [moduleMatch, setModuleMatch] = useState([]);
  const [personMatch, setPersonMatch] = useState([]);
  const persData = [...personsData];

  const searchOptionsSolutions = {
    includeMatches: true,
    useExtendedSearch: true,
    keys: ["bpe", "bseint", "bsegr", "leadDeveloper", "cbo", "solution"],
  };

  const searchOptionsModules = {
    includeMatches: true,
    useExtendedSearch: true,
    keys: ["module"],
  };

  const searchOptionsPersons = {
    includeMatches: true,
    useExtendedSearch: true,
    keys: ["firstname", "lastname", "role"],
  };

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const searchText = data.get("search_text");
    setSolutionMatch(initialState);
    setModuleMatch(initialState);
    setPersonMatch(initialState);

    if (searchText != undefined) {
      const solData = [...solutionsData];
      const fuse = new Fuse(solData, searchOptionsSolutions);
      const solutionResult = fuse.search(`'${searchText}`);

      if (solutionResult != undefined) {
        solutionResult.forEach((result) => {
          result.matches.forEach((match) => {
            const solution = solutionsData.find(
              (sol) => sol.solution_Id === result.item.solution_Id
            );
            setSolutionMatch((oldValue) => [...oldValue, solution]);
          });
        });
      }

      const modData = [...modulesData];
      const moduleFuse = new Fuse(modData, searchOptionsModules);
      const modulesResult = moduleFuse.search(`'${searchText}`);

      if (modulesResult != undefined) {
        modulesResult.forEach((result) => {
          result.matches.forEach((match) => {
            const module = modulesData.find(
              (module) => module.module_Id === result.item.module_Id
            );
            setModuleMatch((oldValue) => [...oldValue, module]);
          });
        });
      }

      const personFuse = new Fuse(persData, searchOptionsPersons);
      const personResult = personFuse.search(`'${searchText}`);

      if (personResult != undefined) {
        personResult.forEach((result) => {
          result.matches.forEach((match) => {
            const personal_Id = result.item.personal_Id;
            const person = personsData.find(
              (person) => person.personal_Id === personal_Id
            );
            setPersonMatch((oldValue) => [...oldValue, person]);
          });
        });

        console.log("after PersonSearch");
        console.log(personsData);
      }
    }
  }

  function SolutionList() {
    if (solutionMatch.length > 0) {
      return (
        <StyledCard>
          <StyledCardContentElement>
            <StyledCardModuleList>
              <StyledCardModuleListItem key="solutionList">
                <b>Solutions: </b>
              </StyledCardModuleListItem>
              {solutionMatch.map((match) => {
                return (
                  <StyledCardModuleListItem key={match.solution}>
                    <Link
                      href={{
                        pathname: "/",
                        query: {
                          SolutionId: match.solution_Id,
                        },
                      }}
                      passHref
                    >
                      {match.solution}
                    </Link>
                  </StyledCardModuleListItem>
                );
              })}
            </StyledCardModuleList>
          </StyledCardContentElement>
        </StyledCard>
      );
    }
  }

  function ModuleList() {
    if (moduleMatch.length > 0) {
      return (
        <StyledCard>
          <StyledCardContentElement>
            <StyledCardModuleList>
              <StyledCardModuleListItem key="moduleList">
                <b>Modules: </b>
              </StyledCardModuleListItem>
              {moduleMatch.map((match) => {
                let solutionId;
                solutionsData.forEach((solution) => {
                  if (solution.modules.includes(match.module_Id)) {
                    solutionId = solution.solution_Id;
                  }
                });

                return (
                  <StyledCardModuleListItem key={match.module}>
                    <Link
                      href={{
                        pathname: "/modules",
                        query: {
                          SolutionId: solutionId,
                          ModuleId: match.module_Id,
                        },
                      }}
                      passHref
                    >
                      {match.module}
                    </Link>
                  </StyledCardModuleListItem>
                );
              })}
            </StyledCardModuleList>
          </StyledCardContentElement>
        </StyledCard>
      );
    }
  }

  function PersonsList() {
    if (personMatch.length > 0) {
      return (
        <StyledCard>
          <StyledCardContentElement>
            <StyledCardModuleList>
              <StyledCardModuleListItem key="moduleList">
                <b>Persons: </b>
              </StyledCardModuleListItem>
              {personMatch.map((match) => {
                return (
                  <StyledCardModuleListItem key={match.personal_Id}>
                    <Link
                      href={{
                        pathname: "/persons",
                        query: {
                          personal_Id: match.personal_Id,
                        },
                      }}
                      passHref
                    >
                      {match.firstname} {match.lastname}
                    </Link>
                  </StyledCardModuleListItem>
                );
              })}
            </StyledCardModuleList>
          </StyledCardContentElement>
        </StyledCard>
      );
    }
  }

  return (
    <>
      <StyledHeader>Search</StyledHeader>
      <FormsBase onSubmit={onSubmit}>
        <label htmlFor="search_text">New Module:</label>
        <input
          type="text"
          name="search_text"
          id="search_text"
          placeholder="Please enter search term"
          required
        ></input>
        <ButtonNew type="submit" variant="submit">
          search
        </ButtonNew>
      </FormsBase>
      <SolutionList />
      <ModuleList />
      <PersonsList />
    </>
  );
}
