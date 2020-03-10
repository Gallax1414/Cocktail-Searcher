const cocktailFetch = async (filter: string) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filter}`);
  
      const json = await response.json();
      return json;
    } catch(err) {
      console.log(err);
    }
  };
  
  export { cocktailFetch }
  