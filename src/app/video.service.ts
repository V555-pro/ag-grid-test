import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  private videosUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCLLJnLe24jN9nWAjAd6nl06njTuUhfPlM&maxResults=50&type=video&part=snippet&q=john';

  public fetchVideos() {
    return this.http.get(this.videosUrl);
  }
}
