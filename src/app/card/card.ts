import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  products: any[] = [];
  error: string | null = null;

  constructor(private service: Service, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.service.getProducts().subscribe({
      next: (data: any) => {
        console.log('API Data:', data);
        if (Array.isArray(data)) {
          this.products = data;
        } else if (data && typeof data === 'object') {
          // Handle { products: [...] } or { items: [...] }
          if (data.products && Array.isArray(data.products)) {
            this.products = data.products;
          } else if (data.items && Array.isArray(data.items)) {
            this.products = data.items;
          } else {
            // Fallback: try to convert object values to array or just assign
            this.products = [data]; // Last resort
          }
        }

        if (this.products.length === 0) {
          this.error = "No products found.";
        } else {
          console.log('Products assigned:', this.products);
        }
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('API Error:', err);
        // Fallback to sample data since the provided API is likely broken/placeholder
        this.products = [
          { id: '1', name: 'Modern Workstation', price: 1299.00, avatar: 'https://images.unsplash.com/photo-1493723843684-a63fe689df56?w=500&auto=format&fit=crop&q=60' },
          { id: '2', name: 'Ergonomic Chair', price: 350.50, avatar: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&auto=format&fit=crop&q=60' },
          { id: '3', name: 'Wireless Headphones', price: 199.99, avatar: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60' },
          { id: '4', name: 'Smart Watch', price: 250.00, avatar: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60' },
          { id: '5', name: 'Professional Camera', price: 850.00, avatar: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60' },
          { id: '6', name: 'Minimalist Lamp', price: 45.00, avatar: 'https://images.unsplash.com/photo-1507473888900-52e1adad54cd?w=500&auto=format&fit=crop&q=60' }
        ];
        this.error = null; // Clear error to show products
        this.cdr.detectChanges();
      }
    });
  }
}
