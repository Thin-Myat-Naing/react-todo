import React from 'react';
import {format} from 'dated-fns/esm';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';

function TodoItem({ todo }) {
  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
         []
         <div className={styles.texts}>
            <p className={getClasses([styles.todoText, 
               todo.status === 'complete' && styles['todoText--completed']])}>{todo.title}
            </p>
            <p className={styles.time}>
               {format(new Date(todo.time), 'p, MM/dd/yyyy')}
            </p>
         </div>
      </div>
      
    </div>
  )
}

export default TodoItem
