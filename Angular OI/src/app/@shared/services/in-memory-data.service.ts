import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        id: 0,
        title: 'IPhone',
        description:
          "The iPhone 11 succeeds the iPhone XR, and it features a 6.1-inch LCD display that Apple calls a 'Liquid Retina HD Display.' It features a 1792 x 828 resolution at 326ppi, a 1400:1 contrast ratio, 625 nits max brightness",
        price: 15,
        image: 'https://cdn.mos.cms.futurecdn.net/Gj4BpxWHmrcvZmjaW9nmwf.jpg',
        quantity: 3,
        longitude: 7.809007,
        latitude: 51.678418,
      },
      {
        id: 1,
        title: 'Samsung',
        description:
          'Samsung Galaxy Note 20 Ultra is powered by a 2.4GHz octa-core Samsung Exynos 990 processor that features 4 cores clocked at 2.4GHz and 4 cores clocked at 1.8GHz. It comes with 12GB of RAM. The Samsung Galaxy Note 20 Ultra runs Android 10 and is powered by a 4500mAh non-removable battery.',
        price: 2,
        image: 'https://www.vipershop.rs/wp-content/uploads/2020/11/samsung-zamena-stakla-note-20-ultra.jpg',
        quantity: 5,
        longitude: 7.809007,
        latitude: 51.678418,
      },
      {
        id: 2,
        title: 'Huawei',
        description:
          'Huawei has once again teamed up with Leica to produce a best-in-class phone camera. The Huawei P40 Pro puts a Visionary Super Main Camera (wide angle), Cinematic Camera (ultra-wide angle) and long range telephoto in your hand and ties it all together with AI assistance.',
        price: 10,
        image: 'https://www.benchmark.rs/assets/img/news/big_thumb/c943024d8646daa34fe0bd156c2326e7.jpg',
        quantity: 10,
        longitude: 7.809007,
        latitude: 51.678418,
      },
    ];
    return { products };
  }

  // Overrides the genId method to ensure that a product always has an id.
  // If the product array is empty,
  // the method below returns the initial number (11).
  // if the product array is not empty, the method below returns the highest
  // product id + 1.
  genId(product: Product[]): number {
    return product.length > 0 ? Math.max(...product.map((product) => product.id)) + 1 : 11;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
