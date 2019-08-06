import React, {useState} from 'react';
import useInterval from 'react-useinterval';

const LogoState = () =>{
  
  const workStates = {
    0: "...Build me a website",
    1: "...Teach me to code",
    2: "...Write in Vanilla JavaScript",
    3: "...Market my business",
    4: "...Test my website",
    5: "...Build a React website"
  };
  
  const [greeting, setGreeting] = useState(workStates[0]);

  const handleChange = () => {
    //Filter function to an Object
    Object.filter = (obj, predicate) =>
      Object.keys(obj)
            .filter(key=> predicate(obj[key]) )
            .reduce( (res, key) => (res[key] = obj[key], res), {}
    );

    // Determine last variable item so I move back to first object in workStates
    var comparing = Object.filter(workStates, x => x === "...Build a React website");
    //Variable to determine the last item to know when to change it back to 0 in the object workStates
    var lastItem = Object.values(comparing).toString();

    //greeting and CurrentValue is a string originally "...Build a React website" string to be concise
    var currentValue = Object.filter(workStates, x => x === greeting); //  {0: "...Build me a website"} object
    var currentKey = Object.keys(currentValue); // pulls the key of that currentValue

    var workingOn = currentKey[0]; // string
    var currentKeyValue = parseInt(workingOn);
 
    if (greeting !== lastItem){
      var finalResultAdded = currentKeyValue +1;
      setGreeting(workStates[finalResultAdded]);
    }else{
      setGreeting(workStates[0])
    };

  };

  useInterval(handleChange, 1000, 5);
  
  return(
    <div>
      <div 
        value={greeting}
      >
        {greeting}
      </div>
      <section
        id="inputState"
      >    
      </section>
    </div>
  );
};




export default LogoState;