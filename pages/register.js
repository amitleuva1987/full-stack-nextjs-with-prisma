import { useState } from "react";

function Register(){
 //   const bcrypt = require("bcrypt")
    const [fields,setFields] = useState({
        name:'',
        email:'',
        password:''
    });
    
    // async function compareIt(password,hashedpassword){
    //     const valid = await bcrypt.compare(password,hashedpassword)
    //     return valid;
    // }

    const handleInputChange = (event) => {
        setFields({
            ...fields,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event) => {
    event.preventDefault();
       

    fetch("/api/users",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(fields)
        }).then(response => response.json()).
        catch(error => {
            console.log(error);
        })
    }
    return(
        <div className="container py-5">
            <div className="row justify-content-center">
                <form onSubmit={handleSubmit} className="col-sm-5 border border-primary p-3">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" onChange={handleInputChange}/>
                    </div>
                    <button className="btn btn-primary mt-3 w-full">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;