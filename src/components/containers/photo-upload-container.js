import { connect } from 'react-redux';
import { saveEstablishmentInFirebase } from '../../redux/actions';
import PhotoUpload from '../wizard/photo-upload';

const mapStateToProps = (state) => {
  return {
    establishment: state.establishment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveEstablishment: (establishment) => {
      dispatch(saveEstablishmentInFirebase(establishment));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUpload);
