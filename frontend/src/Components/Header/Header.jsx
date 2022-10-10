import './Header.css'
import { useSelector } from 'react-redux'
const Header = (props) => {
    const user = useSelector((state) => state.user)
    const { isEdit, setEdit } = props
    const handelOnClick = () => {
        setEdit(!isEdit)
    }
    return (
        <header style={{ backgroundColor: `${user.theme}`, backgroundImage: `linear-gradient(180deg, ${user.theme} 2%, ${user.theme}, 50%, #181818 100%) ` }}>
            <div className="info-container">
                <div className="info-edit" onClick={handelOnClick}>Edit</div>
                <img className='info-ava' src={user.ava} alt="ava" />
                <div className="info-username">{user.name}</div>
                <div className="info-age">{user.age}</div>
                <div className="info-about">{user.about}</div>
            </div>
        </header>
    );
}

export default Header;