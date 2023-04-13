import { useContext, useState } from "react"
import {MdDelete, MdModeEditOutline} from "react-icons/md"
import {IoCheckmarkSharp} from "react-icons/io5"
import { TodoContext } from "../context/TodoContext";

const Todo = ({children, id, complete}) => {
    const {toggleCompleted, handleDelete, todo, setTodo} = useContext(TodoContext);
    const [edit, setEdit] = useState(false);
    const [newInput, setNewInput] = useState("")

    const handleEdit = () =>{
        setEdit(prevEd=>!prevEd)
        setNewInput(children)
    }

    const handleEnter = (event) => {
        if(event.key === "Enter"){
            handleUpdate(id)
        }
      }

    const handleUpdate =(id) =>{
        setTodo(prevTodo=> prevTodo.map(obj=> obj.id === id ? {...obj, inputV: newInput} : obj))
        handleEdit()
    }

    return ( 
        <div className="flex justify-between group w-[32rem] py-2 pl-2 mt-5 border-b-2">
            <div className="flex gap-x-2">
                <input type={edit ? "text" : "checkbox"} id={id} onKeyDown={handleEnter} onChange={edit ? (event)=>{setNewInput(event.target.value)} :()=>{toggleCompleted(id)}} value={edit && newInput} checked={complete} className={`${edit && "w-[25rem] outline-none"}`}/>
                <label htmlFor={id} className={`${complete && "line-through"}`}>{!edit && children}</label>
            </div>
            <div className="flex gap-3">
                <MdModeEditOutline className={`text-green-600 cursor-pointer ${edit ? "hidden":"block"} `} onClick={handleEdit} />
                <IoCheckmarkSharp className={`text-green-600 cursor-pointer ${edit ? "block":"hidden"} `} onClick={()=>{handleUpdate(id)}} />
                <MdDelete className="text-red-600 cursor-pointer " onClick={()=>{handleDelete(id)}}  />
            </div>
        </div>
     );
}
 
export default Todo;