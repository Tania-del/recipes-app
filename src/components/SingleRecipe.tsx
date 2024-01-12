import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../store/store';
import { getRecipeById, selectSelectedRecipe } from '../store/recipesSlice';
import { useSelector } from 'react-redux';
import { useCustomNavigate } from '../hooks/useCustomNavigate';


const SingleRecipe = () => {
  const { recipeId } = useParams();
  const dispatch = useAppDispatch();
  const recipe = useSelector(selectSelectedRecipe);
  const { back } = useCustomNavigate();

  useEffect(() => {
    dispatch(getRecipeById(recipeId))
  }, [recipeId, dispatch])


  const { mealImg, meal, category } = recipe || {};
  console.log(recipe);
  
  return (
    <div className=''>
      <div>
        <img src={mealImg} alt={meal} />
      </div>
      <div>
        <div>
          <h2>{meal}</h2>
          <button onClick={back}>{category}</button>
        </div>
     </div>
     <div></div>
     <div></div>
    </div>
  )
}

export default SingleRecipe;
