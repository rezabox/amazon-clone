import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react';
import { db, storage } from '../../../firebase/config';
import { useNavigate, useParams } from 'react-router-dom';
import { Timestamp, addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';



const categories = [
    {id:1 , name: 'a'},
    {id:2 , name: 'b'},
    {id:3 , name: 'c'},
    {id:4 , name: 'd'},
];
const initialState = {
   name: "",
   imageURL1: "",
   imageURL2: "",
   imageURL3: "",
   price: 0,
   category: "",
   brand: "",
   desc: "",
};
const AddProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    ...initialState,
  });

  function detectForm(id, f1, f2) {
      if(id === "ADD"){
         return f1
      }
      return f2
  }
  const navigate = useNavigate();
  const [uploadProgress, setUploadProgress] = useState(0);
  const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({...product, [name]: value});
  };
  const handleImageChange = (e)=>{
     const file = e.target.files[0];
     const storageRef = ref(storage, `eshop/${Date.now()}${file.name}`);
     const uploadTask = uploadBytesResumable(storageRef, file);
     uploadTask.on(
       "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);   
        },   
        (error) => {
            Swal.fire({
                 title: 'Upload is problem',
                 color: 'warning',
                 timer:3000,
                 position: 'top'
            })
        },
        () =>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setProduct({...product, imageURL: downloadURL});
              Swal.fire({
                title: 'Upload is successful',
                color: 'success',
                timer:3000,
                position: 'top'
              })
           })
        } 
     )
  } 
  const addProduct = (e) => {
       e.preventDefault();
       try{
          const docRef = addDoc(collection(db, "products"), {
               name:product.name,
               imageURL1:product.imageURL1,
               imageURL2:product.imageURL2,
               imageURL3:product.imageURL3,
               price: Number(product.price),
               category: product.category,
               brand: product.desc,
               createdAt: Timestamp.now().toDate(),
          });
          setUploadProgress(0);
          setProduct({ ...initialState });
          Swal.fire({
              title:'Product uploaded succesfully',
              color:'success',
              timer:3000,
              position: 'top'
          })
       }catch(e){
              Swal.fire({
                  title:'Product is problem to upload',
                  color: 'warning',
                  timer: 3000,
                  position: 'top',
              })
       }
  }

  return(
    <>
      <div className="product w-[100%] md:max-w-[1000px] max-w-[500px]">
        <h2>{detectForm(id, "Add New Product", "Edit Product")}</h2>
        <card className="cardNav">
          <form onSubmit={addProduct} className='p-4'>
            <div className="styleLabel">
            <label className="adminLable">Product name:</label>
            <input
              type="text"
              placeholder="Product name"
              required
              name="name"
              value={product.name}
              onChange={(e) => handleInputChange(e)}
             />
             </div>
            <div className="styleLabel">
            <label className="adminLable">Product image:</label>
            <card className='max-w-[500px] p-4 '>
              {uploadProgress === 0 ? null : (
                   <div className='bg-white border border-slate-500 rounded-md'>
                       <div className="bg-orange-400 border border-slate-500 rounded-md
                          text-xl font-medium"
                       style={{ width: `${uploadProgress}%` }}
                       >
                           {uploadProgress < 100 
                              ? `Uploading ${uploadProgress}`
                              :  `Uploading Complete ${uploadProgress}%`}               
                       </div>
                   </div>
              )}
               <input type="file" accept="image/*" placeholder='product image' name='image' onChange={(e) => handleImageChange(e)} />
               {product.imageURL1 === "" ? null : (
                  <input
                     type="file"
                     placeholder='Image URL1'
                     name="imageURL"
                     value={product.imageURL1}
                     disabled
                  />
               )}
            </card>         
            </div>
            <div className="styleLabel">
            <label className="adminLable">Product price:</label>
            <input
              type="number"
              placeholder="Product price"
              required
              name="price"
              value={product.price}
              onChange={(e) => handleInputChange(e)}
            />
            </div>
            <div className="styleLabel">
             <label className="adminLable">Product Category:</label>
             <select name="category" required value={product.category} onChange={(e) => handleInputChange(e)}>
                 <option value="" disabled>
                   -- choose product category --
                 </option>
                 {categories.map((cat) => {
                      return (
                        <option key={cat.id} value={cat.name}>
                             {cat.name}
                        </option>
                      );
                 })}
            </select> 
            </div>
          <div className="styleLabel">
              <label className="adminLable">Company/Brand:</label>
              <input type="text" placeholder="Product brand"  className="Lableinput" required name="brand" value={product.brand} onChange={(e) => handleInputChange(e)}/>
          </div>
          <div className='flex flex-col p-5'>
          <label className='text-xl '>Product Description</label>
          <textarea name="desc" required className='mt-5 border-2 border-slate-500 rounded-md outline-none p-2'  cols="30" rows="10"></textarea>
          </div>
          <button className="btn p-5 text-md bg-orange-400 rounded-full">
              Save Product / Edit Product
          </button>
          </form>
        </card>
      </div>
    </>
  );
};
export default AddProduct;
