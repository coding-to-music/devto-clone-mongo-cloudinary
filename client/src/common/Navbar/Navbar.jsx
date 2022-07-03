import tw, { styled, theme } from 'twin.macro';
import { Link } from 'react-router-dom';
import { FaDev } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiNotification3Line } from 'react-icons/ri';
import { IoSearch } from 'react-icons/io5';
import useBreakpoint from '../../hooks/useBreakpoint';
import useToggle from '../../hooks/useToggle';
import Search from './components/Search';
import MobileMenu from './components/MobileMenu';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectCurrentToken } from '../../core/features/auth/authSlice';

const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const isMobile = useBreakpoint(theme`screens.mob.max`.replace('px', ''));

  const [profileMenu, toggleProfileMenu] = useToggle(false);
  const [mobileSearch, toggleMobileSearch] = useToggle(false);
  const [mobileMenu, toggleMobileMenu] = useToggle(false);

  mobileMenu
    ? (document.body.style.overflowY = 'hidden')
    : (document.body.style.overflowY = 'scroll');

  return (
    <Wrapper>
      <Top>
        <LeftSide>
          {isMobile && (
            <HamburgerIcon onClick={toggleMobileMenu}>
              <GiHamburgerMenu />
            </HamburgerIcon>
          )}
          <DevIcon>
            <FaDev />
          </DevIcon>
          {isMobile || <Search />}
          {isMobile && mobileMenu && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
        </LeftSide>
        <RightSide>
          {token ? (
            <>
              {isMobile ? (
                <SearchIcon onClick={toggleMobileSearch}>
                  <IoSearch />
                </SearchIcon>
              ) : (
                <NewPost to='post/new'>Create Post</NewPost>
              )}
              <NotificationIcon>
                <RiNotification3Line />
                <Count>2</Count>
              </NotificationIcon>
              <Avatar src={currentUser.picture} onClick={toggleProfileMenu} />
              {profileMenu && (
                <ProfileMenu>
                  <ListItem>
                    <Link to={`users/${currentUser.username}`}>
                      <Username>{currentUser.username}</Username>
                      <UserGmail>
                        @{currentUser.email.slice(0, currentUser.email.indexOf('@'))}
                      </UserGmail>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to='dashboard'>Dashboard</Link>
                  </ListItem>
                  <ListItem>
                    <Link to='post/new'>Create Post</Link>
                  </ListItem>
                  <ListItem>
                    <Link to='readinglist'>Reading list</Link>
                  </ListItem>
                  <ListItem>
                    <Link to='settings'>Settings</Link>
                  </ListItem>
                  <ListItem>
                    <Link to='auth/logout'>Sign Out</Link>
                  </ListItem>
                </ProfileMenu>
              )}
            </>
          ) : (
            <>
              {isMobile ? (
                <SearchIcon onClick={toggleMobileSearch}>
                  <IoSearch />
                </SearchIcon>
              ) : (
                <Login>Log in</Login>
              )}
              <SignUp>Create Account</SignUp>
            </>
          )}
        </RightSide>
      </Top>
      <Bottom>{isMobile && mobileSearch && <Search />}</Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  box-shadow: 0 4px 2px -3px rgba(0, 0, 0, 0.2);
  ${tw`w-full bg-white fixed left-0 top-0 z-50 py-2 px-pg`}
`;

const Top = tw.div`w-full max-w-pg mx-auto flex justify-between items-center gap-sm py-2`;

const LeftSide = tw.div`flex-1 flex items-center gap-sm`;

const HamburgerIcon = styled.div`
  ${tw`rounded-md text-black p-1 hover:(text-blue bg-light-blue)`}
  svg {
    font-size: 1.5rem;
  }
  cursor: pointer;
`;

const SearchIcon = styled.div`
  ${tw`rounded-md text-black p-1 hover:(text-blue bg-light-blue)`}
  svg {
    font-size: 1.5rem;
  }
  cursor: pointer;
`;

const DevIcon = styled(Link).attrs({
  to: '/',
})`
  svg {
    font-size: 2.5rem;
  }
`;

const RightSide = tw.div`flex items-center gap-sm relative`;

const NewPost = styled(Link)`
  ${tw`rounded-md border border-solid border-white py-2 px-3 text-blue bg-white border-blue hover:(text-white bg-blue border-blue)`}
`;

const NotificationIcon = styled(Link).attrs({
  to: 'notifications',
})`
  ${tw`rounded-md text-black p-1 hover:(text-blue bg-light-blue)`}
  position: relative;
  svg {
    font-size: 1.5rem;
  }
`;

const Count = tw.div`bg-red text-white rounded-full font-bold text-xs px-1 absolute top-0 right-0`;

const Avatar = styled.img`
  ${tw`max-w-none w-12 h-12 transition-none hover:(border border border-light-gray) object-cover rounded-full overflow-hidden cursor-pointer`}
`;

const Login = styled(Link).attrs({
  to: 'auth/login',
})`
  ${tw`rounded-md text-black py-2 px-3 hover:(text-blue bg-light-blue)`}
`;

const SignUp = styled(Link).attrs({
  to: 'auth/new',
})`
  ${tw`rounded-md border border-solid border-white py-2 px-3 text-blue bg-white border-blue hover:(text-white bg-blue border-blue)`}
`;

const ProfileMenu = styled.ul`
  box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.75);

  a {
    ${tw`block w-full`}
  }
  ${tw`w-60 px-2 py-2 bg-white rounded-md absolute bottom-[calc(-1 * 22rem)] right-0 z-50`}
`;

const ListItem = styled.li`
  margin: 0.25rem 0;
  & > a {
    ${tw`rounded-md px-2 py-2 text-darker-gray  hover:(text-blue bg-light-blue)`}
  }
  &:first-child > a {
    ${tw`rounded-md text-darker-gray hover:(text-blue bg-light-blue)`}
  }
  &:first-child {
    margin-bottom: 0.5rem;
    border-bottom: 1px solid ${theme`colors.lighter-gray`};
    a {
      margin-bottom: 0.5rem;
    }
  }
  &:last-child {
    margin-top: 0.5rem;
    border-top: 1px solid ${theme`colors.lighter-gray`};
    a {
      margin-top: 0.5rem;
    }
  }
`;

const Username = tw.h3``;

const UserGmail = tw.h4`text-gray`;

const Bottom = styled.div`
  ${tw`flex justify-between flex-col items-center 
 pt-2`}
`;

export default Navbar;