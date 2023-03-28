import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { auth } from "../../firebase";

function salir() {
  return auth.signOut()
  
}
export function Home(props) {
  return (
    <div>
      <div>
      
        <div className={styles.nav}>
          <img src='https://th.bing.com/th/id/R.0d250f79ab1e2b0b3772bea4e1ad9208?rik=b4c1e2d20Jxs3Q&riu=http%3a%2f%2fwww.padel-arena.com%2fimages%2fimages%2flogo+wpt.png&ehk=hRufctIVVewFcHwGa1IhMgNg50%2bKKNkodAiw1j53xw0%3d&risl=&pid=ImgRaw&r=0' alt='300' />
            <h2>¿Aún no eres miembro?</h2>
          <button className={styles.button}>
            <Link to="/login">Login</Link>
          </button>
          <br />
          <button className={styles.button}>
            <Link to="/signup" >Registrar</Link>
          </button>
        </div>
      </div>
      <h1 className={styles.sesion}>{props.name?`Bienvenido - ${ props.name}`:"Inicie sesión"}</h1>
      <img src="https://wallpapercave.com/wp/wp4283362.jpg" alt="300" className={styles.portada} 
      
      />
        <h1>¿Busca un pareja de padel? ¡Regístrate ahora!</h1>
        <h2>El sitio web de pareja de padel en Argentina</h2>
        <button className={styles.button} >
        <Link to="/signup" >Encuentra pareja de padel</Link> </button>
        <br />
      <button onClick={salir} className={styles.salir}>Salir</button>
     
    </div>
  );
}