import style from "./ComicsList.module.css"

const ComicCard = ({img, title, index}) => {
   return (
    <div className={style.card}>
        <img src={img} alt="" />
        <h2>{title}</h2>
    </div>
    )
}

export default ComicCard;