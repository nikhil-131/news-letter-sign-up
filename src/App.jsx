import { useState } from 'react'
import './App.css'
import list from "./assets/images/list.svg"
import mobile from "./assets/images/mobile.svg"
import success from "./assets/images/success.svg"
import desktop from "./assets/images/desktop.svg"

function App() {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);
  const [goodBye, setGoodBye] = useState(false)

  const handleChange = (event) => {
    setEmail(event.target.value)
    if (errorMsg === true) {
      setErrorMsg(false)
    }
  }

  const handleSubmit = (event) => {
    let pattern = /\b[a-z0-9.+-/]+@[a-z0-9]+\.[a-z]{2,}\b/;
    if (!pattern.test(email)) {
      setErrorMsg(true)
    }
    if (pattern.test(email)) {
      setGoodBye(true)
    }
  }

  return (
    <>
      {!goodBye &&
        <div className="container sm:w-[920px] w-full sm:h-[570px] min-h-[100vh] sm:min-h-0 bg-white sm:absolute flex flex-col sm:flex-row sm:justify-between top-0 bottom-0 left-0 right-0 sm:m-auto sm:rounded-2xl">
          <div className="left sm:w-[50%] w-full">
            <div className="left-main sm:w-[80%] w-full sm:h-full sm:mx-auto md:mt-8">
              <div className="mobile-img sm:hidden">
                <img className='w-full' src={mobile} alt="" />
              </div>
              <div className="main px-4 md:px-0">
                <div className="header">
                  <h1 className='text-[#2a2c3d] font-bold text-5xl py-6'>Stay updated!</h1>
                </div>

                <div className="details">
                  <p className='pb-4'>Join 60,000+ product managers receiving monthly updates on:</p>
                  <ul className='leading-8'>
                    <li><span className='flex gap-4'><img src={list} alt="" />Product discovery and building what matters</span></li>
                    <li><span className='flex gap-4'><img src={list} alt="" />Measuring to ensure updates are a success</span></li>
                    <li><span className='flex gap-4'><img src={list} alt="" />And much more!</span></li>
                  </ul>
                </div>

                <div className="email relative">
                  <p className='text-sm font-semibold py-2'>Email address</p>
                  {errorMsg &&
                    <p className='text-xs absolute top-[8%] right-0 text-red-600 font-medium'>Valid email required</p>
                  }
                  <input onChange={handleChange} className={`border-2 border-solid border-gray-300 w-full text-lg pb-2.5 pt-2 px-2 rounded-md ${errorMsg ? 'bg-red-100 text-red-500' : ''}`} type="email" name="" id="" placeholder='email@company.com' />
                  <button onClick={handleSubmit} className='bg-blue-950 text-white w-full py-3 my-5 rounded-md hover:bg-gradient-to-r hover:from-[#FF5478] hover:from-25% hover:to-[#FF693A] hover:shadow-[3px_3px_30px_-10px_#FF693A]' type="submit">Subscribe to monthly newsletter</button>
                </div>
              </div>
            </div>
          </div>
          <div className="right sm:w-[45%] sm:h-full hidden sm:block">
            <div className="right-image w-full h-full flex justify-center items-center">
              <img className='w-[93%] h-[545px] object-cover rounded-xl' src={desktop} alt="" />
            </div>
          </div>
        </div>
      }
      {goodBye &&
        <div className="byCcontainer w-[400px] h-[400px] bg-white absolute top-0 bottom-0 left-0 right-0 m-auto rounded-3xl p-8">
          <div className="success-img">
            <img className='w-10' src={success} alt="success icon" />
          </div>
          <div className="thanks py-4 flex flex-col gap-3">
            <h1 className='text-4xl font-bold'>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span className='font-bold'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
          </div>
          <div className="dismiss-button">
            <button onClick={() => setGoodBye(false)} className='bg-blue-950 text-white w-full py-3 mt-4 rounded-md hover:bg-gradient-to-r hover:from-[#FF5478] hover:from-25% hover:to-[#FF693A] hover:shadow-[3px_3px_30px_-10px_#FF693A]' type="submit">Dismiss message</button>
          </div>
        </div>
      }
    </>
  )
}

export default App
