"use client";
import { useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [countries, setCountries] = useState<any>([]);
  async function checkSupabaseConnection() {
    try {
      const { data, error } = await supabase.from("Countries").select("name");
      if (error) {
        console.error("Error checking Supabase connection:", error);
      } else {
        console.log("Supabase connection successful:", data);
        setCountries(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function createCountry() {
    try {
      const { data, error } = await supabase
        .from("Countries")
        .insert([{ id: 78, name: "RUSSIA" }]);
      if (error) {
        console.error("Error creating country:", error);
      } else {
        console.log("Country created successfully:", data);
      }
      
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="flex flex-col gap-5 p-10">
      <h1 className="font-bold">Next.js + Cypress + Vercel + Supabase</h1>
      <h2 className="text-blue-400">Countries</h2>
      <ul>
        {countries.map((country: any, index: number) => (
          <li className="list-disc" key={index}>
            {country.name}
          </li>
        ))}
      </ul>
      <button
        className="bg-yellow-400 w-[250px] p-3"
        onClick={checkSupabaseConnection}
        data-cy="getCountries"
      >
        Check Supabase Connection
      </button>

      <button
        className="bg-green-400 w-[250px] p-3"
        onClick={createCountry}
        data-cy="createCountry"
      >
        Create Country
      </button>
    </div>
  );
}
