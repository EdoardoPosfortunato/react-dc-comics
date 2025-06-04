import style from "./Band.module.css"

function Band() {
  return (
    <>
      <div className={style.band}>
        <div className={style.container}>
          <div className={style.band}>
            <img src="/buy-comics-digital-comics.png" alt="" />
            <h1>DIGITAL COMICS</h1>
          </div>
          <div className={style.band}>
            <img src="/buy-comics-merchandise.png" alt="" />
            <h1>DC MERCH</h1>
          </div>
          <div className={style.band}>
            <img src="/buy-comics-subscriptions.png" alt="" />
            <h1>SUBSCRIPTION</h1>
          </div>
          <div className={style.band}>
            <img src="/buy-comics-shop-locator.png" alt="" />
            <h1>COMICS SHOP</h1>
          </div>
          <div className={style.band}>
            <img src="/buy-dc-power-visa.svg" alt="" />
            <h1>DC POWER</h1>
          </div>

        </div>
      </div>
    </>
  )
}

export default Band