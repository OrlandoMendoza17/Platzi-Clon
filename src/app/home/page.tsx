"use client"

import AllSchool from "@/components/icons/AllSchool";
import { useEffect, useState } from "react";

const HomePage = () => {
  
  const [selectedSchool, setSelectedSchool] = useState([])
  const [schools, setSchools] = useState([])
  
  useEffect(() => {
  
  }, [])
  
  return (
    <main>
      <h2>Descubre las escuelas</h2>
      <div>
        <ul>
          <li>
            <AllSchool/>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default HomePage;