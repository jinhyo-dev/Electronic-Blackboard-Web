import React, {useState} from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
  const [category, setCategory] = useState<string>('')
  const [contents, setContents] = useState<string>('')
  const [link, setLink] = useState<string>('')
  const QueryhandleParam = setValue => e => setValue(e.target.value)

  let today = new Date()
  let time = today.toLocaleString()

  const toastMessage: ToastOptions = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }

  const register = async() => {
    event.preventDefault()
    if (!category || !contents || !link) {
      toast.error('공백이 있으면 등록 할 수 없습니다 !', toastMessage)
    }
    else {
      const res = await fetch("./api/reg", {
        method: "post",
        body: JSON.stringify({time, category, contents, link}),
      }).then((res) => res.json());
      if (res.success) {
        toast.success('등록 성공 !', toastMessage)
        setCategory('')
        setContents('')
        setLink('')
      }
    }
  }

  return (

    <div>
      <form className='box'>
        <h1>Register</h1>
        <input type='text' className='inputValue' placeholder='분류' onChange={QueryhandleParam(setCategory)}/><br/><br/>
        <input type='text' className='inputValue' placeholder='내용' onChange={QueryhandleParam(setContents)}/><br/><br/>
        <input type='text' className='inputValue' placeholder='URL' onChange={QueryhandleParam(setLink)}/><br/><br/>
        <input type='reset' className='registerButton' value="등록" onClick={register}/>
      </form>
    </div>
  );
}

export default Admin;