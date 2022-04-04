import PropTypes from 'prop-types';


class ProductInfo
{
    constructor(brand,title,description,descriptionFull,price,currency)
    {
        this.brand = brand;
        this.title = title;
        this.description = description;
        this.descriptionFull = descriptionFull;
        this.price = price;
        this.currency = currency;
    }
}

ProductInfo.prototypes = {
    // string
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    currency: PropTypes.string,

    // number
    price: PropTypes.number
}

export default ProductInfo;
