import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight ">
          MernEats.com
        </span>
        <div className="text-white font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of service</span>
        </div>
      </div>
    </div>
  );
}
