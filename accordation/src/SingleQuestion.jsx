import {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({title,info}) => {

    const [showinfo,setShowinfo] = useState(true)

    const icons = showinfo ? <AiOutlineMinus /> : <AiOutlinePlus />

    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button onClick={() => setShowinfo(prevState => !prevState)} className="btn">{icons}</button>
            </header>
            <p>{showinfo && info}</p>
        </article>
    )
}

export default SingleQuestion;