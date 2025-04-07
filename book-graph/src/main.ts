import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { AppComponent } from './app/app.component';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

export function createApollo(httpLink: HttpLink) {
  return {
    cache: new InMemoryCache(),
    link: httpLink.create({ uri: 'https://graphqlzero.almansi.me/api' }),
  };
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideApollo(createApollo)
  ]
}).catch(err => console.error(err));
