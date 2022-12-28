import { useEffect, useState } from "react"
import { db } from "../firebase"
import Signout from "./Signout"
import { doc, getDoc,setDoc ,collection } from "firebase/firestore";

function Chat() {
    // const [message,setMessage] = useState([])
    const mesRef = collection(db, "message");
    
    setDoc(doc(mesRef,"1"), {
        text:"tanyaa",})
    

    const docRef = doc(db, "messaage");
    const docSnap = getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
         // doc.data() will be undefined in this case
        console.log("No such document!");
    }

    useEffect(() => {

        // db.collection("message").onSnapshot((snapshot) => {
        //     console.log("byyuh")
        //     setMessage(
        //         snapshot.docs.map((doc) => ({
        //             id: doc.id,
        //             data: doc.data(),
        //         }))
        //     );   
        // });
        // console.log({ setMessage });
    }, [])

    return (
        <>
            <Signout />
            {/* {
            message.map(({id,data})=>{
                <div key={id} >
                    <p>{data}</p>
                </div>
            })
        } */}
        </>
    )
}
export default Chat