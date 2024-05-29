import React from 'react'

function Cards({item}) {
  return (
    <>
      <div className='mt-4 my-3 p-3'>
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img src= "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1716432841~exp=1716433441~hmac=e56b5eebaa45511975ac3f596e299f6b5c07fb075935fb15df99ac96925fa185" alt="Books" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.Name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.Title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.Price}</div> 
      <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] badge badge-outline hover:bg-pink-500  hover:text-white duration-200 ">Buy Now</div>
    </div>
  </div>
</div>
      </div>

    </>
  )
}

export default Cards