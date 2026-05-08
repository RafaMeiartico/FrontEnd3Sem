import "./MyChildren.css"

function MyChildren({ children }) {
    return(
        <div className="container"> {children} </div>
    )
}

export default MyChildren