import React, { useState } from 'react';
import ButtonIcon from 'core/components/ButtonIcon';
import { GitHubResponse } from 'core/types/GitHub';
import SearchResult from '../SearchResult';
import './styles.css';
import { makeRequest } from 'core/utils/request';
//import InfoLoader from '../SearchLoaders/components/InfoLoader';
import SearchLoader from '../SearchLoaders';
//import InfoLoader from '../SearchLoaders/components/InfoLoader';
//import LogoGit from 'core/assets/logoGit-gray.png';


const SearchArea = () => {
   const [search, setSearch] = useState('');
   const [userData, setUserData] = useState<GitHubResponse>();
   const [isLoadnig, setIsLoading] = useState(false);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      //console.log('Submit!');
      // fetch(`https://api.github.com/users/${search}`)
      //     .then(response => response.json())
      //     .then(userResponse => setUserData(userResponse));

      setIsLoading(true);
      makeRequest({url:`${search}`})
           .then(userResponse => setUserData(userResponse.data))
           .finally(() => {
              setIsLoading(false);
           })
   }
   
   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      //console.log(event.target.value)
      setSearch(event.target.value);
   }

   return (
      <div className="search-area-container">
         <div className="search-area-content">
            <h1 className="search-area-title">
               Encontre um perfil Github
         </h1>
            <form onSubmit={handleSubmit}>
               <div className="form-container">
                  <input
                     type="text"
                     className="search-area-input-text"
                     required
                     value={search}
                     onChange={handleOnChange}
                     placeholder="Usuário Github"
                  />
                  <div className="form-content-button">
                     <span >
                        <ButtonIcon textButton="Encontrar" />
                     </span>
                  </div>
               </div>
            </form>
         </div>
         <div className="search-content-result">
            {isLoadnig ? <SearchLoader /> : (
               <>
                  <div>
                  {userData && ( 
                     <div>
                        <SearchResult 
                           html_url = {userData.html_url}
                           avatar_url = {userData.avatar_url}
                           public_repos = {userData.public_repos}
                           followers = {userData.followers}
                           following = {userData.following}
                           company = {userData.company}
                           blog = {userData.blog}
                           location = {userData.location}
                           created_at = {userData.created_at}
                        />
                     </div>)}
                  </div>
               </>)}
               {/* {!userData && (
               <div> 
                  <InfoLoader />
               </div>)}*/}
               
         </div>
      </div>
   );
}

export default SearchArea;