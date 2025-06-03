import comics from "../data/comics.js";
import style from "./ComicsList.module.css"

const ComicsList = () => {
    return (
        <div className={style.main}>
            <div className={style.img}></div>
            <div className={style.container}>
                <div className={style.bacheca}>
                    {comics.map((currComic) => (
                    <div className={style.card}>
                        <img src={currComic.thumb} alt="" />
                        <h2>{currComic.title}</h2>
                    </div> 
                    ))}
                </div>
                <div className={style.btn}>
                    <a>LOAD MORE</a>
                </div>
            </div>
        </div>);
}

export default ComicsList;