import { connect } from 'react-redux';
import { saveEstablishmentInStore } from '../../redux/actions';
import Schedule from '../wizard/schedule';

const mapStateToProps = (state) => {
  return {
    establishment: state.establishment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveEstablishmentInStore: (establishment) => {
      console.log('schedule-container', establishment);
      dispatch(saveEstablishmentInStore(establishment));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);
