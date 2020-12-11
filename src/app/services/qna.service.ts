import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { QnA } from '../model/qna.model';

@Injectable({
  providedIn: 'root'
})
export class QnaService {

  qnaUrl = '/assets/data/qna.json';

  constructor(private http: HttpClient) { }
  getQnA(): Observable<QnA[]> {
    return this.http.get<QnA[]>(this.qnaUrl);
  }
}
