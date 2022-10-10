import '../MakePost/makePost.css'
const Input = (props) => {
    const { data, setData, label, isTextArea, className } = props


    return (
        <>
            <label>{label}</label>
            {isTextArea ? <textarea type="text" className={className} placeholder={data} onChange={(e) => setData(e.target.value)}></textarea>
                : <input type="text" placeholder={data} onChange={(e) => setData(e.target.value)} />
            }


        </>
    );
}

export default Input;