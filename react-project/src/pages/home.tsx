import { useState } from "react";
import Button from "../components/button/Button";
import Description from "../components/description/Description";
import Title from "../components/title/Title";
import Modal from "../components/modal/Modal";
import { MOCK } from "../data.mock";

export const Home = () => {
  const [isModalVIsible, setModalVisible] = useState<boolean>(false);

  const handleModalVisible = () => {
    setModalVisible((prev) => !prev);
  };

  return (
    <div className="main-container">
      {isModalVIsible && (
        <div className="modal-overlay">
          <div className="backdrop" />
          <Modal
            buttonCTA={MOCK.buttonClose}
            title={MOCK.title}
            handleButtonClick={handleModalVisible}
          />
        </div>
      )}

      <div className="content-container">
        <div className="title-container">
          <Title color="black">{MOCK.title}</Title>
        </div>
        <div className="description-container">
          <Description>{MOCK.description}</Description>
        </div>
        <div className="button-container">
          <Button variant="white" onClick={handleModalVisible}>
            {MOCK.buttonOpen}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
