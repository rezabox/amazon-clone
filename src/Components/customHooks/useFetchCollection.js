import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import  { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import Swal from "sweetalert2";

const useFetchCollection = (collectionName) => {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const getCollection = () => {
        setIsLoading(true);
        try {
           const docRef = collection(db, collectionName);
           const q = query(docRef, orderBy("createdAt", "desc"));
           onSnapshot(q, (snapsshot) => {
              const allData = snapsshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
              }))
              setData(allData);
              setIsLoading(false);
           });           
        } catch (error) {
           setIsLoading(false);
           Swal.fire({
              title: 'Problem to load data'
           })
        }
      }
      useEffect(()=> {
          getCollection(); 
      }, []);
      return { data, isLoading };
};
export default useFetchCollection;