import { connect } from 'react-redux';
import { saveEstablishmentInStore } from '../../redux/actions';
import Categories from '../wizard/categories';

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
)(Categories);
