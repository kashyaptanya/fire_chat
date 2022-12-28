import Button from '@mui/material/Button';
import { signWithGoogle } from '../firebase';

function Signin(){
   return (
        <>
       <Button variant="contained" onClick={signWithGoogle} >sign in</Button>
        </>
    )
}
export  default Signin