import React,{useState} from "react"


const Post =function(props){
    const [likes, setLikes] =useState(0) 
    const [dislikes, setDisikes] =useState(0) 

    function increment(){
        setLikes(likes+1)
      }
      function decrement(){
        setDisikes(dislikes+1)
      }  
  
    return(
    <div className="conteiner">
              <div className="post">
                    <div className="title">
                        <h1>{props.post.id}. {props.post.title}</h1>
                    </div>
                    <div className="description">
                        <h3>{props.post.desc}</h3>
                    </div>
                 
              </div>
              <div className="r">
                <div className="button">
                    <div className="like"> 
                            <h4 className="likes">{likes}</h4>
                            <h4 className="dislikes">{dislikes}</h4>
                    </div>
                    <div>
                    <button className="bb" type="button" onClick={increment}>Like</button>
                    <button className="bb" type="button"onClick={decrement}>Dislike</button>
                    </div>
                </div>
              </div>

          </div>)
}
export default Post