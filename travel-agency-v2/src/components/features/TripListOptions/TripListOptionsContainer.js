import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addTag, changeDuration, changeDurationFrom, changeDurationTo, removeTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
	changeDuration: daysNum => dispatch(changeDuration(daysNum)),
  changeDurationFrom: daysNum => dispatch(changeDurationFrom(daysNum)),
  changeDurationTo: daysNum => dispatch(changeDurationTo(daysNum)),
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
