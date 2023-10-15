//bu orders sayfası zaten login le girildiği için seo derdi yok ..o yuzden client yaptık
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

function OrdersPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  //burda react query,tanstack query kullanacağız
  const { isLoading, error, data } = useQuery("orders", () =>
    fetch("http://localhost:3000/api/orders").then((res) => res.json())
  );
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ id, status }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries("orders");
    },
  });

  const handleSubmit = (e,id) => {
    e.preventDefault();
    const form = e.target;
    const input = form.elements[0];
    const status = input.value;

    mutation.mutate({ id, status });
  };

  if (isLoading || status === "loading") return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="w-full justify-center items-center py-36 border-y border-slate-400 bg-blackk ">
      <table className="w-full max-w-5xl mx-auto  text-slate-200 ">
        <tr className="text-left border-b border-slate-200 m-4">
          <th className="py-2 ">Order ID</th>
          <th className="">Date</th>
          <th>Price</th>
          <th>Products</th>
          <th className="pl-8">Status</th>
        </tr>

        {data.map((dt) => {
          return (
            <tr className="bg-gray-700 font-light " key={dt.id}>
              <td className="p-2 my-8"> {dt.id.slice(12)} </td>
              <td> {dt.createdAt.slice(0, 10)} </td>
              <td> {dt.price} </td>
              <td>{dt.products[0].title} </td>
              {session.user.isAdmin ? (
                <td>
                
                  <form
                    action=""
                    className="flex justify-around items-center my-4"
                    onSubmit={(e) => handleSubmit(e, dt.id)}
                  >
                    <p className="capitalize">  {dt.status}  </p>
                   <div>

              
                    <input
                      placeholder={dt.status}
                      className="items-center  ring-1  rounded
               ring-amber-800 text-slate-700 p-1 capitalize border-none"
                    />
                    <button className="p-1 bg-amber-900 rounded ml-2 tracking-wide  text-sm cursor-pointer ">
                      Edit
                    </button>
                    </div>
                  </form>
                  
                </td>
              ) : (
                <td className="capitalize  text-blackk"> {dt.status} </td>
              )}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default OrdersPage;
