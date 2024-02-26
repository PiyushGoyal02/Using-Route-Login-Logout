import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Login({setlogin}){

    const navigator = useNavigate()

    function SubmitHandler(event){
        event.preventDefault();

        if(formdata.email != formdata.paswordinput){
            toast.success("Logged In")
            navigator('/deshbord')
            setlogin(
                <button></button>
            )
        }
    }

    const [inputfiled,setinputfield] = useState(false)

    const [formdata,setFormdata] = useState({email:"", paswordinput:""})

    function ValueChangeHandler(event){
        setFormdata (preformdata => {
            return {
                ...preformdata,
                [event.target.name] : event.target.value
            }
        })
    }

    return (

        <div className="Parent-Login">

            <div className="LeftSide-Login">
                <div>
                    <h3 className="Top-Hading-login-sign"> Welcome Back</h3>
                    <p className="buildSkill"> Build Skill for today,tomorrow and beyond. </p>
                    <p className="Education-Itag"> <i> Education to future-proof your career. </i> </p>
                </div>

                <form onSubmit={SubmitHandler}>

                    <div className="input-labels">

                        <label className="labeltext" htmlFor="EmailID"> Email Address. </label>
                        <input required onChange={ValueChangeHandler} name="email" value={formdata.email} className="inputTag" type="text" id="EmailId" placeholder="Enter Your Email"></input>

                        <label className="labeltext" htmlFor="password"> Password. </label>
                        
                        <div className="eyeicon">
                            <input required onChange={ValueChangeHandler} name='paswordinput' value={formdata.paswordinput} className="inputTag eyeInputTag" type={inputfiled ? ("type") : ("password")} placeholder="Enter Password" id="password"></input> 
                            
                            <span onClick={() => setinputfield((pre) => !pre)}> {inputfiled ? (<FaEye />) : (<FaEyeSlash />)}</span>
                        </div>

                        <div>
                            <p className="forgot">forgot password </p>
                        </div>

                    </div>


                    <div> <button className="ButtonSignIn"> Sign In </button> </div>
                </form>
                <div> <button className="googleSign"> <FcGoogle/> Sign in with Google </button> </div>

            </div>




            <div className="RightSide-login">
                <img src="https://www.thoughtco.com/thmb/xK9iZXYdcN7pW9T-NlVBsLZc-hc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/serious-young-student-writing-in-book-while-studying-at-table-in-university-1055843820-2f242753b132406491f57043db4ff8d6.jpg"></img>
            </div>


        </div>
    )
}

export default Login;