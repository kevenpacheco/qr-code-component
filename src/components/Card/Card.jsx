import * as S from './Card.style';
import QRCodeImage from "../../assets/image-qr-code.png";

export const Card = () => {
  return (
    <S.Wrapper>
      <S.Img src={QRCodeImage} alt="QR Code" width={254} height={254}/>
      <S.Title>Improve your front-end skills by building projects</S.Title>
      <S.Description>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level.
      </S.Description>
    </S.Wrapper>
  );
};
