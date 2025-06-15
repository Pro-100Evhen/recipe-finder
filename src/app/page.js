import SearchForm from "./components/ui/Form/SearchForm";

export default function SearchPage() {
   return (
      <section className="min-h-screen px-4 sm:px-8 py-10 flex flex-col items-center justify-center gap-10 bg-gray-50 font-sans text-black">
         <SearchForm />
      </section>
   );
}
