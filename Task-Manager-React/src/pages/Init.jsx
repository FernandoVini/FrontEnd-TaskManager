import Register from "../components/layout/Register";
import Login from "../components/layout/Login";
import Button from "../components/ui/Button";
import "../css/pages/Init.css";
import { useState, useEffect } from "react";

function Init() {
    const [option, setOption] = useState(1);

    useEffect(() => {
        localStorage.removeItem("@TaskManager:token");
    }, []);
    return (<>
        <div className="register-container">
            <div className="group-choice">
                <Button buttonMessage="Login"
                    margin="mg-R"
                    className="register-button"
                    variant="menu"
                    onClick={() => setOption(1)}
                />
                <Button buttonMessage="Cadastro"
                    margin="mg-L"
                    className="register-button"
                    variant="menu"
                    onClick={() => setOption(2)}
                />
            </div>
            {option == 1 && (<>
                <div>
                    <Login />
                </div>
            </>)
            }
            {option == 2 && (<>
                <div>
                    <Register onSuccess={() => setOption(1)}/>
                </div>
            </>)
            }
        </div>
    </>
    );
}

export default Init;