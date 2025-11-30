import styles from "./card.module.css"
import { useState } from "react"
export function MovieCard({image,title,op,age, rat,pod}){
    const [islike,setlike] = useState(false)
    const [israt,setrat] = useState(rat)
    const[ispal,setpal] = useState(false)
    const [ispod, setpod] = useState(false)
    return (
        <div className={styles.card}>
            <div className={styles.con_image}>
                <img src={image}/>
            </div>
            <div className={styles.con1}>
                <div className={styles.con_title}>
                   <h2>
                        {title}
                   </h2> 
                </div>
                    <div className={styles.con_rating}>
                        <h3 className={styles.h3_2}>
                           Рейтинг:{israt}
                        </h3>
                    </div>
            </div>
            <div className={styles.con_button_card_2}>
                <p>
                    {age}
                </p>
                    <div className={styles.con_button_card}> 
                        <button className={styles.button_6}
                        onClick={() => {
                            setlike(!islike)
                        }}
                        > {islike ? 
                            <img src="/icon_btn.png"  className={styles.img_1} /> 
                            :
                            <img src="/icon_btn_2.png" className={styles.img_1} />
                        }</button>
                        <button className={styles.button_6} onClick={() =>{
                            setpal(!ispal)
                           if(ispal == true){
                                setrat( prev => Number((prev - 0.1).toFixed(1)))
                            }
                           else{
                                setrat( prev => Number((prev + 0.1).toFixed(1)))
                            }
                    }}> {ispal ? 
                        <img src="/like2.png" className={styles.img_2} />
                        : 
                        <img src="/like1.png" className={styles.img_2} />
                        } </button>
                    </div>
            </div>
            <div>
                <h3 className={styles.h3_1}>
                    {op}
                </h3>
            </div>
             <button className={styles.button_7}
             onClick={()=>{
                setpod(!ispod)
             }}>{ispod ? "Закрыть" :"Подробнее"}</button>
             {ispod && (
                <div className={styles.ispod}>
                    <div>
                        <p className={styles.p_1}>
                            {pod}
                        </p>
                    </div>

                </div>
             )}
            
        </div>
    )
}