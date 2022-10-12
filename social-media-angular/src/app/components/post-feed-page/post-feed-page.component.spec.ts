import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

import { PostFeedPageComponent } from './post-feed-page.component';

describe('PostFeedPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFeedPageComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule], 
      providers: [HttpClient, PostService, AuthService]
    })
    .compileComponents();
  
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PostFeedPageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});