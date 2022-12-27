import { useEffect, useState } from "react"
import { db } from "../firebase"
import Signout from "./Signout"
import { doc, getDoc, onSnapshot  } from "firebase/firestore";
// import { doc, getDoc,setDoc ,collection } from "firebase/firestore";

function Chat() {
    const [message,setMessage] = useState([])
   
    useEffect(() => {
        fetchText()
    }, [])

    const fetchText = async()=>{
        // const querySnapshot = await getDocs(collection(db, "message"));
        // const docRef = doc(db, "message", "Wih6fOensc9SA1TnIro7");        
        // const docSnap = await getDoc(docRef);

        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
        //   } else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        //   }

        onSnapshot(doc(db, "message", "Wih6fOensc9SA1TnIro7"), (doc) => {
            console.log("Current data: ", doc.data());
        });
        // setMessage(
        //     querySnapshot.docs.map((doc) => ({
        //         id: doc.id,
        //        data: doc           
        //     }))    
        // )
    }

    return (
        <>
            <Signout />
            {
            message.map(({id,data})=>{
                <div key={id} >
                    <p>{data}</p>
                </div>
            })
        }
        </>
    )
}
export default Chat