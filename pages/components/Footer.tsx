import React from 'react';
import { MdOutlineFoodBank } from 'react-icons/md'
import { FiBell } from 'react-icons/fi'
import { BiHome } from "react-icons/bi";
import { useRouter } from "next/router";

const footer = () => {
  const router = useRouter()

  const home = () => {
    router.push('/');
  }

  const food = () => {
    router.push('/food');
  }

  const notice = () => {
    router.push('/notice');
  }

  return (
    <div className="footer">
      <div className='icoFlax'>
        <BiHome onClick={home} size='40' className='Home-Icon' />
        <MdOutlineFoodBank onClick={food} size='40' className='Food-Icon'/>
        <FiBell onClick={notice} size='40' className='Notice-Icon' />
      </div>
      <p className='copyRight'>©2022 - GBSW High School</p>
    </div>
  )
}
export default footer