import { useState,Fragment } from "react";

const Btn1 = () => {
    const [numero, setnumero] = useState(0);

    const detectar = () => {
        console.log('oso')
    }


    return (
        <Fragment>
            <button onClick={detectar}>Oso</button>
        </Fragment>
    );
}
 
export default Btn1;