"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EventForm from "./EventForm";
import Script from "next/script";
import { useAppContext } from "@/app/context/ContextProvider";
import events from "@/data/events.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EventFormWrapper({ eventId }) {
  // const ammount = 100;
  const [isProcessing, setIsProcessing] = useState(false);
  const { user } = useAppContext();
  const [rId, setRId] = useState("");
  const [members, setMembers] = useState([]);
  const [maxSize, setMaxSize] = useState(events[eventId].maxSize || 0);
  const [minSize, setMinSize] = useState(events[eventId].minSize || 0);
  const [teamName, setTeamName] = useState(undefined);
  const [type, setType] = useState(events[eventId].type);
  const [tc, setTc] = useState(false);

  useEffect(() => {
    const team = [];
    for (let i = 0; i < maxSize; i++) {
      if (i == 0) team.push({ name: "", rollNum: "" });
      else team.push({ name: "", rollNum: "" });
    }
    setMembers(team);
  }, [maxSize]);
   
  
  const handlePayment = async () => {
    let isValid = true;
    if (!tc) {
      myToast("Please accept terms & conditions.");
      isValid = tc;
    }
    if (events[eventId].type == "Team") isValid = validateDetails();
    if (isValid) {
      setIsProcessing(true);
      try {
        // create order
        const response = await fetch("/api/payment/createOrderId", {
          method: "POST",
          body: JSON.stringify({
            eventId,
            teamName,
            teamMembers: members,
            referral: rId
          }),
        });
        const data = await response.json();


        // initialize razprpay
        const options = {
          key: process.env.NEXT_PUBLIC_RPAY_KEY,
          amount: data.amount,
          currency: data.currency,
          name: "Momentum 2025",
          description: `Payment for ` + events[eventId].name,
          order_id: data.orderId,
          handler: async function (response) {
            setIsProcessing(true);
            // console.log("razorpay_payment_id", response.razorpay_payment_id);
            // console.log("razorpay_order_id", response.razorpay_order_id);
            // console.log("razorpay_signature", response.razorpay_signature);
            try {
              const rsp = await fetch("/api/payment/verify", {
                method: "POST",
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });
              if (rsp.status == 200) {
                // console.log("Payment verified!");
              }
              // console.log(rsp);
              setIsProcessing(false);
              window.location.reload();
            } catch (error) {
              console.log(error);
            }
            setIsProcessing(false);
          },
          prefill: {
            name: user.fname + " " + user.lname,
            email: user.email,
            contact: user.pNumber,
          },
          theme: {
            color: "#e75a54",
          },
        };

        let rzp1 = new window.Razorpay(options);
        rzp1.open();

        alert("**PAYMENT IN PROGRESS** Don't close the tab, else ticket won't be Generated. Page would be automatically redirected!")
      } catch (error) {
        // console.log("Payment Failed", error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const myToast = (msg) => {
    toast(msg, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
    });
  };

  function validateDetails() {
    if (!teamName) {
      // toast
      myToast("Team name is required");
      return false;
    } else if (teamName.length < 3) {
      // toast
      myToast("Please enter a longer team name");
      return false;
    } else if (maxSize != 0 && minSize != 0) {
      // toast
      for (let i = 0; i < minSize; i++) {
        const member = members[i];
        if (member.name == "" || member.rollNum == "") {
          myToast("Please Enter atleast " + minSize + " members details!");
          return false;
        }
      }
    }
    return true;
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="text-white flex flex-col space-y-10 lg:space-y-0 lg:flex-row sm:w-[100%] lg:space-x-5 justify-evenly z-30">
        <Image
          src={events[eventId].imgUrl}
          height={200}
          width={200}
          alt="p1"
          className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 w-full lg:w-96 h-auto "
        />
        <div className="flex flex-col space-y-2 w-full lg:w-3/5">
          <div className="bg-[#5A100B] rounded-md p-3 sm:p-5 max-h-[480px] overflow-y-scroll">
            <EventForm
              rId={rId}
              setRId={setRId}
              members={members}
              setMembers={setMembers}
              teamName={teamName}
              setTeamName={setTeamName}
              type={type}
              setTc={setTc}
              tc={tc}
            />
          </div>
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="mb-4 px-10 py-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
          text-white font-semibold shadow-lg transform transition-all duration-300s
            hover:scale-105 hover:shadow-[0_0_20px_rgba(255,105,180,0.8)] text-lg
            animate-pulse w-full"
          >
            {isProcessing ? "Processing..." : "Proceed To Pay!"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default EventFormWrapper;
