import React,{useState} from 'react'

function Loginform({Login, error}) {
  const [details,setDetails] =useState({name:"",email:"",password:""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>LOGIN</h2>
        {(error != "") ? (<div className="error">{error}</div>) : ""}
        <div className="form-group">
          <label htmlFor="name">name:</label>
          <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
          </div>
          <div className="form-group">
          <label htmlFor="email">email:</label>
          <input type="email" name="email" id="email"  onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
          </div>
          <div className="form-group">
          <label htmlFor="passworld">passworld:</label>
          <input type="passworld" name="passworld" id="passworld"  onChange={e => setDetails({...details, passworld: e.target.value})} value={details.passworld}/>
          </div>
         <input type="submit" value="LOGIN" />
      </div>
    </form>
  )
}

export default Loginform
