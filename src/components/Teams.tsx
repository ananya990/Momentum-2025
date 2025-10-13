import { useAppContext } from '@/app/context/ContextProvider';
import React from 'react'

function Teams({search, loading}) {
  const {data}= useAppContext();
  return (
    <>
      {
        !loading?
        <div className="relative overflow-x-auto h-[79%] overflow-y-scroll">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
              {data &&
                data.teams &&
                Object.keys(data.teams[0] || []).map((heading, index) => {
                  if(heading=="__v" || heading=="teamMembers") return <React.Fragment key={index}></React.Fragment>
                  else{
                    return (
                      <th scope="col" className="px-6 py-3" key={index}>
                        {heading}
                      </th>
                    );
                  }
                })}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.teams &&
              data.teams.length>0 &&
              [...data.teams].map((obj, index) => {
                return (
                  (
                    (obj.eventName+"").toLowerCase().includes(search.toLowerCase())|| 
                    (obj.teamName+"").toLowerCase().includes(search.toLowerCase())
                  )?
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {obj._id}
                    </th>
                    <td className="px-3 py-2 w-fit text-nowrap">{obj.eventName}</td>
                    <td className="px-3 py-2 w-fit text-nowrap">{obj.teamName}</td>
                    <td className="px-3 py-2 w-fit text-nowrap">{obj.status}</td>
                    <td className="px-3 py-2 w-fit text-nowrap">{obj.orderId}</td>
                  </tr>
                  :
                  <React.Fragment key={index}/>
                );
              })}
          </tbody>
        </table>
      </div>
      :
      <>Loading</>
      }
    </>
  )
}

export default Teams
