import './Intervalo.css'
import Card from './Card'
import { connect } from 'react-redux'

function Sorteio (props) {
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

const mapStateToProps = (globalState) => {
  return {
    min: globalState.numeros.min,
    max: globalState.numeros.max,
  }
}

export default connect(mapStateToProps)(Sorteio)