import './Card.css'

function Card({title = "Por defecto", description = "Por defecto"}) {
    return (
    <div className="Card">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    )
}

export default Card;

// export vs export default: export se usa para multiples funciones o componentes, export default para uno solo