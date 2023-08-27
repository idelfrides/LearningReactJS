function Greeting({ nome }){

    function makeGreeting(nome){
        return `Hello, ${nome} How are you?`
    }

    return(
        <>
            {nome && <p>{makeGreeting(nome)}</p>}
        </>
    )
}

export default Greeting;