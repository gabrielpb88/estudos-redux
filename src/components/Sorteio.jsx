import './Intervalo.css'
import Card from './Card'

export default props => {
  const { min, max } = props
  const sorteio = Math.round(Math.random() * (max - min) + min) 

  return (
    <Card title="Sorteio no intervalo" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{sorteio}</strong>
        </span>
      </div>
    </Card>
  )
}
