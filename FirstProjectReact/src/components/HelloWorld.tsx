//https://www.youtube.com/watch?v=2cNLJlbudPU&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=7
type Props = {
    nome: string;
    idade: number;
}

function HelloWorld({nome , idade}: Props){
    return (
        <div>
            <h1>meu componente</h1>
            
            <h1>ola {nome} {idade} blz?</h1>
        </div>
    )
}

export default HelloWorld