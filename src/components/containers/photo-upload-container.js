import { connect } from 'react-redux';
import { saveEstablishmentInStore } from '../../redux/actions';
import PhotoUpload from '../wizard/photo-upload';

const mapStateToProps = (state) => {
  return {
    establishment: state.establishment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveEstablishmentInStore: (establishment) => {
      console.log('photo-upload-container', establishment);
      dispatch(saveEstablishmentInStore(establishment));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUpload);
