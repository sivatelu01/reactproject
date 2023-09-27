import { Link } from "react-router-dom";
function Menu(){
    return(
        <div>
             <Link to="/">FruiteSearch</Link>  | 
             <Link to="/t">Todo</Link>  | 
             <Link to="/q">Quiz</Link>  | 
             <Link to="/a">Advicer</Link>  | 
             <Link to="/i">Avatar</Link>  | 
             <Link to="/tip">Tip</Link>  | 
             <Link to="/c">Coin1</Link>  | 
        </div>
    )
}
export default Menu;