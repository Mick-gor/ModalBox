import { useState } from "react";
import { GlobalStyles } from "../../global.styles";
import Button from "../button/Button";
import Description from "../description/Description";
import Title from "../title/Title";
import ModalView from "../modal/ModalView";
import { MOCK } from "../../data.mock";
import * as Styles from "./Home.styles";

export const HomeView = () => {
  const [isModalVIsible, setModalVisible] = useState<boolean>(false);

  const handleModalVisible = () => {
    setModalVisible((prev) => !prev);
  };

  return (
    <Styles.MainContainer>
      <GlobalStyles />
      {isModalVIsible && (
        <ModalView
          title={MOCK.title}
          buttonCTA={MOCK.buttonClose}
          handleButtonClick={handleModalVisible}
        />
      )}

      <Styles.ConetentContainer>
        <Title color="black">{MOCK.title}</Title>

        <Description>{MOCK.description}</Description>
        <Styles.ButtonContainer>
          <Button type="button" variant="white" onClick={handleModalVisible}>
            {MOCK.buttonOpen}
          </Button>
        </Styles.ButtonContainer>
      </Styles.ConetentContainer>
    </Styles.MainContainer>
  );
};

export default HomeView;
