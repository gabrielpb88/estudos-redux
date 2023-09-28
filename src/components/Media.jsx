import './Intervalo.css'
import Card from './Card'

export default props => {
  const { min, max } = props
  const media = (min + max)/2
  return (
    <Card title="Média dos Números" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{media}</strong>
        </span>
      </div>
    </Card>
  )
}
