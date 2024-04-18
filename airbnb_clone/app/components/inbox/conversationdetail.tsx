'use client';
import CustomButton from "../forms/custombutton";


const ConversationDetail=()=>{
    return (
      <>
      <div className="max-w-[480px] overflow-auto flex flex-col space-y-4">asdf
        <div className ="w-[80%] px-4 py-6 rounded-xl bg-gray-200">
        <p className="font-bold text-gray-500">jom</p>
        <p>esrxdcftgvyhbujnikmo</p></div>
        <div className ="w-[80%] ml-[20%] px-4 py-6 rounded-xl bg-gray-200">
        <p className="font-bold text-gray-500">jomwdwegerg</p>
        <p>esrxdcftgvyhbujnikmo</p></div></div>
      <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
        <input 
        type='text'
        placeholder="type your message..."
        className="w-full p-2 bg-gray-200 rounded-xl"></input>
        <CustomButton
          label="send"
          onClick={()=> console.log("Clicked")}
          className="w-[100px]"
          />
        </div> 
        
        </>
    )}
export default ConversationDetail;