import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

// perceba q na chamada do componente 'Item' escrevemos 'propTypes' com 'p' minúsculo,
// enquanto o prop types na importação vem com 'P' maíusculo 
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Marca is missing',
    ano_lancamento: 2000,
}

export default Item;