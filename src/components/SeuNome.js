function SeuNome({ setNome }){
    return (
        <>
            <p>Enter your name</p>
            <input 
                type="text" placeholder="Enter your name..." 
                onChange={(e) => setNome(e.target.value)}
            />
        </>
    )
}

export default SeuNome;