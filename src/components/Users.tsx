import { useAppContext } from '@/app/context/ContextProvider';
import React from 'react'

function Users({search, loading, data}) {
  return (
    <>
      {
        !loading?
        <div className="relative overflow-x-auto h-[79%] overflow-y-scroll">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
              {data &&
                data.allUsers &&
                Object.keys(data.allUsers[0] || []).map((heading, index) => {
                  if(heading=="__v" || heading=="events") return <React.Fragment key={index}></React.Fragment>
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
              data.allUsers &&
              data.allUsers.length>0 &&
              data.allUsers.map((obj, index) => {
                return (
                    (
                      obj.email.toLowerCase().includes(search.toLowerCase()) || 
                      obj.collegeName.toLowerCase().includes(search.toLowerCase()) || 
                      obj.fname.toLowerCase().includes(search.toLowerCase())|| 
                      obj.lname.toLowerCase().includes(search.toLowerCase())|| 
                      // obj.role.toLowerCase().includes(search.toLowerCase())|| 
                      obj.gender.toLowerCase().includes(search.toLowerCase())|| 
                      (obj.pNumber+"").toLowerCase().includes(search.toLowerCase())|| 
                      (obj.tag+"").toLowerCase().includes(search.toLowerCase())|| 
                      (obj.year+"").toLowerCase().includes(search.toLowerCase())
                    ) ?
                    <>
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-nowrap"
                        >
                          {obj._id}
                        </th>
                        <td className="px-3 py-2 w-fit text-nowrap">{obj.email}</td>
                        <td className="px-3 py-2 w-fit text-nowrap">{obj.collegeName}</td>
                        <td className="px-3 py-2 w-fit text-nowrap">{obj.fname}</td>
                        <td className="px-3 py-2 w-fit text-nowrap">{obj.lname}</td>
                        <td className="px-3 py-2 w-fit text-nowrap">{obj.createdAt}</td>
                        <td className="px-3 py-2 w-fit text-nowrap">{obj.modifiedAt}</td>
                        {/* <td className="px-3 py-2 w-fit text-nowrap">{obj.role}</td> */}
                        <td className="px-3 py-2 w-fit text-nowrap">{obj.userVerified+""}</td>
                        <td className="px-3 py-2 w-fit text-nowrap">{obj.gender}</td>
                        <td className="px-3 py-2 w-fit text-nowrap">{obj.address}</td>
                        <td className="px-3 py-2 w-fit text-nowrap">{obj.dob}</td>
                        <td className="px-3 py-2 w-fit text-nowrap">{obj.pNumber}</td>
                        <td className="px-3 py-2 w-fit text-nowrap">{obj.tag}</td>
                        <td className="px-3 py-2 w-fit text-nowrap">{obj.year}</td>
                      </tr>
                    </>
                    :
                    <React.Fragment key={index}/>
                );
              })}
          </tbody>
        </table>
      </div>
      :
      <>Loading...</>
      }
    </>
  )
}

export default Users
