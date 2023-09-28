import './Intervalo.css'
import Card from './Card'

export default props => {
  const { min, max } = props
  const soma = min + max
  return (
    <Card title="Soma dos Números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{soma}</strong>
        </span>
      </div>
    </Card>
  )
}
