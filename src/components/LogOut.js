const LogOut = ({setCurrentUser}) => {
    return (
        <section>
            <button onClick={() => setCurrentUser("")}>Log Out</button>
        </section>
    )
}

export default LogOut;