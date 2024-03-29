import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import CategoryMeals from './components/CategoryMeals';
import Recipe from './components/Recipe';
import SearchRecipes from './components/SearchRecipes';
import Favorites from './components/Favorites';
import AboutUs from './components/AboutUs';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/category/:categoryId' element={<CategoryMeals />} />
          <Route path='/recipes/:recipeId' element={<Recipe />} />
          <Route path='/search-results/:query' element={<SearchRecipes />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
