import styles from "./style/App.module.css";
import Header from "./component/Header";
import Buttons from "./component/Buttons";

function App() {
  return (
    <div className={styles.App__container}>
      <Header />
      <div className={styles.App__action_container}>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
