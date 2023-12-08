import { deleteDoc, doc } from "firebase/firestore";
import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { db, storage } from "../../../firebase/config";
import Loader from "../../loader/Loader";
import { deleteObject, ref } from "firebase/storage";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import {
  STORE_PRODUCTS,
  selectProduct,
} from "../../../redux/slice/productSlice";
import useFetchCollection from "../../customHooks/useFetchCollection";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ViewProducts = () => {
  const { data, isLoading } = useFetchCollection("products");
  const products = useSelector(selectProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );
  }, [dispatch, data]);
  const confirmDelete = (id, imageURL1) => {
    Notiflix.Confirm.show(
      "Delete Product!!",
      "You are about to delete this product",
      "Delete",
      "Cancel",
      function okCb() {
        deleteProduct(id, imageURL1);
      },
      function cancelCd() {
        console.log("Delete Canceled");
      },
      {
        width: "320px",
        borderRadius: "3px",
        titleColor: "orangered",
        okButtonBackground: "orangered",
        cssAnimationStyle: "zoom",
      }
    );
  };
  const deleteProduct = async (id, imageURL1) => {
    try {
      await deleteDoc(doc(db, "products", id));
      const storageRef = ref(storage, imageURL1);
      await deleteObject(storageRef);
      Swal.fire({
        title: "Product deleted successfully.",
        timer: 3000,
      });
    } catch (error) {
      Swal.fire({
        title: "Product is problem",
        timer: 3000,
      });
    }
  };
  return (
    <>
     {isLoading && <Loader />}
      <div className="w-[100%]">
        <h2>All Products</h2>
        {products.length === 0 ? (
          <p>No product found.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>s/n</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            {products.map((product, index) => {
              const { id, name, price, imageURL1, category } = product;
              return (
                <tbody key={id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td className="w-[100px]">
                      <img
                        src={imageURL1}
                        alt={name}
                        style={{ width: 100 }}
                      />
                    </td>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>{`$${price}`}</td>
                    <td className="cursor-pointer  flex items-center justify-center">
                      <FaTrashAlt
                         size={19}
                         color="red"
                         onClick={() => confirmDelete(id, imageURL1)}
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        )}
      </div>
    </>
  );
};
export default ViewProducts;
