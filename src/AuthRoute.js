import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';

const AuthRoute = ({currentUser, children}) => {
  if(currentUser) {
    return <Navigate to="/" replace/>
  }
    return children;
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(AuthRoute);