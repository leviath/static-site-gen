# StaticSiteGen

## How to use
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

At first you need to run `npm install`, then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

All the content need to be stored in the `assets/content` folder. 
The teaser image is stored in `asstes/teaser`. (Because of license reasons i dont wanted to rename the image. Normally it should be named like teaser.jpeg.)
At first you need to create a file called `assets/content/content.json`. It has a structure like this: 
 ```
    "introduction": {
        "headline": string
        "teaser": string
        "tags": [
          Sort of strings
        ]
      },
      "blogEntrys": [
        {
          "id": number;
          "headline": string;
          "teaseredContent": string; (optinal)
          "content": string;
          "route": string;
          "image": string;
          "created": Date;
          "flag": string (optonial)
        }
        ...
 ```

In `introduction` the content of the teaser on the landingpage is stored (just headline, backgrond image and tags). 
The teasered content shown in "New Entrys" are the last two added blog entrys by date.

Every Blog article is a `blogEntry`. You can navigate to the article and back again.
There was consideration to create a html file for each article in the `assets/content/` folder. 
So the user can create more fancy articles. 
