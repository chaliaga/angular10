import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../../interface/post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: [ './post.component.scss' ]
})
export class PostComponent implements OnInit {
    messageResult = 'En Espera';
    messageResultObject: any;
    enabled = true;
    post: Post = {
        userId: 23,
        title: 'demo Lakers',
        body: 'Los Angeles Lakers'
    };

    alterPost: Post = {
        id: 1,
        userId: 20,
        title: 'demo Spurs',
        body: 'San Antonio Spurs'
    };

    constructor(public postService: PostService) {
    }

    ngOnInit(): void {
    }

    addPost(): void {
        this.enabled = false;
        this.postService.addPost(this.post).subscribe(data => {
            this.messageResult = 'Agregue Post con ID: ' + data.id;
            this.messageResultObject = data;
            console.log(data);
            this.enabled = true;
        });
    }

    putPost(): void {
        this.enabled = false;
        this.postService.putPost(this.alterPost).subscribe(data => {
            this.messageResult =  'Cambie el Post por el Alter Post';
            this.messageResultObject = data;
            console.log(data);
            this.enabled = true;
        });
    }

    patchPost(): void {
        this.enabled = false;
        this.postService.patchPost('Chicago Patch title').subscribe(data => {
            this.messageResult =  'Actualice el title del post';
            this.messageResultObject = data;
            console.log(data);
            this.enabled = true;
        });

    }

    deletePost(): void{
        this.enabled = false;
        this.postService.deletePost(1).subscribe(data => {
            this.messageResult =  'Borre el Post 01';
            this.messageResultObject = data;
            console.log(data);
            this.enabled = true;
        });
    }
}
