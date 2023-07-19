/*
YES I copied the example and re-factored it into an arrow function
this is a practice, I understand it, and I'm a bit under the weather
DON'T JUDGE ME! 
*/
const Person = (props) => {
    let vote = props.age >= 18 ? "Go vote!" : "Go study!";
  
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);
  
    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {props.name.slice(0, 6)}</li>
          <li>Age: {props.age}</li>
          <ul>
            Hobbies
            {hobbies}
          </ul>
        </ul>
        <h3>{vote}</h3>
      </div>
    );
  }