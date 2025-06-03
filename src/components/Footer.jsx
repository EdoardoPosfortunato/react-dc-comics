import style from "./Footer.module.css"

function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style.totalList}>
            <div className={style.flexList}>
              <h2>DC COMICS</h2>
              <ul>
                <li>Characters</li>
                <li>Comics</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
            <div className={style.flexList}>
              <h2>DC COMICS</h2>
              <ul>
                <li>Characters</li>
                <li>Comics</li>
                <li>Lorem</li>
              </ul>
            </div>
            <div className={style.flexList}>
              <h2>DC COMICS</h2>
              <ul>
                <li>Characters</li>
                <li>Comics</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
            <div className={style.flexList}>
              <h2>DC COMICS</h2>
              <ul>
                <li>Characters</li>
                <li>Comics</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.signNow}>
        <div className={style.container}>
          <div className={style.flex}>
            <div>
              <div className={style.btn}>SIGN-UP NOW!</div>
            </div>
            <div className={style.icons}>
              <p>FOLLLOW US</p>
              <img src="/footer-facebook.png" alt="logo" />
              <img src="/footer-twitter.png" alt="logo" />
              <img src="/footer-youtube.png" alt="logo" />
              <img src="/footer-pinterest.png" alt="logo" />
              <img src="/footer-periscope.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer