(function () {
    var app = angular.module('store', []);
    app.controller('StoreController', function () {
        this.products = [ //陣列在product後面＋s
      //顯示單個：html{{}}也要改成s喔，後面要加編號[0]指定
      //顯示全部：用一個ng-repeat的div去包（最外面+s)，裡面把ng名稱（store拿掉，因為一直重複），裡面包的product也不用加s
            {
                name: "Ring Holder",
                price: 2000,
                description: "4.7",
                onSale: false,
                images: [
                        {
                            url: "img/product/pimg1.jpg",
                            alt: "1"
                        }
     ]
                    //src ->ng-src
    },

            {
                name: "iPhone Case",
                price: 2100,
                description: "4.7",
                onSale: true,
                images: [
                        {
                            url: "img/product/pimg2.jpg",
                            alt: "1"
                        }
     ]
                    //src ->ng-src
            }, {
                name: "Necklace",
                price: 3500,
                description: "4.7",
                onSale: false,
                images: [
                        {
                            url: "img/product/pimg3.jpg",
                            alt: "1"
                        }
     ]
                    //src ->ng-src
            }, {
                name: "Water Can",
                price: 4000,
                description: "4.7",
                onSale: true,
                images: [
                        {
                            url: "img/product/pimg4.jpg",
                            alt: "1"
                        }
     ]
                    //src ->ng-src
            },
            {
                name: "Annoying Trump",
                price: 10999,
                description: "4.7",
                onSale: false,
                images: [
                        {
                            url: "img/product/pimg5.jpg",
                            alt: "1"
                        }
     ]
                    //src ->ng-src
            }
    //產品內容放在{}內，{}間用,隔開


    ];

    });

})();
