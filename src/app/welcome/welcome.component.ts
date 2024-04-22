import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  products = [
    {
      name: 'Smart TV0 NEURAL QUANTUM GEN2',
      description:
        'Experience next-gen telephony with the Smartphone X12. Features a 6.5-inch OLED screen perfect for vibrant visuals, 128GB storage for all your needs, and a triple-lens camera setup for stunning photography.',
      price: '$999',
      imageUrl: 'assets/cloud-logo.png',
    },
    {
      name: 'Bluetooth Headphones',
      description:
        'Dive into immersive audio with these Bluetooth Headphones. Offering active noise-cancellation for a pure sound experience, and up to 20 hours of battery life for extended playtime.',
      price: '$250',
      imageUrl: 'assets/headphones.jpg',
    },
    {
      name: 'Portable SSD 1TB',
      description:
        'Boost your data management with our Portable SSD 1TB, offering robust durability and lightning-fast transfer speeds up to 1050MB/s. Its compact design makes it an ideal choice for professionals on the move.',
      price: '$150',
      imageUrl: 'assets/ssd.jpg',
    },
    {
      name: '4K UHD Monitor',
      description:
        'Elevate your viewing experience with our 28-inch 4K UHD Monitor, designed for professional-grade gaming with a blistering 1ms response time and stunning ultra-high-definition visuals.',
      price: '$330',
      imageUrl: 'assets/monitor.jpg',
    },
    {
      name: 'Wireless Charging Pad',
      description:
        'Streamline your device charging with our Wireless Charging Pad, featuring 15W fast wireless charging capabilities and a sleek design that fits any desk or nightstand.',
      price: '$59',
      imageUrl: 'assets/charging_pad.jpg',
    },
    {
      name: 'Smart Home Speaker',
      description:
        'Control your smart home with your voice with our Smart Home Speaker. Enjoy high-quality audio and seamless integration with multiple smart home devices, enhancing your living environment.',
      price: '$129',
      imageUrl: 'assets/speaker.jpg',
    },
  ];
  show = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToProductPage() {
    this.router.navigate(['/products']);
  }

  toggleShow() {
    this.show = !this.show;
  }
}
