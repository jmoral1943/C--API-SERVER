import React from 'react';

const EditProducts = () => {
    return(
        <form>
            <label htmlFor="product-name">Product Name</label>
            <input type="text" placeholder="Product Name" name="ProductName" id="product-name"></input>

            <label htmlFor="product-description">Product Description</label>
            <input type="text" placeholder="Product Description" name="ProductDesc" id="product-description"></input>

            <label htmlFor="image-url">Image URL</label>
            <input type="text" placeholder="Image URL" name="Img" id="image-url"></input>

            <label htmlFor="image-alt">Image Alt</label>
            <input type="text" placeholder="Image Alt" name="Alt" id="image-alt"></input>

            <label htmlFor="product-type">Product Type</label>
            <input type="text" placeholder="Product Type" name="ProductType" id="product-type"></input>
        </form>
    )
}

export default EditProducts;