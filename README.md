# Recipe Finder

A modern web application for searching and viewing recipes from around the world. Built with [Next.js](https://nextjs.org/), React, and Tailwind CSS. Recipes are fetched from the [Spoonacular API](https://spoonacular.com/food-api).

## Features

-  🔎 Search recipes by keywords, cuisine, and cooking time
-  🌍 Filter by popular world cuisines
-  📄 View detailed recipe information
-  ⚡ Fast, responsive UI with SSR and client-side hydration
-  🎨 Stylish, clean interface using Tailwind CSS

## Getting Started

### Prerequisites

-  Node.js 18+
-  npm or yarn
-  Spoonacular API key ([get one here](https://spoonacular.com/food-api))

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/recipe-finder.git
   cd recipe-finder
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**

   Create a `.env.local` file in the root and add your Spoonacular API key:

   ```
   SPOONACULAR_API_KEY=your_api_key_here
   ```

4. **Run the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

```
src/
  app/
    components/
      Recipe/
        Recipe.jsx
      ui/
        Button/
          Button.jsx
        Form/
          SearchForm.jsx
    lib/
      api/
        fetchRecipes.js
        fetchRecipeDetails.js
    recipes/
      page.js
      [id]/
        page.js
    layout.js
    page.js
    globals.css
```

-  **components/** — UI and recipe components
-  **lib/api/** — API utility functions
-  **recipes/** — Recipes listing and detail pages
-  **layout.js** — Root layout and fonts
-  **globals.css** — Tailwind and global styles

## Customization

-  Update the list of cuisines in `SearchForm.jsx` as needed.
-  Change the color scheme via Tailwind classes or `globals.css`.

## License

MIT

---

**Made with ❤️ using Next.js and Spoonacular API**
