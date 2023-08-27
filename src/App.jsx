import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "./App.scss";
import Friends from "./components/Friends";
import Main from "./components/Main";

const API_KEY =
  "https://social-app-28df4-default-rtdb.europe-west1.firebasedatabase.app/";
const firebaseConfig = {
  databaseURL:
    "https://social-app-28df4-default-rtdb.europe-west1.firebasedatabase.app/",
};

function App() {
  const [data, setData] = useState(false)
  useEffect(() => {
    
    async function fetchData() {
      try {
        const firebaseApp = initializeApp(firebaseConfig);
        const database = getDatabase(firebaseApp);
        const starCountRef = ref(database, "Users/");
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          // #TODO
          // Parse JSON data to a mappable js object
          // const map = new Map(Object.entries(JSON.parse(data))); - doesn't work
          console.log(map);
          setData(data);
        });
        // console.log(database);
      } catch {(err) => {
        console.log(err)
      }}
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Main data={data}/>
      <Friends />
    </div>
  );
}

export default App;
