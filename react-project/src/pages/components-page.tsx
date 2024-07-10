import Button from "../components/button/Button";
import Description from "../components/description/Description";
import Title from "../components/title/Title";
import Modal from "../components/modal/Modal";
import { handleButtonOnClick } from "../utils.js";
import { noop } from "../utils.js";
import { MOCK } from "../data.mock";
import { GlobalStyles } from "../Global.styles";
import { ComponentsPageContainerStyled } from "./components-page.styles";
import { ButtonWrapperComponentPageStyled } from "./components-page.styles";

export const ComponentsPage = () => {
  return (
    <ComponentsPageContainerStyled>
      <GlobalStyles />
      <div>
        <p>Button black:</p>
        <Button type="button" variant="white" onClick={handleButtonOnClick}>
          {MOCK.buttonOpen}
        </Button>
      </div>
      <div>
        <p>Button white:</p>
        <Button type="button" variant="black" onClick={handleButtonOnClick}>
          {MOCK.buttonOpen}
        </Button>
      </div>
      <ButtonWrapperComponentPageStyled>
        <p>Button with wrapper:</p>
        <Button type="button" variant="white" onClick={handleButtonOnClick}>
          {MOCK.buttonOpen}
        </Button>
      </ButtonWrapperComponentPageStyled>
      <div>
        <p>Title:</p>
        <Title color="black">{MOCK.title}</Title>
      </div>
      <div>
        <p>Description:</p>
        <Description>{MOCK.description}</Description>
      </div>
      <div>
        <p>Modal:</p>
        <Modal
          title={MOCK.title}
          buttonCTA={MOCK.buttonClose}
          handleButtonClick={noop}
        />
      </div>
    </ComponentsPageContainerStyled>
  );
};

export default ComponentsPage;
