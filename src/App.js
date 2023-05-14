// Displayling data

// =============================================>

// import './App.css';

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// function App() {

//   return (
//     <div className="App">
//      <h1>{user.name}</h1>
//      <img
//      src = {user.imageUrl}
//      alt = {'Photo of ' + user.name}
//      style = {
//       {
//         width : user.imageSize,
//         height: user.imageSize
//       }
//      }
//      />
//     </div>
//   );
// }

// export default App;

// <=============================================


// Rendering List in React

// =============================================>

// import './App.css';

// const products = [
//   { title: 'Cabbage', id: 1 },
//   { title: 'Garlic', id: 2 },
//   { title: 'Apple', id: 3 },
// ];

// const listItems = products.map(product => 
//   <li key={product.id}>
//     {product.title}
//   </li>
// );

// function App() {

//   return (
//     <div className="App">
//       <h2>Rendering List in React</h2>
//       <ul>{listItems}</ul> 
//     </div>
//   );
// }

// export default App;

// <=============================================

// Responding to events

// =============================================>

// import './App.css';

// const clickKorchenBhai = () => {
//     alert('Click Korchen Alter Toh Dekhaitei Hobe...!');
// }

// function App() {
//   return (
//     <div className="App">
//       <button onClick={clickKorchenBhai}>Click koren!</button>
//     </div>
//   );
// }

// export default App;

// <=============================================

//  Updating button seperately

// =============================================>

// import './App.css';
// import { useState } from 'react';

// const MyButton = () => {

//   const [count, setCount] = useState(0);

//   const clickKorche = () => {
//     setCount(count + 1)
//   }

//   return (
//     <button onClick={clickKorche}>
//       Clicked {count} times
//     </button>
//   )
// }

// function App() {

//   return (
//     <div className="App">
//       <MyButton />
//       <br/>
//       <MyButton />
//     </div>
//   );
// }

// export default App;

// <=============================================

// Sharing data between components

// =============================================>

import './App.css';
import { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }

  // sending the props in {count, onClick} to the MyButton
  const MyButton = ({count, onClick}) => {

    return (
      <button onClick={onClick}>Click {count} me</button>
    );
  }

  return (
    <div className="App">
      <h2>Sharing data between components!</h2>
      {/* sharing data between buttons */}

      <MyButton count={count} onClick={handleClick}/>
      <br />
      {/* here count and onClick is the props value we have to pass in order to make the workable */}
      <MyButton count={count} onClick={handleClick}/>
      <br />
      <MyButton count={count} onClick={handleClick}/>
      <br />
    </div>
  )
}

export default App;


// <=============================================
