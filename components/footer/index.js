import React from "react";
import styles from './styles.module.css'
const Footer = () => {
  return (
    <div className={styles.wrapperfooter}>
      <div className={styles.wrapperbaseboard}>
        Projeto desenvolvido por:{' '}
        Gabriel Lopes /{' '}
        <a className='hover:underline' href="https://www.linkedin.com/in/gabriel-lopes-1241b2171/">Linkedin</a> /{' '}
        <a className='hover:underline' href="https://github.com/gabriellopes1010">Github</a>
        <div className="mt-1">
          <img className='inline p-2' src="/ESCOLHA_CERTA.png" />
          <img className='inline p-2' src="ESCOLHA_VALIOSA.png" />
        </div>
      </div>
    </div>
  )
}
export default Footer