import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';



@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailsComponent,
    LatestArticlesComponent,
    CategoriesComponent,
    FeaturedArticlesComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  exports:[LatestArticlesComponent]
  
})
export class ArticlesModule { }
