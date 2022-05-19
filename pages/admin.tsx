import React, {useState} from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
  const [category, setCategory] = useState<string>('')
  const [contents, setContents] = useState<string>('')
  const [link, setLink] = useState<string>('')

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
      toast.error('모든 항목을 입력해주세요.', toastMessage)
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
        <input type='text' className='inputValue' placeholder='분류' onChange={(e) => setCategory(e.target.value)}/><br/><br/>
        <input type='text' className='inputValue' placeholder='내용' onChange={(e) => setContents(e.target.value)}/><br/><br/>
        <input type='text' className='inputValue' placeholder='URL' onChange={(e) => setLink(e.target.value)}/><br/><br/>
        <button className='registerButton' onClick={register}>등록</button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Admin;