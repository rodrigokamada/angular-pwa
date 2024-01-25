import { Component, OnInit } from '@angular/core';
import { RandomImageService } from 'src/app/services/random-image.service';

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.scss']
})
export class RandomImageComponent implements OnInit {

  imageURL: string | undefined;

  constructor(private randomImageService: RandomImageService) { }

  ngOnInit(): void {
    this.getRandomImage();
    this.changeImage();
  }

  getRandomImage(): void {
    this.randomImageService.getRandomImage().subscribe({
      next: response => this.imageURL = response.url,
      error: error => console.error(error.message),
      complete: () => console.log('Request completed')
    });
  }

  changeImage(): void {
    setInterval( () => this.getRandomImage(), 30000);
  }

}
