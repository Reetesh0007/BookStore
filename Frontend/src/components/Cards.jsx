import React from 'react'

function Cards({item}) {
  return (
    <>
      <div className='mt-4 my-3 p-3'>
      <div className="card w-64 h-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img src={item.Image} alt={item.Name} />
    </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.Name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.Title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">INR {item.Price}</div> 
      <a href={item.Buy} className=" cursor-pointer px-2 py-1 rounded-full border-[2px] badge badge-outline hover:bg-pink-500  hover:text-white duration-200 ">Buy Now</a>
    </div>
  </div>
</div>
      </div>

    </>
  )
}

export default Cards