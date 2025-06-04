import style from "./Header.module.css"
import navItems from "../data/menu.js"

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
                {navItems.map((currListItem, index) => 
                <li key={index}><a href="">{currListItem.title}</a></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header