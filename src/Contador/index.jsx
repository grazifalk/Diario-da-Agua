import { useState } from "react"
import './styles.css'

export const Contador = () => {

    const [contador, setContador] = useState(0)
    const [mls, setMls] = useState(200)
    const [total, setTotal] = useState(0)
    const [metaDiaria, setMetaDiaria] = useState(2000)
    const [mensagem, setMensagem] = useState()
    const [horario, setHorario] = useState("")

    function somar() {
        if ((mls > 0)) {
          if ((metaDiaria > 0)) {
            setContador(prevState => prevState + 1)
            setTotal(prevState => prevState + mls)
            setHorario(horario + new Date().toLocaleString() +  " ✔ " )
          } else {
            setMensagem("A quantidade de ML deve ser maior que 0")
          }
    
          if ((total + mls) >= metaDiaria) {
            setMensagem(<h3>"Arrasou!!! Atingiu a meta diária!"</h3>)
          }
        } else {
          setMensagem("Valor inválido! A quantidade deve ser maior que 0.")
        }
    
      }

      function zerar() {
        setContador(0)
        setMls(200)
        setMetaDiaria(2000)
        setTotal(0)
        setMensagem()
        setHorario("")
      }

    return (
<>
      <main>
        <h1>💧Consumo diário de água!💦</h1>
        <h2>Medida do copo em ml</h2>
        <input type="number" min={0} value={mls} onChange={e => setMls(parseInt(e.target.value))} placeholder='Medida' />
        <h2>Meta diária em ml</h2>
        <input type="number" min={0} value={metaDiaria} onChange={e => setMetaDiaria(parseInt(e.target.value))} placeholder='Meta diária' />
        <div>
          <button onClick={somar}>Beber</button>
          <button onClick={zerar}>Zerar</button>
          <h3>Copos: {contador}</h3>
          <h3>Total de água consumida: {total} ml </h3><br />
        </div>
        <h4>{mensagem}</h4>
      </main>
      <section className="horario">
      <h3 className="relatorio">Relatório de consumo</h3>
        <p className="hora">{horario}</p>
      </section>
    </>
    )
}
