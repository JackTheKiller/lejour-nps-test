import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NpsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  apiUrl = 'https://staging-api.lejour.com.br/portal/api/v2/nps/';

  constructor(private http: HttpClient) { }

  saveScore(score) {
    const data = { score: String(score) };
    return this.http.post(this.apiUrl, data, this.httpOptions);
  }

  saveComment(id, comment) {
    const data = { id, comment };
    return this.http.post(this.apiUrl, data, this.httpOptions);
  }

  getScores() {
    return this.http.get(this.apiUrl, this.httpOptions);
  }

}
