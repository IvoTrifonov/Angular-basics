import { Article } from '../models/article.model';
import { data } from './seed';

export class ArticleData {
  private articles: Article[] = [];

	constructor() {
    this.articles = data.map(d => new Article(d.title, d.description, d.author, d.imageUrl));
  }

  getData() {
    return this.articles;
  }
}