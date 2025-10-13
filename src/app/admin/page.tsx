'use client'
import Dashboard from "@/components/Dashboard";
import SidePanel from "@/components/SidePanel";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/ContextProvider";

function Admin() {
    
    const { data: session } = useSession();
    const {user}= useAppContext();

    console.log(user, session)

    const [panel, setPanel]= useState(0);
    return (
        <>
            {
                !(session && user && user.role=="admin")?
                <div className="h-full w-full flex items-center justify-center text-xl font-extralight">Not Authorised</div>
                :
                <div className='h-screen w-screen bg-[#1c1c1c] flex z-50'>
                    <SidePanel setPanel={setPanel} panel={panel}/>
                    <Dashboard panel={panel}/>
                </div>
            }
        </>
    )
}

export default Admin