import React from 'react';
import "./todo.css";

document.getElementById("root").style.height = "100vh";


const Todo = () => {
  return (
    <>
        <div className='containet-fluid position-relative w-100 h-100 m-0 p-0'>
            <div className='header row m-0 p-0 position-relative'>
                <div className='col-md-2 m-0 p-0 position-relative d-flex align-items-center justify-content-center'>
                    <h1 className='m-0 p-0 position-relative' style={{color: 'rgb(39, 131, 170)'}}>TODO</h1>
                </div>
                <div className='col-9 m-0 p-0 position-relative d-flex align-items-center justify-content-center'>
                    <div className='m-0 p-0 position-relative w-75 h-50'>
                        <input type="text"  style={{backgroundColor: 'rgba(10, 10, 10, 0.71)'}} className='form-control m-0 p-0 position-relative w-100 h-100' />
                    </div>
                </div>
                <div className='col-1 m-0 p-0 position-relative d-flex align-items-center justify-content-center'>
                    <button className='btn btn-outline-success'>add</button>
                </div>
            </div>
            <div className='contant row m-0 p-0 position-relative'></div>
            <div className='footer row m-0 p-0 position-relative'></div>
        </div>    
    </>
  )
}

export default Todo