import { Directive, ElementRef } from '@angular/core';

/**
 * LazyImageDirectiveDirective
 */
@Directive({
  selector: 'img'
})
export class LazyImageDirectiveDirective {

  /**
   * 
   * @param { nativeElement }: ElementRef<HTMLImageElement> 
   */
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    /**
     * Set lazy loading
     */
    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    } else {
      // fallback to IntersectionObserver
    }
  }

}
