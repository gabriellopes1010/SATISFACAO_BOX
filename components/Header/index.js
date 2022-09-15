import React from "react"
import styles from './styles.module.css'
import Link from "next/link"

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className="container mx-auto">
          <Link href='/'>
            <a><img className="mx-auto" src="/logo_satisfacaobox.png" alt="satisfação Box Logo" /></a>
          </Link>
        </div>
      </div>
      <div className={styles.wrapper2}>
        <Link href='/sobre'>
          <a className="px-1 hover:underline font-bold text-white">Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className="px-1 hover:underline font-bold text-white">Contato</a>
        </Link>
        <Link href='/pesquisa'>
          <a className="px-1 hover:underline font-bold text-white">Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  )
}
export default Header