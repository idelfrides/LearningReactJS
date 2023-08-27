function DevList( { itens }){
    return (
        <>
            <h3>List of programming language and frameworks:</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))) : (
                <p>There is no itens in the list informed</p>
            )}
        </>
    )
}

export default DevList;