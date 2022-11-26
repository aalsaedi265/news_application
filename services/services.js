import {API_key,endpoint, country} from '../config/config'
import React from 'react'

export async function services(catagory="general") {
    let newsArticles= fetch(`${endpoint}?country=${country}&category=${catagory}`,{
        headers:{
            'X-API-KEY':API_key
        }
    });
    let news= await newsArticles.json() 
    newsArticles= null;
  
    return news.newsArticles
}
