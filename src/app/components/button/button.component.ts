import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input({required: true}) label: string = '';
  @Input() variant: 'primary' | 'outlined' = 'primary';
  @Input() theme: 'dark' | 'light' = 'dark';
  @Input() href: string | null = null;

  get buttonClasses(): string {
    return `btn btn-${this.variant} btn-${this.theme}`;
  }

  openLink(): void {
    if (this.href) {
      window.open(this.href, '_blank', 'noopener,noreferrer');
    }
  }
}
