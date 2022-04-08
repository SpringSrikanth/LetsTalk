import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(private api:BlogService) { }

  public allBlogs;

  async ngOnInit(): Promise<void> {
    await this.getAllBlogs();
  }

  public async getAllBlogs(){
    const  result = await this.api.getPublicBlogs().toPromise();
    console.log(result)
    this.allBlogs =result;
  }

}
