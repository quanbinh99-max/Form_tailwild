import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRecoilState } from 'recoil';
import {DataState} from './Data'
import {useNavigate} from 'react-router-dom'

Login.propTypes = {
    
};

function Login(props) {    

    const [dataState, setDataState] = useRecoilState(DataState);

    const [phone,setPhone] = useState('') ;
    const [firstName,setFirstName] = useState('') ;
    const [lastName,setLastName] = useState('') ;
    const [email,setEmail] = useState('') ;

    const history = useNavigate()


    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleFirstName = (e) =>{
        setFirstName(e.target.value)
    }

    const handleLastName = (e) =>{
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        setDataState([...dataState,{
            phone  ,
            firstName ,
            lastName  ,
            email 
        }])


        setPhone('') ;
        setFirstName('') ;
        setLastName('') ;
        setEmail('') ;

        history('/page')
    }

    

    return (
        <div className="form border-2 w-1/2 h-4/5 m-auto rounded-xl p-9 bg-white top flex flex-col justify-between">
        <div className="text-center flex flex-col">
          <span className="text-3xl font-extrabold">Create account</span>
          <span className="" >Already have an account?<span className='text-teal-400 cursor-pointer underline'>Sign in</span></span>
        </div>
        <form className="flex flex-col">
          <input className='bg-slate-50 p-2 rounded-lg mb-4' placeholder="Phone" onChange={handlePhone} value={phone}/>
          <div className="flex mb-4">
            <input className='bg-slate-50 p-2 rounded-lg w-1/2' placeholder="First Name" onChange={handleFirstName} value={firstName} />
            <input className='bg-slate-50 p-2 rounded-lg w-1/2' placeholder="Last Name" onChange={handleLastName} value={lastName} />
          </div>
          <input type="gmail" className='bg-slate-50 p-2 rounded-lg  mb-4' placeholder="Email" onChange={handleEmail} value={email} />
          <button className='mb-5 bg-cyan-500 p-2 rounded-lg text-white relative' onClick={handleSubmit}>
            <span>Sign up </span>
            <i className="fa-solid fa-arrow-right absolute top-1/3 right-4"></i>
          </button>
        </form>
        <div>
          <input type="checkbox" />
          <span className='pl-2'>I have read and agreed to the <span className='text-teal-400'>Terms of Service</span></span>
        </div>
      </div>
    );
}

export default Login;