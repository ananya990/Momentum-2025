import { useAppContext } from "@/app/context/ContextProvider";
import React, { useEffect, useState } from "react";

function Registrations({ search, loading }) {
  const { data } = useAppContext();

  return (
    <>
      { !loading?
        <div className="relative overflow-x-auto h-[79%] overflow-y-scroll">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
              <tr>
                {data &&
                  data.allPayments &&
                  Object.keys(data.allPayments[0] || []).map((heading, index) => {
                    return (
                      <th scope="col" className="px-6 py-3 text-start" key={index}>
                        {heading}
                      </th>
                    );
                  })}
              </tr>
            </thead>
            <tbody>
              {data &&
                data.allPayments &&
                data.allPayments.length>0 &&
                // <>{data.allPayments}</>

                data.allPayments.map((obj, index) => {
                  return (obj.email + "")
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                    (obj.college + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    (obj.fname + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    (obj.lname + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    (obj.role + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    (obj.gender + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    (obj.phone + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    (obj.tag + "").toLowerCase().includes(search.toLowerCase()) ||
                    (obj.year + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    (obj.user_verified + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    (obj.event_name + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    (obj.status + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    (obj.amount + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    (obj.currency + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    (obj.referral + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    (obj.team_name + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    (obj.user_tag + "")
                      .toLowerCase()
                      .includes(search.toLowerCase()) ? (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-nowrap"
                      >
                        {obj.id}
                      </th>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.event_name}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.status}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.amount}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.currency}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.referral}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.created_at}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.team_name}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.email}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.college}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.fname}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.lname}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.user_verified}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.gender}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.address}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.dob}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.phone}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.year}</td>
                      <td className="px-3 py-2 w-fit text-nowrap">{obj.user_tag}</td>
                    </tr>
                  ) : (
                    <React.Fragment key={index} />
                  );
                })}
            </tbody>
          </table>
        </div>
        :
        <>Loading...</>
      }
    </>
  );
}

export default Registrations;
