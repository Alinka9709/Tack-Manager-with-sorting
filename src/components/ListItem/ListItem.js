import React from "react"
import style from './ListItem.module.scss'


function ListItem(props) {
return (
    <li key={props.index} className={style.container}>
        <p>{props.elem}</p>
        <button className={style.buttonDelite} onClick={() => {
            props.delete(props.index)}}>
                
            </button>
        

    </li>
);
}
export default ListItem;