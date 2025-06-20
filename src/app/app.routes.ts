import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'unsplash',
        loadComponent: () => import('./pages/photo-gallery-page/photo-gallery-page.component').then(m => m.PhotoGalleryPageComponent)    
    },  
    {
        path: 'personal',
        loadComponent: () => import('./components/personal-website/personal-website.component').then(m => m.PersonalWebsiteComponent)    
    }, 
];
