import Button from '@mui/material/Button';
import { auth } from '../firebase';

function Signout () {
    return(
        <>
         <Button variant="contained" onClick={()=>auth.signOut()} >sign out</Button>
        </>
    )
}
export default Signout