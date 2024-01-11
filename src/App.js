import React, { useState } from "react";
import Post from "./conponents/Post";
import './conponents/styles/main.css'
import Button from "./conponents/UI/MyButton/Button";
import Input from "./conponents/UI/MyInput/Input";

function App() {
    const [posts, setPost] = useState([
      {id: 1, title:'Car 1', desc: 'Descrition'},
      {id: 2, title:'Car 2', desc: 'Descrition'},
      {id: 3, title:'Car 3', desc: 'Descrition'},
      {id: 4, title:'Car 4', desc: 'Descrition'},
      {id: 5, title:'Car 5', desc: 'Descrition'}
      
    ])
    const [title, setTitle] = useState("")

    const Add = (event) => {
      event.preventDefault()
      alert('Кнопка була натиснута!');
      console.log(title)

    }
    return(
      <div className="main">
        <h1 className="t">Створення поста</h1>
        <form>
          
          <Input 
            value={title} 
            onChange={event => setTitle(event.target.value)}
            type="text"
            placeholder="Заголовок"/>

          <Input type="text" placeholder="Опис"/>
          <Button onClick={Add} >Додати пост</Button>

        </form>
        <h1 className="t">Пости</h1>
          {posts.map(post => 
            <Post post={post} key={post.id}/>
            )}
          
      </div>
    )
}

export default App;
