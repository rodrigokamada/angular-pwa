import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ImageData {
  license: string,
  provider: string,
  size: Size,
  terms: string,
  url: string
}

export interface Size {
  height: string,
  width: string
}

@Injectable({
  providedIn: 'root'
})
export class RandomImageService {

  private apiRandomImageURL = '/api-random-image';

  apiUrl: string = 'https://random.imagecdn.app/v1/image';
  width: string = '516';
  height: string = '350';
  category: string = 'buildings';
  format: string = 'json';

  constructor(private http: HttpClient) { }

  getRandomImage(): Observable<Partial<ImageData>> {
    return this.http.get(`${this.apiUrl}?width=${this.width}&height=${this.height}&category=${this.category}&format=${this.format}`);
  }

}
