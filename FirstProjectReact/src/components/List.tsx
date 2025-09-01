import Item from './Item'

function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca='Nissan' ano_lancamento={2012}/>
                <Item marca='BMW' />

                <li>Computador</li>
                <li>Controle</li>
            </ul>
        </>
    )
}

export default List