

//bu orders sayfası zaten login le girildiği için seo derdi yok ..o yuzden client yaptık

import React from "react";



const getDaya=async()=>{

  const res= await fetch("http://localhost:3000/api/orders")



return res.json()

}


async function OrdersPage() {


const data=await getDaya()



  return (
    <div className="w-full justify-center items-center py-36 border-y border-slate-400 bg-blackk">
      <table className="w-full max-w-5xl mx-auto  text-slate-200 ">
        <tr className="text-left border-b border-slate-200 m-4">
          <th className="py-2 ">Order ID</th>
          <th className="">Date</th>
          <th>Price</th>
          <th>Products</th>
          <th>Status</th>
        </tr>
{data.map((dt,index)=>{

    return(

        <tr className="bg-gray-700 font-light " key={dt.id}>
          <td className="p-2 my-8"> {dt.id} </td>
          <td>   {dt.createdAt} </td>
          <td> {dt.price} </td>
          <td>    {dt.products} </td>
          <td>  {dt.status} </td>
        </tr>
    )
  })
}

{/*         <tr className="bg-gray-700 font-light ">
          <td className="p-2 my-8">19879706906898</td>
          <td>15.03.1980</td>
          <td>36.40 €</td>
          <td>Big Burger Menu(2),Veggie Pizza(2),Coca cola1L(1) </td>
          <td>On the way-10 mınutes</td>
        </tr>

        <tr className="bg-gray-700 font-light ">
          <td className="p-2 my-8">19879706906898</td>
          <td>15.03.1980</td>
          <td>36.40 €</td>
          <td>Big Burger Menu(2),Veggie Pizza(2),Coca cola1L(1) </td>
          <td>On the way-10 mınutes</td>
        </tr> */}
      </table>
    </div>
  );
}

export default OrdersPage;
