import '../App.jsx'

const ZombieFighters = (props) => {
    return (
        <div>
            <img src={props.fighter.img} />
            <p><span>{props.fighter.name}</span></p>
            <p><span>Price: </span>{props.fighter.price}</p>
            <p><span>Strength: </span>{props.fighter.strength}</p>
            <p><span>Agility: </span>{props.fighter.agility}</p>
        </div>
    )
}

export default ZombieFighters;