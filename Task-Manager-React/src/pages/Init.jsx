import Register from "../components/layout/Register";
import Login from "../components/layout/Login";
import Button from "../components/ui/Button";
import "../css/pages/Init.css";
import { useState } from "react";

function Init() {
    const [option, setOption] = useState(1);
    return (<>
        <div className="register-container">
            <div>
                <Button buttonMessage="Login" className="register-button" onClick={()=>setOption(1)}/>
                <Button buttonMessage="Register" className="register-button" onClick={()=>setOption(2)}/>
            </div>
            {option == 1 && (<>
                <Login />
            </>)
            }
            {option == 2 && (<>
                <Register />
            </>)
            }
        </div>
    </>
    );
}

export default Init;