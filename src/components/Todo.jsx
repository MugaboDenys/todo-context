import { useContext, useState } from "react"
import {MdDelete, MdModeEditOutline} from "react-icons/md"
import {IoCheckmarkSharp} from "react-icons/io5"
import { TodoContext } from "../context/TodoContext";

const Todo = ({children, id, complete}) => {
    const {toggleCompleted, handleDelete} = useContext(TodoContext);
    const [edit, setEdit] = useState(false)

    const handleEdit = () =>{
        setEdit(prevEd=>!prevEd)
    }

    const handleUpdate =() =>{
        console.log(edit)
        handleEdit()
    }

    return ( 
        <div className="flex justify-between group w-[32rem] py-2 pl-2 mt-5 border-b-2">
            <div className="flex gap-x-2">
                <input type="checkbox" id={id} onChange={()=>{toggleCompleted(id)}} checked={complete} />
                <label htmlFor={id} className={`${complete && "line-through"}`}>{children}</label>
            </div>
            <div className="flex gap-3">
                <MdModeEditOutline className={`text-green-600 cursor-pointer ${edit ? "hidden":"block"} `} onClick={handleEdit} />
                <IoCheckmarkSharp className={`text-green-600 cursor-pointer ${edit ? "block":"hidden"} `} onClick={handleUpdate} />
                <MdDelete className="text-red-600 cursor-pointer " onClick={()=>{handleDelete(id)}}  />
            </div>
        </div>
     );
}
 
export default Todo;