import React from "react"
import { Alert, Button } from "antd"

export default function Home({token}){
    const [message, setMessage] = useState("")
    const  [error, setError] =useState("")
    const getPrrivateStuff = () => {
        fetch("http://localhost:5050/private", {
            headers: {
                'Authorization': token
            }
        })
        .then(res => res.json())
        .then(data  => {
            if(data.error){
                setError(data.error);
                setMessage("");
                return;
            }
            setMessage(data.message);
            setError("")
        })
        .catch(error => console.error(err))
    }
    return(
        <>
            <h1>Home</h1>
            {message && <Alert message={message} typer="success"  />} 
            {message && <Alert message={error} typer="error"  />} 
            <Button OnClick={getPrrivateStuff} type="primary" size="large">Get  Pri </Button>
        </>
    )
}