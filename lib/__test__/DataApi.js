import DataApi from '../DataApi';
import {data } from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
    it('exposes article as an object', () => { 
        const article = api.getArticle();
        const articleId = data.articles[0].id;
        const articleTitle = data.articles[0].title;

        expect(article).toHaveProperty(articleId);
        expect(article[articleId].title).toBe(articleTitle);
    });
    it('exposes author as an object', () => {
        const authors = api.getAuthors();
        const authorId = data.authors[0].id;
        const authorName = data.authors[0].firstName;

        expect(authors).toHaveProperty(authorId);
        expect(authors[authorId].firstName).toBe(authorName);
    });

});