import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from 'redux';

import { selectCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import collectionOverviewComponent from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionOverviewComponent);

export default CollectionOverviewContainer;