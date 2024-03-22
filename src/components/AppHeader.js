import React, {useState} from 'react';
import  Button, {SelectButton} from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';


function AppHeader() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className={styles.appHeader}>
      <Button variant={'secondary'} onClick={() => setModalOpen(true)}>Add Task</Button>
      <SelectButton id="status">
         <option value="all">All</option>
         <option value="incomplete">Incomplete</option>
         <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}

export default AppHeader;