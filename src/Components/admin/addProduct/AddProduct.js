const AddProduct = () => {
    return(
        <>
          <div className="product">
            <h2>edit product</h2>
            <card>
                <form onSubmit>
                     <label>Product name:</label>
                     <input 
                      type="text"
                      placeholder="Product name"
                      required
                      name="name"
                     />
                     <label>Product image</label>
                    <input 
                      type="file" 
                       accept="image/*"    
                    />

                </form>
            </card>
          </div>
        </>
    )
}
export default AddProduct;