import {
  Directive,
  Output,
  HostListener,
  EventEmitter,
  ElementRef,
  Input
} from '@angular/core';

@Directive({ selector: '[lazyScroll]' })
export class LazyScrollDirective {
  @Input() tolerance: number;
  @Output('scrollUp') onScrolledUp: EventEmitter<boolean>;
  @Output('scrollDown') onScrolledDown: EventEmitter<boolean>;

  private lastPosition = 0;

  constructor(private el: ElementRef) {
    this.onScrolledUp = new EventEmitter<boolean>();
    this.onScrolledDown = new EventEmitter<boolean>();
    this.tolerance = 0;
  }

  @HostListener('scroll') onScroll(): void {
    let newPosition: number = this.el.nativeElement.scrollTop;

    if (newPosition > this.lastPosition + this.tolerance) {
      this.lastPosition = newPosition;
      this.onScrolledDown.emit();
    }

    if (newPosition < this.lastPosition - this.tolerance) {
      this.lastPosition = newPosition;
      this.onScrolledUp.emit();
    }
  }
}
