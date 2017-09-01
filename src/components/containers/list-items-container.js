import { connect } from 'react-redux';
import { establishmentFetch } from '../../redux/actions';
import List from '../establishment/establishment-list';

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    establishmentList: state.establishmentList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    establishmentFetch: () => {
      dispatch(establishmentFetch());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
