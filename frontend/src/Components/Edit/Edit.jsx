import Input from "../Input/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/userSlice";
import "./Edit.css"
const Edit = (props) => {
    const { setEdit } = props
    const avaUrls = [
        "https://preview.redd.it/sgbrrbxevb061.png?auto=webp&s=58a4bc6761d51e964ef1779250c1380c7bc306fb",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62DaaFJhZ4Xi5xfw3l3E191AYjX0xYpAr2jqBMCo2VMIbJKi5kMfr6rae9vljcqRecHg&usqp=CAU",
        "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
        "https://preview.redd.it/uva3svtz8pv51.png?auto=webp&s=e5300592beccba170fa6b4d0ca7ed2f35c2a69ab",
        "https://i.redd.it/fz79mztmwpv61.png",
        "https://preview.redd.it/xt0nk6yxcgw51.png?auto=webp&s=58a18b159995b900a2a4a8aa4bae02b210837ded"
    ]
    const user = useSelector((state) => state.user)

    const [name, setName] = useState(user.name)
    const [age, setAge] = useState(user.age)
    const [about, setAbout] = useState(user.about)
    const [theme, setTheme] = useState(user.theme)
    const [ava, setAva] = useState(user.ava)

    const updatedUser = {
        name: name,
        age: age,
        about: about,
        theme: theme,
        ava: ava
    }
    const dispatch = useDispatch()
    dispatch(update(updatedUser))
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setEdit(false)
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <section className="edit-container">
                <button className="close" >SAVE</button>
                <div className="edit-profile">Edit Profile</div>
                <div className="input-container">
                    <Input label="Display name" data={name} setData={setName} />
                    <Input label="Age" data={age} setData={setAge} />
                    <Input label="About" data={about} setData={setAbout} isTextArea={true} />
                    <label>Profile Picture</label>
                    <div className="input-image-container">
                        {avaUrls.map(item => {
                            return (
                                <img src={item} className="input-image" alt="avatar" onClick={(e) => setAva(e.target.src)} />
                            )
                        })}
                    </div>
                    <div className="theme-container">
                        <label>Theme</label>
                        <input className="theme-color" type="color" onChange={(e) => setTheme(e.target.value)} />
                    </div>

                </div>
            </section>
        </form >
    );
}

export default Edit;