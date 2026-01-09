/*- Create `Post.mjs`, exporting a default `Post` class that includes a constructor for `title` 
and `content`, and a `publish` method that logs the title and content to the console.*/

export class Post { // create Post Class
    constructor(title, content){ //constructor for title and content.
        this.title = title;
        this.content = content;
    }

    publish = () =>{ //publish method
        console.log(`Title: ${this.title}`);
        console.log(`Post: ${this.content}`);
    }
}