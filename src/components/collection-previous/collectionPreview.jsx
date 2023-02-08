import CollectionItem from '../collection-item/collectionItem';
import './collection-preview.scss'

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
            {
                items.filter(({ id }) => id ).map((item) => (
                    <CollectionItem {...item}/>
                ))
            }
            </div>
        </div>
    )
}

export default CollectionPreview;