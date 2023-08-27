import { useState } from "react";

function Conditional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function sendEmail(e){
        e.preventDefault()
        console.log('Email sent successfuly!')
        setUserEmail(email)
    }

    function cleanEmail(){
        setUserEmail('')
    }

    return (
        <div>
            <h3>Email Registration</h3>
            <form>
                <input type='email' placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit"  onClick={sendEmail}>Send Email</button>
                {userEmail && (
                    <div>
                        <p>The user email is -- {userEmail}</p>
                        <button onClick={cleanEmail}>Clean Email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Conditional;