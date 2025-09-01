function Message(){
    const name = "ramon"
    var age =  18 //se estiver com algum valor o fluxo seguido vai ser do IF.

    function older(){
        if(age > 18) 
            return 'older' 
        else 
            return 'younger'
    }

    const url = 'https://placehold.co/150'

    if (age)
        return (
        <div>  
            <h1>hello {name} and {older()} </h1>
            <img src={url} alt="minha imag" />
        </div>
        )
    return(
        <div>
            <h1>Hello {name}</h1>
            <h1> no age</h1>    
        </div>              
    )
}

export default Message