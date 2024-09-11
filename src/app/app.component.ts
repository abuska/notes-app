import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'notes-app';
  constructor(private meta: Meta, private titleService: Title) {}

  updateMetaTags() {
    this.titleService.setTitle('Notes');

    // Standard Meta Tags
    this.meta.addTag({
      name: 'description',
      content: 'Description of notes app.',
    });

    this.meta.addTag({ name: 'keywords', content: 'Angular, SEO, JavaScript' });

    // Open Graph Meta Tags
    this.meta.addTag({
      property: 'og:title',
      content: 'Notes App',
    });
    this.meta.addTag({
      property: 'og:description',
      content: 'Description of notes app.',
    });
    this.meta.addTag({
      property: 'og:image',
      content: 'path/to/your/image.png',
    });
  }
}
