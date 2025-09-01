type Props = {
    marca : string;
    ano_lancamento? : number;
}

function Item({marca = "marca", ano_lancamento = 2025} : Props){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

export default Item