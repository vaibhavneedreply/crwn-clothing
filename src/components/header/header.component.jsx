import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';


import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser ?
        <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
        :
        <OptionLink to='signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    { hidden ? null : <CartDropDown /> }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const dispatchStateToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, dispatchStateToProps)(Header);