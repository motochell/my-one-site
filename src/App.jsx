import styles from "./body.module.css"
import { useState } from "react"
import { MovieCard } from "./MovieCard.jsx"
import { films } from "./films.js"

function App(){
  const [isopen,setopen] = useState(false)
  const [isfilms,setopen1] = useState(false)
  const [issvet,setsvet] = useState(false)

  return (
  <>
  <div className={styles.layaut}>
    <header>
      <div>
        <h1 className={styles.h1_1}>
          Всё любимое
        </h1>
      </div>
      <div className={styles.con_b}>
          <div> <button className={styles.btn}>Фильмы</button> </div>
          <div> <button className={styles.btn}>Сериалы</button> </div>
      </div>
      <div>
        <button className = {styles.button_1} onClick={() => {
          if (isfilms == true || isopen == true){
            setopen(isopen)
          } else{
            setopen(!isopen)
          }
        }}>{isopen ? "Меню" : "Меню"}</button>
      </div>
      {isopen && (
        <div className={styles.open}>
          <div className={styles.con_btn}>
            <button  className={styles.button_2} onClick={() => {
            setopen(!isopen)
            }}>
            {isopen ? "❌" : "❌"}
            </button>
          </div>
          <div className={styles.con_btn_2}>
            <button className={styles.button_3}
            onClick={() => {
              setopen1(!isfilms);
              setopen(!isopen)
            }}
            >{isfilms ? "Любимое" : "Любимое"}</button>
            <button className={styles.button_3} onClick={() => 
            setsvet(!issvet)
            }>{issvet ? "🌇" : "🏙️"}</button>
            <button className={styles.button_3}>выход </button>
          </div>
        </div>
      )}
      {isfilms && (
        <div className={styles.isfilms}> 
            <div className={styles.con_btn}>
              <button className={styles.button_4} onClick={() => {
                setopen1(!isfilms)
                if (isopen == false){
                  setopen(!isopen)
                }
              }}>{isfilms ? "❌": "❌"}
              </button>
            </div>
            <div className={styles.con_content}>
                <div className={styles.con_films_contents}>
                  <div className={styles.con_h3}>
                    <h3>Фильмы</h3>
                  </div>
                  <div>
                  </div>

                </div>
                <div className={styles.con_serials_contents}>
                  <div className={styles.con_h3}>
                    <h3>Сериалы</h3>
                  </div>
                  <div>
                  </div>
                </div>
            </div>
        </div>
      )}
    </header>

    <main>
      <div className={styles.fullcard}>
      {films.map(film => 
        <MovieCard 
        key = {film.id}
        image ={film.image}
        title ={film.title}
        op = {film.op}
        age = {film.age}
        rat = {film.rating}
        pod = {film.pod}
        />
      )}
      </div>
    </main>


    <footer>
        <h1><a href="https://vk.com/vnaumov3">by Motochell</a></h1>
    </footer>
    
  </div>
  
  </>
  );
}
export default App
