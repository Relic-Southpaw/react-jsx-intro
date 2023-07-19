const App = () => (
    <div>
<Tweet
user = "user1"
name = "Gene Eric"
date = "August 7th 2013"
message = "just making it work"
/>
<Tweet
user = "rocketMan"
name = "Kimmy J"
date = "August 7th 2013"
message = "FIRE!!!!"
/>
<Tweet
user = "InvaderOfMars"
name = "Musky"
date = "August 7th 2013"
message = "Dogecoin to the moon!"
/>
<Tweet
user = "Bored"
name = "Slowe Gough"
date = "August 7th 2013"
message = "practice"
/>
    </div>
  )



ReactDOM.render(<App />, document.getElementById("root"))