import './collection-item.scss'

const CollectionItem = ({ name, price, imageUrl }) => {
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='item-footer'>
                <span>{name}</span>
                <span>$ {price}/-</span>
            </div>
        </div>
    )
}

export default CollectionItem;