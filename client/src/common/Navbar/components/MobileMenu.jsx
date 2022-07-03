import tw, { styled } from 'twin.macro';
import { IoIosClose } from 'react-icons/io';
import Resources from '../../Resources';

const MobileMenu = ({ toggleMobileMenu }) => {
  return (
    <>
      <Wrapper>
        <Menu>
          <Heading>DEV Community</Heading>
          <CloseIcon onClick={toggleMobileMenu}>
            <IoIosClose />
          </CloseIcon>
        </Menu>
        <Resources />
      </Wrapper>
      <Overlay onClick={toggleMobileMenu}></Overlay>
    </>
  );
};

const Wrapper = styled.aside`
  ${tw`w-72 bg-white h-screen z-50 absolute overflow-y-scroll inset-0 px-sm`}
  > div {
    ${tw`w-full`};
  }
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  ${tw`w-full h-screen z-40 absolute top-0 right-0`}
`;

const Heading = tw.h2``;

const Menu = tw.div`flex justify-between items-center py-4`;

const CloseIcon = styled.div`
  ${tw`rounded-md text-black hover:(text-blue bg-light-blue)`}
  svg {
    font-size: 2.25rem;
  }
  cursor: pointer;
`;

export default MobileMenu;