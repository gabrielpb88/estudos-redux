import './Intervalo.css'
import Card from './Card'
import { connect } from 'react-redux'

const Soma = (props) => {
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

const mapStateToProps = (globalState) => {
  return {
    min: globalState.numeros.min,
    max: globalState.numeros.max,
  }
}

export default connect(mapStateToProps)(Soma)