import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product: any; // This should ideally be a model class instance

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit(): void {
    // Load product data here from a service
    this.product = {
      name: 'Smart TV0 NEURAL QUANTUM GEN2',
      price: 99.99,
      description:
        'Experience next-gen telephony with the Smartphone X12. Features a 6.5-inch OLED screen perfect for vibrant visuals, 128GB storage for all your needs, and a triple-lens camera setup for stunning photography.',
      images: ['./../../assets/tv.png', 'url_to_image2'],
    };
  }

  addToCart() {
    // Implement add to cart functionality
    console.log('Add to cart clicked!');
  }

  saveOrder() {
    const url =
      'https://6g77mxka52.execute-api.us-east-1.amazonaws.com/prod/orders';
    const orderData = {
      orderId: '2',
      productDetails:
        'AI Powered 4K S90D Series, 144 Hz Refresh Rate, Object Tracking Sound Lite, LaserSlim Design, Q-Symphony, Gaming Hub, Smart TV0 NEURAL QUANTUM GEN2 PROCESSOR WITH 4K AI UPSCALING PRO: Samsungs AI-powered 4K processor creates one of our best 4K experiences. Our 4K AI Upscaling technology powered by 20 AI neural networks transforms content into near-4K picture quality. Our NQ4 AI Gen2 Processor optimizes both picture and sound to deliver a near-4K experience whether you are streaming movies, playing your favourite video games, or watching live sports',
      quantity: 2,
      productId: '100',
    };

    this.http.post(url, orderData).subscribe({
      next: (response) => {
        console.log('Order submitted successfully', response);
        this.toastr.success('Order submitted successfully!');
      },
      error: (error) => {
        console.error('Error submitting order', error);
        this.toastr.error('Failed to submit order', 'Error');
      },
    });
  }
}
