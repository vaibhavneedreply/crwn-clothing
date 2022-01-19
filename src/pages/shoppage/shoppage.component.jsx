import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateColletion } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, covertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot=> {
      const collectionsMap = covertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false});
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Routes>
          <Route path="/" element={<CollectionsOverviewWithSpinner isLoading={loading} {...this.props} />} />
          <Route path=":collectionId" element={<CollectionPageWithSpinner isLoading={loading} {...this.props} />} />
        </Routes>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateColletion(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
