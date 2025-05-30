import style from "./Header.module.css"

function Header() {
  return (
    <>
      <div>
        <div className={style.container}>
          <div className={style.header}>
            <div >
              <img src="/dc-logo.png" alt="" />
            </div>
            <div className={style.listDivision}>
              <ul>
                <li><a href="">CHARACTERS</a></li>
                <li><a href="">COMICS</a></li>
                <li><a href="">MOVIES</a></li>
                <li><a href="">TV</a></li>
                <li><a href="">GAMES</a></li>
                <li><a href="">COLLECTIBLES</a></li>
                <li><a href="">VIDEOS</a></li>
                <li><a href="">FANS</a></li>
                <li><a href="">NEWS</a></li>
                <li><a href="">SHOP</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header