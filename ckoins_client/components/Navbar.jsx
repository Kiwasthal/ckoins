import { NavContainer, Bar, Logo } from './styledComponents/navbar';

const Navbar = ({ children, reference, inView }) => {
  return (
    <>
      <span
        style={{
          position: 'absolute',
          width: '100%',
          height: '1px',
          top: '0',
          zIndex: '9999',
        }}
        ref={reference}
      ></span>
      <NavContainer>
        <Bar inView={inView}>
          <Logo>CKOINS</Logo>
          {children}
        </Bar>
      </NavContainer>
    </>
  );
};

export default Navbar;
