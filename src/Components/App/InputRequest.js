import React, {useState} from 'react';
import sayKarenLogoWhite from '../../assets/sayKaren_logo-white_8.1.2019.png'

const InputRequest = () =>{
  const [request, setRequest] = useState(
    "....Build me a website"
  );
  const handleChange = event => setRequest(event.target.value);

  return(
    <div id="userChangeState">

      <section id="stateLogo">
        <img src={sayKarenLogoWhite}
              className="footerDetails"
              id="sayKarenLogoFrontPage"
              alt="sayKaren.com"
        />
      <Headline
        headline={request}
      />
      </section>
      <section
        id="requestState"
      >    
        <Input 
          value={request}
          onChangeInput={handleChange}
          
        >
          What do you want?
        </Input>
      </section>
    </div>
  );
};

const Headline = ({headline}) => (
    <h1>{headline}</h1>
);

const Input = ({value, onChangeInput, children}) => (
  <label>
    {children}
    <input 
      type="text"
      value={value}
      onChange={onChangeInput}
    />

  </label>
);

export default InputRequest;