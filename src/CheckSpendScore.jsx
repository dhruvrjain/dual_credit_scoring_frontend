import axios from "axios";
import { useState, useEffect } from "react";

function CheckSpendScore({score, setScore}){
    const [file, setFile]=useState(null);
    const [alert , setAlert]=useState('');

    function handleChange(e){
        setFile(e.target.files[0]);
    }

    async function handleSubmit(e){

        e.preventDefault();

        if(!file){
            setAlert('Select a file first');
            return;
        }

        const formdata=new FormData();

        formdata.append('file',file);

        try{
            axios.post('http://127.0.0.1:8000/predict',formdata,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              }).then((res)=>{
                console.log(res.data);
                setScore(res.data.ans);
              });
        }
        catch(e){
            setAlert('Failed to upload PDF');
        }
    }

    return (
        <>
        <h1>SpendScore</h1>
        <h4>Get to know your spendings score based on your bank statements</h4>
        <h5>(Your statements are completely safe with us)</h5>
        <form onSubmit={handleSubmit}>
        <label> Select your bank statement{"  "}<input type="file" name="file" id="statementFile" accept="application/pdf" onChange={handleChange} /></label><br /><br />
            <button type="submit">Submit</button>
            <br />
            <p>{alert}</p>
        </form>
        </>
    );

}

export default CheckSpendScore;