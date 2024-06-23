import Button from "../components/button/Button";
import Description from "../components/description/Description";
import Title from "../components/title/Title";

export const Comp = () => {
  const handleButtonOnClick = () => console.log("button clicked");
  return (
    <main className='comp-container'>
      <div className='button-container'>
        <Button type='button' variant='black' onClick={handleButtonOnClick}>
          Button
        </Button>
      </div>
      <div className='title-container'>
        <Title color='black'>Title</Title>
      </div>
      <div className='description-container'>
        <Description>Description</Description>
      </div>
    </main>
  );
};

export default Comp;
