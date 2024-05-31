import React from 'react';
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

function About() {
    return (
        <>
     <Navbar/>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 my-3 p-3'>
  <div className="card w-99 glass max-w-screen-2xl container mx-auto md:px-20 px-4  bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
    <figure><img src="https://t4.ftcdn.net/jpg/02/06/08/17/240_F_206081712_UIakzhPr6Qig2z24IBNLki0BDtrjVHiq.jpg"  alt="car!"/></figure>
    <div className="card-body">
      <h2 className="card-title">Our Story</h2>
      <p>Welcome to our bookStore!<br/>
         We are passionate about bringing the joy of reading to our community. Get to know the faces behind our bookstore. We're a team of book lovers dedicated to helping you find ypur favorite read.
      </p>
      <div className="card-actions justify-end">
        <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Read more..!</button>
      </div>
    </div>
  </div>

  <div className="card w-99 glass max-w-screen-2xl container mx-auto md:px-20 px-4  bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
    <figure><img src="https://img.freepik.com/free-photo/stack-books-with-library-scene_91128-4327.jpg?t=st=1717151861~exp=1717155461~hmac=c4a23062dc1cd2b44f55e0ec368107accae910f212a5d09cc8e0864f2c4a1250&w=1380" alt="car!"/></figure>
    <div className="card-body">
      <h2 className="card-title">Book Selection</h2>
      <p>Explore our diverse collection of books, ranging from bestsellers to hidden gems in various genres. Pick popular book series and popular author from our collection 
      </p>
      <div className="card-actions justify-end">
        <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Read more..!</button>
      </div>
    </div>
  </div>
</div>

<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 my-3 p-3'>
<div className="card card-side  bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://m.media-amazon.com/images/I/81MQH++0erL._AC_UY327_FMwebp_QL65_.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New releases!</h2>
    <p>A Stranger in the Family: The new 2024 detective crime thriller that will have you gripped and on the edge of your seat <br/>(Maeve Kerrigan, Book 11).</p>
    <div className="card-actions justify-end">
      <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fapi%2Fbifrost%2Facquisitions%2Fv1%2Factions%2Farn%3Aaction%3Apa%3A1%3AQjBDRlE2MzFaNDpBVFZQREtJS1gwREVSOkJ1eTpudWxsOjAuOTk6VVNEOm51bGw%3D%3Fcsrf%3Dg8nPk67da57SIVDdJsFPX8R9QZwrlIfe5jYItZCI2MfhAAAAAQAAAABmWar8cmF3AAAAAKs%252BFBXVfD4nuL9rqj%252BgAw%253D%253D%26x-client-id%3Debook-dp%26payment.mode%3Done-click%26items%255B0%255D.audibleNarration.audibleAsin%3D%26ref_%3Ddbs_p_ebk_r00_pbcb_cv1c00%26items%255B0%255D.audibleNarration.addNarration%3D0%26items%255B0%255D.audibleNarration.audibleOurPrice%3D%26submit.one-click-order.x%3DBuy%2Bnow%2Bwith%2B1-Click&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Buy Now</a>
    </div>
  </div>
</div>

<div className="card card-side  bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src="https://m.media-amazon.com/images/I/81fQ45GldnL._AC_UY327_FMwebp_QL65_.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New featured!</h2>
    <p>Those Empty Eyes: A Chilling Novel of Suspense with a Shocking Twist.</p>
    <div className="card-actions justify-end">
      <a href="https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=amazon_checkout_us&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcheckoutportal%2Fenter-checkout.html%3Fie%3DUTF8%26asin%3D1496744977%26buyNow%3D1%26cartCustomerID%3D0%26fromSignIn%3D1%26isGift%3D0%26offeringID%3D%25252Bpke9GXp0TCKCly8MDMB4Kt15WQIfX5EggNDLRZIDlAo9wqePdkptpE%25252Fb52yPQAp1MvQGhjmFi7Z6did0Dy58nIwIjg8lUDEJrpijksntZjL14QMSBob2O06WnTAeVlfl6lShImGuocokMX4jXzUjg%25253D%25253D%26purchaseInputs%3DHASH%25280x7f956cf8fb10%2529%26quantity%3D1%26sessionID%3D139-4468213-6414464&pageId=amazon_checkout_us&showRmrMe=0&siteState=IMBMsgs.&suppressSignInRadioButtons=0" className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Buy Now</a>
    </div>
  </div>
</div>

</div>
{/* --------------------------------------FAQs-------------------------------------------- */}
<div className="collapse collapse-arrow bg-base-200 mt-2 mb-5 ">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  What types of books do you carry?
  </div>
  <div className="collapse-content"> 
    <p>We offer a wide range of books including fiction, non-fiction, academic texts, children’s books, and more.</p>
  </div>

<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How can I contact the bookstore for more questions?
  </div>
  <div className="collapse-content"> 
    <p>You can reach us via phone or  email. </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How can I find a specific book in your store?
  </div>
  <div className="collapse-content"> 
    <p>Our books are organized by genre and author. You can also ask any of our staff for assistance or use our in-store search kiosk</p>
  </div>
</div>
</div>

     <Footer/>
        </>
       )
}

export default About