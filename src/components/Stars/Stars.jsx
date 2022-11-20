import React from "react"
import { Star } from "../Star/Star";
import styles from './styles.module.css';


export const Stars = ({count}) => {
  if (count < 1 || count > 5 || !Number(count)) {
    return null;
  }

  return (
    <ul className={styles.cardBodyStars}>
      {Array(count).fill(1).map((_, index) => <Star key={index} />)}
    </ul>
  )
}

Stars.defaultProps = {
  count: 0
}
