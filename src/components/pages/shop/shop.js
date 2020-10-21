import React, { useState } from "react";
import SHOP_DATA from './shopData';
import PreviewCollection from '../../Preview-collection/PreviewCollection';

function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA)
    
  return (
      <div>
          {collections.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
          ))}
      </div>
  )
}

export default ShopPage;
