import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchColletionStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends Component {
  
  componentDidMount() {
    const { fetchColletionStart } = this.props;
    fetchColletionStart(); 
  }

  render() {
    return (
      <div className='shop-page'>
        <Routes>
          <Route path="/" element={<CollectionsOverviewContainer />} />
          <Route path=":collectionId" element={<CollectionPageContainer />} />
        </Routes>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  fetchColletionStart: () => dispatch(fetchColletionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);
