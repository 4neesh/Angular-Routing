import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-single-member',
  templateUrl: './single-member.component.html',
  styleUrls: ['./single-member.component.css']
})
export class SingleMemberComponent implements OnInit {

  memberId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.memberId = +this.route.snapshot.params['member'];
    })
  }

}
