import React from "react";
import SubscribeForm from "./SubscribeForm";

export default function Subscribe() {
  return (
    <div className="flex flex-col items-center justify-center my-8 text-center">
      <span className="text-[#6941C6] text-sm font-semibold ">Newlatters</span>
      <h3 className="с-h3 pt-3 ">Stories and interviews</h3>
      <p className="pt-6 pb-10 max-w-[550px] ">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      <SubscribeForm />
    </div>
  );
}
