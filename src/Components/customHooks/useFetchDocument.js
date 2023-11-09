import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { db } from "../../firebase/config"


const useFetchDocument = (collectionName, documentID) => {
   const [document, setDocument] = useState(null);

   const getDocument = async () => {
       const docRef = doc(db, collectionName, documentID);
       const docSnap = await getDoc(docRef);
       
       if(docSnap.exists()){
          const obj = {
             id: documentID,
             ...docSnap.data(),  
          };  
          setDocument(obj);
       } else {
           Swal.fire({
              title: 'Document not founded',
              timer: 3000,   
           })
       }
   };
   useEffect(() => {
      getDocument();
   }, []);
   
   return { document };
};
export default useFetchDocument;