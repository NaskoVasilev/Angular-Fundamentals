import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postCount'
})
export class PostCountPipe implements PipeTransform {

  transform(posts: any[], userId: Number, index: Number): Number {
    console.log(index);
    
    let postsCount = 0;
    posts.forEach(post => {
      if(post.userId == userId){
        postsCount++;
      }
    });

    return postsCount;
  }

}
