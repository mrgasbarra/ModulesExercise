/*Create blog.mjs that imports the Post class. Create an instance, and call the publish method to simulate posting.*/

import { Post } from "./Post.mjs"; //imports Post Call from Post.mjs

const firstPost = new Post("3 Months into JS!", "My head hurts, hahaha!"); //Create an instance 

firstPost.publish(); //call the publish function