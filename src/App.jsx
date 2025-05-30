import Header from "./components/Header"
import Footer from "./components/Footer"
import Band from "./components/Band"
import Main from "./components/Main"

import style from "./App.module.css"

function App() {
  return (
    <>
      <div className={style.container}>

        <Header />
        <Main />
        <Band />
        <Footer />

      </div>
    </>
  )
}

export default App
