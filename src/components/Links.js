function Links(props){
    return (
        <>
            <h3>{props.title}</h3>
            <a href={props.url} rel="noreferrer" target={props.target}>Click here to acceess</a>
        </>

    )
}

export default Links;