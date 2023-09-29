import './Intervalo.css'
import Card from './Card'
import { connect } from 'react-redux'

function Media (props) {
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

const mapStateToProps = (globalState) => {
  return {
    min: globalState.numeros.min,
    max: globalState.numeros.max
  }
}

export default connect(mapStateToProps)(Media)