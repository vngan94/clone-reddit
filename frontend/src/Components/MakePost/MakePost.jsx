import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../Input/Input";
import { createPost } from "../redux/postSlice";
import './makePost.css'

const MakePost = (props) => {
    const { setMakingPost } = props
    const [title, setTitle] = useState('Add a title')
    const [description, setDescription] = useState('What do you wanna say?')
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"]
    const [selectedIndex, setSelectedIndex] = useState()
    const dispatch = useDispatch()
    const handelOnSubmit = (e) => {
        setMakingPost(false)
        const newPost = {
            title: title,
            description: description,
            tag: selectedIndex
        }

        dispatch(createPost(newPost))
    }

    return (
        <section className="makepost-container">
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handelOnSubmit}>Post</p>
            </div>
            <Input className="makepost-title" label="Title" isTextArea={true} data={title} setData={setTitle} />
            <Input className="makepost-desc" label="Descriptions" isTextArea={true} data={description} setData={setDescription} />
            <label>Tags</label>
            <div className="makepost-tags">
                {tags.map((item, index) => {
                    return (
                        <button key={index} className={index === selectedIndex ? `makepost-tags-selected` : `makepost-tags-${item}`} onClick={() => setSelectedIndex(index)}>{item}</button>
                    )
                })}
            </div>


        </section >
    );
}

export default MakePost;