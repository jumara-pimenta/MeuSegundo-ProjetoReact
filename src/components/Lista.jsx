import React, {useState, useEffect}from 'react'

const Lista = () => {
    const [repositorios, setRepositorios] = useState([])
    const [listaRepositorios, setListaRepositorios] = useState([])
    const [busca, setBusca] = useState('')

    useEffect(()=>{
        fetch('https://api.github.com/users/jumara-pimenta/repos')
            .then(resposta => resposta.json())
            .then(dados => setRepositorios(dados))
    },[])

    useEffect(()=>{
        setListaRepositorios(
            repositorios.filter(repo => {
                return repo.name.includes(busca)
            })
        )
    },[busca, repositorios])

    console.log(repositorios)

    return(
        <>
            <input placeholder="Busque um repositório" onChange={e=>{setBusca(e.target.value)}}/>
            {listaRepositorios.map(repo=> (
                <div key={repo.id}>
                    <p>{repo.name}</p>
                </div>
                
            ))}
        </>
    )


}

export default Lista
//https://api.github.com/users/jumara-pimenta/repos