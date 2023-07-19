const P = (props) => {
	return (
			<p>My name is {props.name}</p>
	);
};

const Me = () => (
    <p>
 <P
 name= "Rob"
 />
 </p>
)

ReactDOM.render(<Me />, document.getElementById("root"))
