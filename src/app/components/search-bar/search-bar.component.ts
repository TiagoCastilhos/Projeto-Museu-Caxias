import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchText: string = '';
  constructor(private router: Router) { }

  ngOnInit() {

  }

  performQuery() {
    if (!this.searchText || this.searchText.length <= 0)
      return;

    this.router.navigate(['/areas'], { queryParams: { tip: this.searchText } })
  }
}