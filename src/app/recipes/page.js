import fetchRecipes from "../lib/api/fetchRecipes";
import { Suspense, lazy } from "react";
const Recipe = lazy(() => import("../components/Recipe/Recipe"));
export const revalidate = 60;

export default async function RecipesPage({ searchParams }) {
   const query = (await searchParams).query || "";
   const cuisine = (await searchParams).cuisine || "";
   const time = (await searchParams).prepTime || "";

   const data = await fetchRecipes(query, cuisine, time);

   return (
      <section className="min-h-[70vh] flex flex-col items-center justify-start p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100">
         <div className="w-full max-w-5xl bg-white/90 rounded-2xl shadow-2xl border border-blue-100 p-10">
            <h1 className="text-3xl font-bold mb-8 text-blue-700 text-center">
               Recipes
            </h1>
            <div className="recipes-wrapper">
               <Suspense
                  fallback={
                     <p className="text-blue-500 text-center">
                        Loading recipes...
                     </p>
                  }
               >
                  {data?.results?.length ? (
                     <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {data.results.map((recipe) => (
                           <Recipe key={recipe.id} recipe={recipe} />
                        ))}
                     </ul>
                  ) : (
                     <p className="text-gray-500 text-center mt-8 text-lg">
                        0 recipes found
                     </p>
                  )}
               </Suspense>
            </div>
         </div>
      </section>
   );
}
