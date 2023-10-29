const AddProduct = () => {
  return (
    <>
      <div className="product w-[100%] md:max-w-[1000px] max-w-[500px]">
        <h2>Add New Product / Edit Product</h2>
        <card className="cardNav">
          <form onSubmit>
            <div className="styleLabel">
            <label className="adminLable">Product name:</label>
            <input
              type="text"
              placeholder="Product name"
              required
              name="name"
              className="Lableinput"
            />
            </div>
            <div className="styleLabel">
            <label className="adminLable">Product image</label>
            <input type="file" accept="image/*" />
            </div>
            <div className="styleLabel">
            <label className="adminLable">Product price:</label>
            <input
              type="number"
              placeholder="Product price"
              required
              name="price"
            />
            </div>
            <div className="styleLabel">
             <label className="adminLable">Product Category:</label>
             <select name="categories" required></select> 
            </div>
          <div className="styleLabel">
              <label className="adminLable">Company/Brand:</label>
              <input type="text" placeholder="Product brand"  className="Lableinput" required name="brand" />
          </div>
          <label>Product Description</label>
          <textarea name="desc" required  cols="30" rows="10"></textarea>
          <button className="btn">
              Save Product / Edit Product
          </button>
          </form>
        </card>
      </div>
    </>
  );
};
export default AddProduct;
