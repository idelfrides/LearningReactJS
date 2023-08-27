import { useState } from 'react'

function Form() {
    function userRegister(e){
        //pára a execução normal do forms para executar as instruções seguintes
        e.preventDefault() 
        
        // console.log(fname)
        // console.log(password)
        console.log('User was Registered successfuly!!!')
        
        //ATENÇÃO: a interpolação de valores é feita com apóstrofe ( ` )e não aspas simples ( ' )
        console.log(`User: ${fname} ${lname}  | Password: ${password}`)
    }

    // const ['variavel para tratar/resgatado valor', 'método para setar valor'] = HOOK do react
    const [fname, setFirstName] = useState('Mr. IJ')
    const [lname, setLastName] = useState()
    const [password, setPassword] = useState()

    return (
        <div onSubmit={userRegister}>
            <h3>Users Register </h3>
            <form>
                <div>
                    <label htmlFor='fname'>First Name:</label>
                    <input 
                        type="text" id='fname' name='fname' 
                        placeholder="Enter your first name"
                        value={fname}
                        onChange={(e) => setFirstName(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor='lname'>Last Name:</label>
                    <input 
                        type="text" id='lname' name='lname' 
                        placeholder="Enter your last name"
                        onChange={(e) => setLastName(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input 
                        type='password' id='password' name='password' 
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    )
}

export default Form;