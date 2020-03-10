import React from 'react';



type drinks = {
    drinks: Array<drink>
  };
  
  type drink = {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: string | null;
    strDrinkES: string | null;
    strDrinkDE: string | null;
    strDrinkFR: string | null;
    'strDrinkZH-HANS': string | null;
    'strDrinkZH-HANT': string | null;
    strTags: string | null;
    strVideo: string | null;
    strCategory: string,
    strIBA: string | null,
     strAlcoholic: string,
     strGlass: string,
     strInstructions: string,
     strInstructionsES: string | null,
     strInstructionsDE: string,
     strInstructionsFR: null,
     'strInstructionsZH-HANS': string | null,
     'strInstructionsZH-HANT': string | null,
     strDrinkThumb: string,
     strIngredient1: string,
     strIngredient2: string,
     strIngredient3: string,
     strIngredient4: string,
     strIngredient5: string,
     strIngredient6: string | null,
     strIngredient7: string | null,
     strIngredient8: string | null,
     strIngredient9: string | null,
     strIngredient10: string | null,
     strIngredient11: string | null,
     strIngredient12: string | null,
     strIngredient13: string | null,
     strIngredient14: string | null,
     strIngredient15: string | null,
     strMeasure1: string,
     strMeasure2: string,
     strMeasure3: string,
     strMeasure4: string,
     strMeasure5: string,
     strMeasure6: string | null,
     strMeasure7: string | null,
     strMeasure8: string | null,
     strMeasure9: string | null,
     strMeasure10: string | null,
     strMeasure11: string | null,
     strMeasure12: string | null,
     strMeasure13: string | null,
     strMeasure14: string | null,
     strMeasure15: string | null,
     strCreativeCommonsConfirmed: string,
     dateModified: Date,
  };