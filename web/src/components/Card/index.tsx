import "./styles.sass";


interface IProps {
  name:string
  tel: string
}

function Card({name, tel}: IProps) {

  return (
    <tr>
      <td><h3>{name}</h3></td>
      <td><p>{tel}</p></td>
    </tr>
  )
}

export default Card;
