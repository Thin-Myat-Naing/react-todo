import React from 'react';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from'./styles/modules/app.module.scss';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <PageTitle>Todo List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader/>
          <AppContent/>
        </div>
      </div>
    )
  }
}

export default App;
