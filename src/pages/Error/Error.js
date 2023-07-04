import React from 'react'
import {useNavigate} from 'react-router-dom'
import './../../App.css'
export default function Error() {
    const navigate=useNavigate();
    function handleBa(){
        navigate("/home")
    }
  return (
    <div className='errorpage'>
      <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAXVBMVEUdofL///8Am/EAnfIAmfERn/L0+v55wPbw+P5AqvOz2fqJx/fE4vvp9P0Al/HQ6Pw0p/NXsvSm1Pm53fppuPXd7/1vvPXW6/xOr/SZz/iXy/iDxPfL5PvJ5/tzuvU8JGyBAAADeElEQVRoge2aa7OrKgyGkYiK1Ravtdpz/v/P3Ggv0+WNBOzas2d4Pq2ZVXkTSEJAGfN4PB6Px+PxeDwej2cNMcHEX9EGroo2buuOhfDbFgiQt2sSjET5PVY/DRBfNod3WfBJUjL4MA3KmmyA4PhfpsGcaODi+U/RRxE5IETXIPVBJgt1TaYXADivK/13D+ZhZvJZkKL0oYjW1IOgYbJN82kt6Iuv9GM3hNGb6kGQv2alJTsPw/jcLTT9TrB8S/1NahxlAb9PT5amJ8PMoK2DgI8BqCjqgjVPy/fnTdRm3zlwVmcn0vK/ozljewaEjUE8OsEUgBk6jSe69wCN3NYX3Y7yxH9ZM4ZmQ5r7T/kgasOtiYPKOPePIXZcMMkHQbWxAJiwn5DUvJc/sjl5ldCZvHHuH7535JI79+siV3ZRaDHqeUGuOoxf5qOkSwP4CaG+F7qbwG05UCVnjQQvzeqpXe+h1sa6xCz82D4w8uSoeyAWsz+RVDXj/GkC783yhZ08FFsD5tmpG1sYITChZynPzuvuPyfhUvWtFPJ78kxtbuQUyDn/AuIj5JVl6AEqsozQdrqXeHutAUJMWTFwtpEH3Ubkaaxq1/VvrOTfO56rPLHNeCIUcis1Qe/wJ2Av6wm0lkXviKjXSCt1PfuHqOdWS8/wbdw+uHPaGoe4H9tFHsNt5iYSy6UfAdMRwszFeu7H6Fs9t1Own3u2eW+AJyGebRb6bvNfOcz9iBBO6Wfd6bwJC/vqe3V0XmcfwJmVF7t9r3YJPDYetcohjuM+s5Jv6HcqM8Bl23XKuof7Dt2W+8rryLPPfPewf/R8dtjvdZ+sXNeiyN0K3gvB7PKefoW9pW9TeF3L7QeIi8s52MtwnP6JWHYiyzuFDUCmJAPaI50f4bJv0BYMzuVuCYSs/h+Vhf3Rvj8Q4cpt15Kb3aHSBC9QGXj7iu9c4vqe0zfWHVSJCzz6WxujNg9bZOHJ1SHqAqaXwaCVuRzQ3Wa6eu1NV5dxXRRF3Q7lPUdne94eo66hVtnR9d13PjSAEc+Xl2LzhYsNglMMuB8r/jSgR9WZpJKHLfoPA4AVlaHTjq6D+t63CiJUz5fQq35nQ8e/UOU+DdC5L+PbfdZwR9d06MThK76ONuF8Vl0dnzRx3anwHPLf/j5E10LQiF//LsXj8Xg8Ho/H4/F4/hH+APPuJbWInaKbAAAAAElFTkSuQmCC'/> <h1>No such page!! click on Back to home button</h1>
<button onClick={handleBa} >Back To home</button>

    </div>
  )
}
