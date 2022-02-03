import {useState} from "react"
import ListItem from "./components/ListItem/ListItem"
import style from './App.module.scss'


function App(props) {
    const [takList, setTaklist] = useState([])
    const [takListCopy, setTaklistCopy] = useState([])
    const [flag, setFlag] = useState(true)
    const [inputValue, setInputValue] = useState('')
    const [id, setId] = useState(0)

    function changeInputHandler(event) {
        setInputValue(event.target.value)
    }

    function clickAddTask() {
        let task = {
            id: id,
            task: inputValue

        }
        setId(id + 1)
        setTaklist([...takList, task])
        setTaklistCopy([...takListCopy, task])
        setInputValue('')

    }

    const deleteTask = (id) => {
        let newArr
        let newArrCopy
        newArr = takList.filter((item) => item.id !== id)
        newArrCopy = takListCopy.filter((item) => item.id !== id)
        setTaklist(newArr)
        setTaklistCopy(newArrCopy)
    }

    const sortHandler = () => {
        let copyList

        if (flag) {
            setTaklistCopy(takList)
            copyList = [...takList]

            copyList.sort((a, b) => {
                if (b.task < a.task) {
                    return 1
                } else {
                    return -1
                }
            })
        } else {
            copyList = [...takListCopy]
        }

        setFlag(!flag)
        setTaklist(copyList) 
    }


    return (
        <div className={style.container}>
            <div className={style.top}></div>
            <div className={style.middle}>
            <h1 className={style.title}>Task Manager</h1>
            <div className={`${style.sortImage} ${flag ? "": style.active } `} onClick={() =>sortHandler()}></div>
            </div>
            <input className={style.inputBlock} value={inputValue} onChange={(event) => changeInputHandler(event)} type='text'/>
            
            <ul className={style.main}>
            
                
        
                
            
                {takList.map((elem) => {
                    return (
                        <ListItem elem={elem.task} index={elem.id} delete={deleteTask}/>
                    )
                })}
            </ul>
            <div className={style.wrapper} >
            <button className={style.button}  onClick={clickAddTask}>Добавить</button>
            </div>
        </div>
        
    );
}

export default App
