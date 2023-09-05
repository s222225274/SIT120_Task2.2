const app = Vue.createApp({
    data() {
        return {
            products: [
                { id: 1, name: 'Handcrafted Pottery', price: 30 },
                { id: 2, name: 'Artisan Jewelry', price: 50 },
                { id: 3, name: 'Handwoven Textiles', price: 40 },
                // Add more products as needed
            ]
        };
    }
});

app.mount("#app");


