import { connect } from 'react-redux';
import Welcome from '../welcome';

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(
  mapStateToProps,
  null
)(Welcome);
