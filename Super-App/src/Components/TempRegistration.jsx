import React,{useState,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {DevTool} from "@hookform/devtools" ;

import './Registration.css'

import partyImg from '../assets/party image.png'
import WebFont from 'webfontloader';  // installed webfontloader package for the font to be loaded directly from the Google Fonts website

 

function Registration() {

    // Calling in the fonts using useEffect Hook 
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Roboto', 'Single Day','DM Sans']
          }
        });
    }, []);

    // react-hook-form
    const form = useForm() ;
    const { register , control, handleSubmit, formState } = form ;
    const {errors} = formState ;
    // const { name,ref,onChange,onBlur } = register("field_ID")


    // retriving the localstroage data 
    // useEffect = (()=>{
    //     const storedformData = JSON.parse(localStorage.getItem('formData'))
    //     console.log('retrived value : ',storedformData);
    // },[])
    // ERROR  : [vite] warning: This assignment will throw because "useEffect" is an import 
    // 32 |
    // 33 |    // retriving the localstroage data  
    // 34 |    useEffect = (() => {
    // ERROR  : Assignment to constant variable 

    // const storedformData = JSON.parse(localStorage.getItem('formData')) ;

    // const initialformData = {
    //     name : "",
    //     username : "",
    //     email : "",
    //     mobile : 0,
    //     sharedata : false
    // }

    // These both not working cause somehow null is getting into the localStorage on refresh
    const [formData, setformData] = useState({});
    // const [formData, setformData] = useState({
    //     name : "",
    //     username : "",
    //     email : "",
    //     mobile : 0,
    //     sharedata : false
    // });

    useEffect(()=>{
        const storedformData = JSON.parse(localStorage.getItem('formData')) ;
        if (storedformData!==null) 
            setformData(storedformData);

        console.log('retrived value : ',storedformData);
    },[])

    useEffect(() => {
        console.log('formData Update detected : ',formData);
        console.log("Saving to localStorage");

        if (formData!==null) 
            localStorage.setItem('formData', JSON.stringify(formData))

    }, [formData]);


    // form Submission function
    const onSubmit = (data) => {
        console.log("Form submitted");
        console.log(data);

        // Create an new object to store the current form data
        const newFormData = {
            name: data.name,
            username: data.username,
            email: data.email,
            mobile: data.mobile,
            sharedata: data.sharedata,
        };

        // Add the newFormData object to the formData state
        setformData(newFormData);
    }

  return (
    <div className='loginbody'>

        <div className="lhs">
            {/* Left side of the Page */}

            <img src={partyImg} alt="partImg.exe has stopped working" />
            <div className="discover">
                <h1>Discover New Things on Super App</h1>
            </div>
        </div>

        <div className="rhs">
            {/* Right Side of the Page */}
            
            <div className='title'>
                <h1>Super App</h1>
                <span className='sub_title'>Create your new account</span>
            </div>

            <form className='formElement' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* noValidate prevents default browser validations */}

                <input type="text" placeholder='Name' id='name' {...register("name", {required:'Field is required'})} />
                <p className="errors"> { errors.name?.message } </p>
                {/* <br /> */}
                <input type="text" placeholder='Username' id='username' {...register("username" , {required:'Field is required'})}/>
                <p className="errors"> { errors.username?.message } </p>
                {/* <br /> */}
                <input type="text"  placeholder='Email' id='email' 
                    {...register("email" , { 
                        required:{
                            value:true,
                            message:'Field is required'
                        }, 
                        pattern:{
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message:"invalid email format"
                            }
                        }
                    )}
                />
                <p className="errors"> { errors.email?.message } </p>
                {/* <br /> */}
                <input type="text" placeholder='Mobile' id='mobile' {...register("mobile" , {required:'Field is required'})}/>
                <p className="errors"> { errors.mobile?.message } </p>
                {/* <br /> */}
                <div className='chkbox'>
                    <input type="checkbox" name="sharedata" id="sharedata" {...register("sharedata" , {required:'Check this box if you want to proceed'})} /><label htmlFor="sharedata">  Share my data with Superapp</label>
                    <p className="errors"> { errors.sharedata?.message } </p>
                </div>
                {/* <br /> */}
                <button className='signup_btn'>SIGN UP</button>
                <br />
                <div className='termsNconditions'>
                    <p>By clicking on Sign up. you agree to Superapp <a href="#">Terms and Conditions of Use</a></p>
                    
                    <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href="#">Privacy Policy</a></p>
                </div>
            </form>
            <DevTool control={control} />
        </div>
    </div>
  )
}

export default Registration