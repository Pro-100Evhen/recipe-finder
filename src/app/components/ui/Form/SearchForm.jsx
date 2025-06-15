"use client";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

export default function SearchForm() {
   const [query, setQuery] = useState("");
   const [cuisine, setCuisine] = useState("");
   const [time, setTime] = useState("");
   const [disabled, setDisabled] = useState(true);

   const CUISINES = [
      { value: "", label: "-- Select cuisine --" },
      { value: "italian", label: "Italian" },
      { value: "spanish", label: "Spanish" },
      { value: "mexican", label: "Mexican" },
      { value: "chinese", label: "Chinese" },
      { value: "french", label: "French" },
      { value: "japanese", label: "Japanese" },
   ];

   useEffect(() => {
      if (query || cuisine || time) {
         setDisabled(false);
      } else {
         setDisabled(true);
      }
   }, [query, cuisine, time]);

   return (
      <div className="w-full max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 border border-gray-100">
         <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
               Search for Recipes
            </h2>
            <p className="text-gray-500">
               Enter keywords, select cuisine type and cooking time
            </p>
         </div>
         <form action="/recipes" className="space-y-7">
            <div>
               <label
                  htmlFor="query"
                  className="block mb-2 text-lg font-semibold text-gray-700"
               >
                  What would you like to find?
               </label>
               <input
                  id="query"
                  type="text"
                  placeholder="For example: pizza, sushi, tacos..."
                  name="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full py-3 px-5 pr-14 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                  autoComplete="off"
               />
            </div>

            <div>
               <label
                  htmlFor="cuisine"
                  className="block mb-2 text-lg font-semibold text-gray-700"
               >
                  Choose cuisine:
               </label>
               <select
                  id="cuisine"
                  name="cuisine"
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                  className="w-full py-3 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 text-gray-800"
               >
                  {CUISINES.map((cuisineOption, idx) => (
                     <option
                        key={cuisineOption.value}
                        value={cuisineOption.value}
                        disabled={idx === 0}
                        hidden={idx === 0}
                     >
                        {cuisineOption.label}
                     </option>
                  ))}
               </select>
            </div>

            <div>
               <label
                  htmlFor="prep-time"
                  className="block mb-2 text-lg font-semibold text-gray-700"
               >
                  Maximum cooking time (minutes):
               </label>
               <input
                  type="number"
                  id="prep-time"
                  name="prepTime"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  min={1}
                  placeholder="For example: 30"
                  className="w-full py-3 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
               />
            </div>
            <Button disabled={disabled}>Find recipes</Button>
         </form>
      </div>
   );
}
