import { connect } from 'react-redux';
import { saveEstablishmentInStore } from '../../redux/actions';
import List from '../list';

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveEstablishmentInStore: (establishment) => {
      dispatch(saveEstablishmentInStore(establishment));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
