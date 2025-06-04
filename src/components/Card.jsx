import ComicsList from "./ComicsList";
import style from "./ComicsList.Module.css";

const ComicCard = ({img, title}) => {
   return (
    <div className={style.card}>
        <img src={img} alt="" />
        <h2>{title}</h2>
    </div>
    )
}

export default ComicCard;