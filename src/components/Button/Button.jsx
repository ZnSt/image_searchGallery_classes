import { Btn, BtnContainer } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <BtnContainer>
      <Btn type="button" onClick={loadMore}>
        Load More
      </Btn>
    </BtnContainer>
  );
};
