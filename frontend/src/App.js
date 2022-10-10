
import { useState } from 'react';
import './App.css';
import Edit from './Components/Edit/Edit';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MakePost from './Components/MakePost/MakePost';
import Posts from './Components/Posts/Posts';

function App() {
  const [isEdit, setEdit] = useState(false)
  const [isMakingPost, setMakingPost] = useState(false)
  const [name, setName] = useState("Danniel")
  const [age, setAge] = useState(20)
  const [about, setAbout] = useState("I'm a software engineer")

  return (
    <div className="App">

      {isEdit
        ?
        <  Edit setEdit={setEdit} />
        : isMakingPost ?
          <>

            <Header setEdit={setEdit} />
            <MakePost setMakingPost={setMakingPost} />
            <Footer setMakingPost={setMakingPost} isMakingPost={isMakingPost} />
          </>
          :
          <>
            <Header setEdit={setEdit} />
            <Posts />
            <Footer setMakingPost={setMakingPost} isMakingPost={isMakingPost} />

          </>

      }
    </div>
  );
}

export default App;
