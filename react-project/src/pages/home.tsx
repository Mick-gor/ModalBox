import { useState } from "react";
import { GlobalStyles } from "../Global.styles";
import Button from "../components/button/Button";
import Description from "../components/description/Description";
import Title from "../components/title/Title";
import ModalView from "../components/modal/ModalView";
import { MOCK } from "../data.mock";
import { TitleContainerStyled } from "../components/title/Title.styles";
import { DescriptionContainerStyled } from "../components/description/Description.styles";
import { ButtonContainerStyled } from "../components/button/Button.styles";
import { MainContainerStyles, ConetentContainer } from "./home.styles";

export const Home = () => {
  const [isModalVIsible, setModalVisible] = useState<boolean>(false);

  const handleModalVisible = () => {
    setModalVisible((prev) => !prev);
  };

  return (
    <MainContainerStyles>
      <GlobalStyles />
      {isModalVIsible && (
        <ModalView
          title={MOCK.title}
          buttonCTA={MOCK.buttonClose}
          handleButtonClick={handleModalVisible}
        />
      )}

      <ConetentContainer>
        <TitleContainerStyled>
          <Title color="black">{MOCK.title}</Title>
        </TitleContainerStyled>
        <DescriptionContainerStyled>
          <Description>{MOCK.description}</Description>
        </DescriptionContainerStyled>
        <ButtonContainerStyled>
          <Button type="button" variant="white" onClick={handleModalVisible}>
            {MOCK.buttonOpen}
          </Button>
        </ButtonContainerStyled>
      </ConetentContainer>
    </MainContainerStyles>
  );
};

export default Home;
