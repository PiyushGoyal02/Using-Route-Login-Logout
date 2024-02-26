import React, { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Signup({setlogin}){

    const [formDataSignup,setFormDataSignup] = useState({
        createpasword:"", confirmpassword:""
    })


    function ChangeHandler(event){
        setFormDataSignup(predataSignup => {
            return{
                ...predataSignup,
                [event.target.name] : event.target.value
            }
        })
    }

    const navigator = useNavigate();

    function submitHandler(event){
        event.preventDefault();
        
        if(formDataSignup.createpasword != formDataSignup.confirmpassword){
            toast.error("Don't Match Your Password")
        }else {
            navigator("/deshbord")
            toast.success('Account Created')
            setlogin(<button></button>)
        }
    }

    return(
        <div className="toplevelsign">
            <div className="Left-Side-Signin">
                <div>
                    <h3 className="JointheMillions"> Join the Millions learning to <br/> code with StudyNotion for free </h3>
                    <p className="buildSkill"> Build Skill for today,tomorrow and beyond. </p>
                    <p className="Education-Itag"> <i> Education to future-proof your career. </i> </p>
                </div>

                <div className="Two-Buttons">
                    <button className="onebutton"> Student </button>
                    <button className="secondbutton"> Instructor </button>
                </div>

                <form onSubmit={submitHandler}>

                    <div className="firstlastName">
                        <div className="firstn">
                            <label className="firstlastnaam"> First Name </label>
                            <input required name="firstnaam" className="inputSignup" type="text" placeholder="Enter first name"></input>
                        </div>

                        <div className="lastn">
                            <label className="firstlastnaam"> Last Name </label>
                            <input required name="secondnaam" className="inputSignup" type="text" placeholder="Enter last name"></input>
                        </div>
                    </div>


                    <div className="Emil-password">
                        
                        <div className="createEmail-sign">
                            <label className="firstlastnaam"> Email Address </label>
                            <input required name="emailvalue" className="createemailsignup" type="text" placeholder="Enter emil Address"></input>
                        </div>

                        <div className="password-confirm">
                            <div className="pass">
                                <label className="TextCrete-confir-password">Crete Password</label>
                                <input required value={formDataSignup.createpasword} onChange={ChangeHandler} name="createpasword" className="createtext-confirmpassword" type="text" placeholder="Enter Password"></input>
                            </div>

                            <div className="pass">
                                <label className="TextCrete-confir-password">Confirm Password</label>
                                <input required value={formDataSignup.confirmpassword} onChange={ChangeHandler} name="confirmpassword" className="createtext-confirmpassword" type="text" placeholder="Confirm Password"></input>
                            </div>

                        </div>

                        <div> <button className="ButtonSignIn"> Create Account </button> </div>
                        <div> <button className="googleSign"> <FcGoogle/> Sign in with Google </button> </div>

                    </div>

                </form>

            </div>

            <div className="Right-Side-Signup">
                <img src="https://www.pocketprep.com/wp-content/uploads/2021/03/Do-I-need-a-study-group_thumbnail.jpg"></img>
            </div>
        </div>
    )
}

export default Signup