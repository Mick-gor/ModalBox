import Button from "../button/Button";
import Description from "../description/Description";
import ModalView from "../modal/ModalView";
import Title from "../title/Title";
import { MOCK } from "../../data.mock";
import { useState } from "react";
import * as Styled from "./Home.styles";

export const HomeView = () => {
  const [isModalVIsible, setModalVisible] = useState<boolean>(false);

  const handleModalVisible = () => {
    setModalVisible((prev) => !prev);
  };

  return (
    <Styled.MainContainer>
      {isModalVIsible && (
        <ModalView
          title={MOCK.title}
          buttonCTA={MOCK.buttonClose}
          handleButtonClick={handleModalVisible}
        />
      )}

      <Styled.ConetentContainer>
        <Title color="black">{MOCK.title}</Title>

        <Description>{MOCK.description}</Description>
        <Styled.ButtonContainer>
          <Button type="button" variant="white" onClick={handleModalVisible}>
            {MOCK.buttonOpen}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ConetentContainer>
    </Styled.MainContainer>
  );
};

export default HomeView;
