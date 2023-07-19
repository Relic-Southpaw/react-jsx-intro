/*
FirstComponent
renders an h1 with the text “My very first component”.
*/

const FirstComponent = () => {
    return (
        <h1>
            My very first component
        </h1>
    )
}

ReactDOM.render(<FirstComponent />, document.getElementById("root"))