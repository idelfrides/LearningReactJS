// import Item from "./Item";


function ShowClassesContent({ contentArray }){
    return (
        <>
            {contentArray.length > 0 ? (
                contentArray.map((item, index) => (
                    <ul>
                        <li key={index}>{ item }</li>
                    </ul>
                ))
            ):(
               <p>There is no itens in the list informed</p>
            )}
        </>
    )
}

export default ShowClassesContent;