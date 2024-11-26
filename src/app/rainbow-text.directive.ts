import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRainbowText]',
  standalone: false, // Ensures the directive works as part of a module
})
export class RainbowTextDirective {
  private colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  constructor(private el?: ElementRef, private renderer?: Renderer2) {}

  @HostListener('keyup') onKeyUp(): void {
    if (!this.el || !this.renderer) {
      return;
    }

    // Pick a random color for text
    const textColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    // Pick a random color for border
    const borderColor = textColor;

    // Apply styles using Renderer2
    this.renderer.setStyle(this.el.nativeElement, 'color', textColor);
    this.renderer.setStyle(this.el.nativeElement, 'border-color', borderColor);
  }
}
