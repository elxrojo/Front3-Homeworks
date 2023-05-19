import './App.css'
import ComponenteLista from './components/ComponenteLista'
import CreadorTitulos from './components/CreadorTitulos'

function App() {
  return (
    <div className='fondo'>
      <div>
        <h1>Rapidos y furiosos</h1>
        <p>En la cuidad de Los Ángeles, el corredor de autos y ex convicto Dominic Toretto se vuelve sospechoso ante la policía de ser el responsable de una serie de robos a trailer llenos de costosos artefactos electrónicos, que se llevan a cabo de noche en la carretera. El oficial Brian O’Conner debe de meterse de infiltrado en el mundo de las carreras ilegales, y específicamente en el grupo de confianza de Toretto, para obtener pruebas de que es culpable y apresarlo. Pero las carreras se vuelven demasiado atractivas para Brian, además de que empieza a dejar de sospechar de Toretto y a enamorarse de su hermana, Mia. Ahora que Brian se ha ganado la confianza de Toretto, deberá decidir de qué lado está su lealtad: de lado del mundo de las carreras ilegales y los autos modificados o del lado de la ley. Rápido y furioso trae a la pantalla un mundo de autos modificados donde el límite de velocidad no existe.</p>
          <button onClick={() => console.log("like")}>
            Like
          </button>
        <CreadorTitulos title="Géneros"/>
        <ComponenteLista>
          <li>Acción</li>
          <li>Aventura</li>
          <li>Thriller</li>
          <li>Crimen</li>
        </ComponenteLista>
        
        <CreadorTitulos title="Actores"/>
        <ComponenteLista>
          <li>Vin Diesel</li>
          <li>Paul Walker</li>
          <li>Michelle Rodriguez</li>
          <li>Jordana Brewster</li>
          <li>Tyrese Gibson</li>
          <li>Jason Statham</li>
          <li>LudaCris</li>
          <li>Sung Kang</li>
        </ComponenteLista>
      </div>
    </div>
  )
}

export default App
