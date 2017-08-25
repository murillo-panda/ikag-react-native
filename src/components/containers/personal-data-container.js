import { connect } from 'react-redux';
import { saveEstablishmentInStore } from '../../redux/actions';
import PersonalData from '../wizard/personal-data';

const mapStateToProps = (state) => {
  return {
    establishment: state.establishment,
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
)(PersonalData);
