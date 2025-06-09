import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  // imports: [CommonModule, HttpClientModule], @deprecated — use provideHttpClient(withInterceptorsFromDi()) as providers instead
  imports: [CommonModule],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css',
})
export class PhotoGalleryComponent implements OnInit {
  photos: any[] = [];
  name = "Lucia";
  // emoji = "🎉";
  emoji = "👰🏻‍♀️";
  loading = false;
  errorMessage = "";
  private http = inject(HttpClient);
  private clientID = "t-FQWYk2PUt13LidWIblzu7SNd9HVOQsK3QA7Lg1Mg4";
  utm = "?utm_source=scrimba_degree&utm_medium=referral";
  numberOfPhotos = 20;
  url = `https://api.unsplash.com/photos/random/?count=${this.numberOfPhotos}&client_id=${this.clientID}`;

  ngOnInit() {
    this.fetchPhotos(this.url);
  }

  fetchPhotos(url: string) {
    this.loading = true; // ✅ Start loading
    this.errorMessage = ""; // ✅ Clear previous errors
    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false; // ✅ Stop loading
      },
      error: (err) => {
        this.errorMessage = "Failed to load photos. Please try again!";
        this.loading = false; // ✅ Stop loading even if an error occurs
      }
    });
  }

  searchPhotos(query: string) {
    const photosUrl = query ? `${this.url}&query=${query}` : this.url;
    this.fetchPhotos(photosUrl);
  }


  isBackgroundModalOpen = false;
  isColorModalOpen = false;
  isBorderImageModalOpen = false;
  isFontModalOpen = false;

  // Define the backgrounds as an array of objects
  backgrounds = [
    { name: '--wooden', url: 'http://localhost:4200/backgrounds/wooden.jpg' },
    { name: '--forest', url: 'http://localhost:4200/backgrounds/forest.jpg' },
    { name: '--sweets', url: 'http://localhost:4200/backgrounds/sweets1.jpg' },
    { name: '--bubbles', url: 'http://localhost:4200/backgrounds/bubbles.jpg' },
    { name: '--crackle', url: 'http://localhost:4200/backgrounds/crackle.jpg' },
    { name: '--sparkle', url: 'http://localhost:4200/backgrounds/sparkle.jpg' },
    { name: '--rainbow', url: 'http://localhost:4200/backgrounds/rainbow-paint.jpg' },
    { name: '--smoke', url: 'http://localhost:4200/backgrounds/rainbow-smoke.jpg' },
    { name: '--nightsky', url: 'http://localhost:4200/backgrounds/nightsky.jpg' },
    { name: '--sunset', url: 'http://localhost:4200/backgrounds/sunset.jpg' }
  ];

  // Define the border images as an array of objects
  borderImages = [
    { name: '--wooden', url: 'http://localhost:4200/backgrounds/wooden.jpg' },
    { name: '--forest', url: 'http://localhost:4200/backgrounds/forest.jpg' },
    { name: '--sweets', url: 'http://localhost:4200/backgrounds/sweets1.jpg' },
    { name: '--bubbles', url: 'http://localhost:4200/backgrounds/bubbles.jpg' },
    { name: '--crackle', url: 'http://localhost:4200/backgrounds/crackle.jpg' },
    { name: '--sparkle', url: 'http://localhost:4200/backgrounds/sparkle.jpg' },
    { name: '--rainbow', url: 'http://localhost:4200/backgrounds/rainbow-paint.jpg' },
    { name: '--smoke', url: 'http://localhost:4200/backgrounds/rainbow-smoke.jpg' },
    { name: '--nightsky', url: 'http://localhost:4200/backgrounds/nightsky.jpg' },
    { name: '--sunset', url: 'http://localhost:4200/backgrounds/sunset.jpg' }
  ];

  // Define the colors as an array of objects
  colors = [
    { name: '--blood', color: '#8a0303' },
    { name: '--slime', color: '#228B22' },
    { name: '--gloom', color: '#2B363B' },
    { name: '--candy', color: '#ee698e' },
    { name: '--purple', color: '#7B1E7A' },
    { name: '--blue', color: '#2176AE' },
    { name: '--olive', color: '#A6C48A' },    
    { name: '--royal', color: '#0A1045' },
    { name: '--lilac', color: '#B8AED6' },
    { name: '--snow', color: '#f4f9e9' }
  ];

// Define the fonts as an array of objects
  fonts = [
    { name: '--scary-font', value: 'Metal Mania' },
    { name: '--typewriter-font', value: 'Inconsolata' },
    { name: '--funny-font', value: 'Balsamiq Sans' },
    { name: '--curly-font', value: 'Pacifico' },
    { name: '--old-style-font', value: 'Cinzel' },
    { name: '--simple-font', value: 'Noto Sans HK' },
    { name: '--funky-font', value: 'MuseoModerno' },
    { name: '--sweet-font', value: 'Lobster' },
    { name: '--fancy-font', value: 'Playfair Display' },
    { name: '--fancy-font2', value: 'Cinzel Decorative' }
  ];

  openBackgroundModal() {
    this.isBackgroundModalOpen = true;
  }

  closeBackgroundModal() {
    this.isBackgroundModalOpen = false;
  }

  openColorModal() {
    this.isColorModalOpen = true;
  }

  closeColorModal() {
    this.isColorModalOpen = false;
  }

  openBorderImageModal() {
    this.isBorderImageModalOpen = true;
  }

  closeBorderImageModal() {
    this.isBorderImageModalOpen = false;
  }

  openFontModal() {
    this.isFontModalOpen = true;
  }

  closeFontModal() {
    this.isFontModalOpen = false;
  }

  selectBackground(url: string): void {
      // document.body.style.backgroundImage = `url(${url})`;
      document.body.style.setProperty('--background-image', `url(${url})`);
      this.isBackgroundModalOpen = false;
  }

  selectColor(color: string): void {
      document.body.style.setProperty('--main-border', 'none');
      document.body.style.setProperty('--main-color', color);
      this.isColorModalOpen = false;
  }

  selectBorderImage(url: string): void {
      document.body.style.setProperty('--main-color', 'none');
      document.body.style.setProperty('--main-border', `url(${url}) 100`);
      this.isBorderImageModalOpen = false;
  }

  selectFont(font: string): void {
      document.body.style.setProperty('--main-font', font);
      this.isFontModalOpen = false;
  }
  // Reset styles to default
  resetStyles(): void {
      document.body.style.setProperty('--background-image', 'none');
      document.body.style.setProperty('--main-color', 'black');
      document.body.style.setProperty('--main-border', 'none');
      this.isBackgroundModalOpen = false;
      this.isColorModalOpen = false;
      this.isBorderImageModalOpen = false;
  }
  getBackgroundImage(): string {
      return getComputedStyle(document.body).getPropertyValue('--background-image').trim();
  }
  getMainColor(): string {
      return getComputedStyle(document.body).getPropertyValue('--main-color').trim();
  }
  getBorderImage(): string {
      // return getComputedStyle(document.body).getPropertyValue('--border-image').trim();
      return getComputedStyle(document.body).getPropertyValue('--main-border');
  }
}
