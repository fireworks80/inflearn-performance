import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Article from '../Article';
import './index.css';

const ArticleList = (props) => {
  const [articles, setArticles] = useState([]);

  const getArticles = useCallback(() => {
    axios.get('http://localhost:3003/articles').then((success) => {
      setArticles([...success.data]);
    });
  }, []);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <ul className={'ArticleList'}>
      {articles.map((item) => (
        <li key={item.id}>
          <Link to={`/view/${item.id}`}>
            <Article {...item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
