import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvitePage } from './invite.page';

describe('InvitePage', () => {
  let component: InvitePage;
  let fixture: ComponentFixture<InvitePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InvitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
