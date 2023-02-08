import React from 'react';
import './shop-page.scss';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/collection-previous/collectionPreview';

class ShopPage extends React.Component {

    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {

        const { collections } = this.state;

        return (
            <div className='shop-page'>
            {
                collections.map(({ id, ...restProps }) => (
                    <CollectionPreview key={id} {...restProps} />
                ))
            }
            </div>
        )
    }
}

export default ShopPage;