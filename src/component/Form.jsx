import { useState } from "react";

export default function Form() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('')
    const [submitted,setSubmitted] = useState(false)

    const handleSubmit= (e)=>{
        e.preventDefault()
        if(name && email){
            setSubmitted(true)
        }
    }
  return (
    <div className="form-container">
       <form onSubmit={handleSubmit}>
       <h1>This is form for testing</h1>
        <label>Name</label>
        <input type="text"  onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter your full" data-testid="name-input"/>
        <label>Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter your email" data-testid="email-input"/>
        <button type='submit' data-testid="button-input" >Submit Button</button>
       </form>
       {
        submitted && <p data-testid="success-test" style={{padding:"3rem",border:'2px solid green',color:'green'}}>Form submitted successfully!</p>
       }
    </div>
  )
}