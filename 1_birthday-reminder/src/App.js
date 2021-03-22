import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const initState = data;
  const [friends, setFriends] = useState(initState);
  const clearAll = () => {
    setFriends([]);
  }
  return (
   <main>
     <section className="container">
      <h3>{friends.length} birthdays Today</h3>
      <List friends={friends} />
      <button onClick={clearAll}>Clear all</button>
     </section>
   </main>
  );
}

export default App;
