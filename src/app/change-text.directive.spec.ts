import { ChangeTextDirective } from './change-text.directive';
import { ElementRef } from '@angular/core';

describe('ChangeTextDirective', () => {
  it('should create an instance', () => {
    const directive = new ChangeTextDirective(ChangeTextDirective.Element);
    expect(directive).toBeTruthy();
  });
});
