import React from 'react'
import styles from './hello.module.scss'

const hello = (props) => {
  const { name, surname } = props
  return (
    <div className={styles.wrapper_hello}>
      Hello,
      {name}
      {surname}
    </div>
  )
}

export default hello
