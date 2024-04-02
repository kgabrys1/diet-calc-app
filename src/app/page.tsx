"use client";

import { useState } from "react";
import UserInputs from "./components/UserInputs";
import Results from "./components/Results";
import UserData from "./models/UserData"


export default function Home() {
  const [userData, setUserData] = useState(new UserData({
    gender: 'M',
    reductionIntensity: 'med',
    age: 25,
    height: 175,
    weight: 75,
    pal: 1.4,
    targetWeight: 70,
    startDate: new Date().toISOString().split('T')[0]
  }))

  function handleChange(inputId: string, newValue: string) {
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [inputId]: (inputId === "gender" || inputId === "startDate" || inputId === "reductionIntensity" ? newValue : +newValue)
      }
    })
  }

  return (
    <main className="flex font-Nunito min-h-screen flex-col items-center justify-between p-5 w-full space-y-2 bg-slate-950">
      <UserInputs onChange={handleChange} userInput={userData} />
      <Results userData={userData} />
    </main>
  );
}
