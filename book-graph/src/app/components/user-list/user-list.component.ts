import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'apollo-angular';

const GET_USERS = gql`
  query {
    users {
      data {
        id
        name
        email
      }
    }
  }
`;

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: GET_USERS
    }).valueChanges.subscribe(({ data }) => {
      this.users = data.users.data;
    });
  }
}
