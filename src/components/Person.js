function Person({ name, age, profession, photo }){
    return(
        <div>
            <img src={photo}  alt={name} />
            <p>NAME:  {name}</p>
            <p>AGE:  {age}</p>
            <p>PROFISSION:  {profession}</p>
        </div>
    )
}

export default Person;