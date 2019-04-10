// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open')

  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articles = document.querySelectorAll('.article');
articles.forEach(function(article){
  const articleClassCreator = new Article(article);
  console.log(articleClassCreator);
})

// Making a component constructor

/* 
To make a component constructor we're going to add an input field onto the page somewhere. 

The input form will have fields for the article template, title (h2), p(date or new Date();), and p(for the actual article text). 

When the user clicks the submit button, it's going to take those fields and create a new JSON object and then push them into an array (maybe).

There'll be another function that takes the JSON object as an argument

There'll be a class that takes the JSON object as an argument and has a method that builds out the article using appendChild, finally appending it to the last article in the articles class
*/





let submitButton = document.querySelector('.submitButton');

submitButton.addEventListener('click', loadStuff);

function loadStuff(){
  class FakeArticle {
    constructor(JSON) {
      this.title = JSON.title;
      this.date = JSON.date;
      this.articleText = JSON.article;
    }
    articleConstructer(){
      let articleA = document.querySelector('.articles')
      let newArticle = document.createElement('article');
      newArticle.setAttribute('class', 'article');
      let newTitle = document.createElement('h2');
      let newDate = document.createElement('date');
      let newArticleText = document.createElement('p');
      let newButton = document.createElement('span');
      newButton.setAttribute('class', 'expandButton');
      newButton.textContent = 'expand';
      newTitle.textContent = this.title;
      newDate.textContent = this.date;
      newArticleText.textContent = this.articleText;
      newArticle.appendChild(newTitle);
      newArticle.appendChild(newDate);
      newArticle.appendChild(newArticleText);
      newArticle.appendChild(newButton);
      let blah = new Article(newArticle);
      articleA.appendChild(newArticle);
      
    }
  }

  let titleForm = document.querySelector('.titleForm');
  let dateForm = document.querySelector('.dateForm');
  let articleForm = document.querySelector('.articleForm');
  let jsonObj = {
    title: titleForm.value,
    date: dateForm.value,
    article: articleForm.value,
  }

  const testArticle = new FakeArticle(jsonObj);
  testArticle.articleConstructer();
}