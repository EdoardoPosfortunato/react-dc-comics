import style from "./Band.module.css"

function Band() {
  return (
    <>
      <div className={style.band}>
        <div className={style.container}>
          <p>--- Questo è il Band ---</p>
        </div>
      </div>
    </>
  )
}

export default Band