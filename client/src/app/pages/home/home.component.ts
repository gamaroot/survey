import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends BasePageComponent implements OnInit {
  surveys: any[] = [];

  constructor (route: ActivatedRoute, httpService: HttpService, sessionService: SessionService) {
    super(route, httpService, sessionService);
  }

  override ngOnInit(): void {
    this.httpService.getSurveys().subscribe(
      (response: any[]) => {
        this.surveys = response;
      },
      (error: any) => { console.log(error); });
  }
  
  deleteSurvey(id: string): void {
    this.httpService.deleteSurvey(id).subscribe(
      (response: any[]) => { console.log(response); },
      (error: any) => { console.log(error); });
  }
}