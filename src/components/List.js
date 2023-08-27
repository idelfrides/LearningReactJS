import Item from './Item'

function List(){
    return (
        <>
            <h3>MY LIST TEST</h3>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1859} />
                <Item marca='Lamborghini'  ano_lancamento={1960}/>
                <Item marca='Bugatti' ano_lancamento={1970} />
                <Item marca='AUDI Q7' />
                <Item ano_lancamento={1700} />
                <Item />
            </ul>
        </>
    )
}

export default List;