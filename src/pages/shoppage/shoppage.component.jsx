import { Routes, Route, Navigate } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = () => {
  return (
    <div className='shop-page'>
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  )
};

export default ShopPage;
