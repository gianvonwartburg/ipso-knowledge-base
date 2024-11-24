import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { LinkEntry } from '../models/linkentry.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ipso-knowledge-base';

    http = inject(HttpClient);

    public entries$ = this.getLinkEntrties()


    private getLinkEntrties(): Observable<LinkEntry[]> {
      return this.http.get<LinkEntry[]>('https://localhost:7016/api/KnowledgeBase')
    }
}
