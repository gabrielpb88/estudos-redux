import './Intervalo.css'
import Card from './Card'
import { connect } from 'react-redux'

const Intervalo = (props) => {
  const { min, max } = props
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo</strong>
          <input
            type="number"
            value={min}
          />
        </span>
        <span>
          <strong>Máximo</strong>
          <input
            type="number"
            value={max}
          />
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

export default connect(mapStateToProps)(Intervalo)