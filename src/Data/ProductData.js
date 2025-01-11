export const products = [
    {
        id: 1,
        name: 'Black Pepper Spice Pack',
        category: 'Spices',
        image: 'prod1',
        rating: 4.5,
        marketPrice: 60.00,
        discountedPrice: 52.00,
        quantity: '250g',
        tag: 'HOT',
        stockStatus: 'Out of Stock',
        reviews: [
            { user: 'Alice', comment: 'Great quality!', rating: 5 },
            { user: 'Bob', comment: 'A bit pricey but worth it.', rating: 4 }
        ],
        description: 'Freshly ground black pepper for your culinary needs.',
        faq: [
            { question: 'Is it organic?', answer: 'Yes, it is 100% organic.' },
            { question: 'What is the shelf life?', answer: '12 months from the manufacturing date.' }
        ],
        deliveryAndReturnPolicy: 'Free delivery for orders above $50. Returns accepted within 7 days.'
    },
    {
        id: 2,
        name: 'Mixed Fruit Jam',
        category: 'Snacks',
        image: 'prod2',
        rating: 4.0,
        marketPrice: 50.00,
        discountedPrice: 45.00,
        quantity: '1 Pack',
        tag: 'NEW',
        stockStatus: 'Only 3 left in stock',
        reviews: [
            { user: 'Chris', comment: 'Tastes amazing!', rating: 4 },
            { user: 'Dana', comment: 'Could be sweeter.', rating: 3.5 }
        ],
        description: 'A delightful mix of fruits in a jar.',
        faq: [
            { question: 'Does it contain added sugar?', answer: 'Yes, but within permissible limits.' },
            { question: 'Is it vegan?', answer: 'Yes, it is vegan-friendly.' }
        ],
        deliveryAndReturnPolicy: 'Delivery within 3 days. Returns not accepted for opened jars.'
    },
    {
        id: 3,
        name: 'Wheat Bread',
        category: 'Bakery',
        image: 'prod3',
        rating: 4.8,
        marketPrice: 35.00,
        discountedPrice: 30.00,
        quantity: '1 Loaf',
        tag: 'TRENDING',
        stockStatus: 'In Stock',
        reviews: [
            { user: 'Eve', comment: 'Soft and fresh.', rating: 5 },
            { user: 'Frank', comment: 'Perfect for sandwiches.', rating: 4.5 }
        ],
        description: 'Healthy whole wheat bread baked fresh daily.',
        faq: [
            { question: 'Does it contain preservatives?', answer: 'No, it is preservative-free.' },
            { question: 'Is it gluten-free?', answer: 'No, it contains gluten.' }
        ],
        deliveryAndReturnPolicy: 'Same-day delivery available. Returns accepted for damaged goods only.'
    },
    {
        id: 4,
        name: 'Organic Milk',
        category: 'Dairy',
        image: 'prod4',
        rating: 2.7,
        marketPrice: 30.00,
        discountedPrice: 25.00,
        quantity: '1L',
        tag: 'MOST PURCHASED',
        stockStatus: 'In Stock',
        reviews: [
            { user: 'George', comment: 'Creamy and fresh.', rating: 5 },
            { user: 'Hannah', comment: 'Perfect for my morning coffee.', rating: 4.5 }
        ],
        description: 'Organic milk sourced from grass-fed cows.',
        faq: [
            { question: 'Is it pasteurized?', answer: 'Yes, it is pasteurized.' },
            { question: 'Is it lactose-free?', answer: 'No, it contains lactose.' }
        ],
        deliveryAndReturnPolicy: 'Delivery within 24 hours. No returns accepted.'
    },
    {
        id: 5,
        name: 'Potato Chips',
        category: 'Snacks',
        image: 'prod5',
        rating: 4.3,
        marketPrice: 20.00,
        discountedPrice: 15.00,
        quantity: '1 Pack',
        tag: 'TRENDING',
        stockStatus: 'Only 2 left in stock',
        reviews: [
            { user: 'Ivy', comment: 'Crispy and flavorful.', rating: 4 },
            { user: 'Jake', comment: 'Perfect for movie nights.', rating: 4.5 }
        ],
        description: 'Classic salted potato chips.',
        faq: [
            { question: 'Are these baked or fried?', answer: 'Fried.' },
            { question: 'Does it contain gluten?', answer: 'No, it is gluten-free.' }
        ],
        deliveryAndReturnPolicy: 'Free delivery for orders above $10. Returns not accepted.'
    },
    {
        id: 6,
        name: 'Fresh Carrots',
        category: 'Vegetables',
        image: 'prod6',
        rating: 4.6,
        marketPrice: 15.00,
        discountedPrice: 10.00,
        quantity: '1kg',
        tag: 'HOT',
        stockStatus: 'In Stock',
        reviews: [
            { user: 'Karen', comment: 'Very fresh and crunchy.', rating: 5 },
            { user: 'Leo', comment: 'Good quality for the price.', rating: 4 }
        ],
        description: 'Farm-fresh carrots, perfect for salads and cooking.',
        faq: [
            { question: 'Is it pesticide-free?', answer: 'Yes, it is pesticide-free.' },
            { question: 'What is the shelf life?', answer: '5-7 days when refrigerated.' }
        ],
        deliveryAndReturnPolicy: 'Delivery within 1 day. Returns accepted for damaged goods.'
    },
    {
        id: 7,
        name: 'Seasonal Mangoes',
        category: 'Fruits',
        image: 'prod7',
        rating: 4.9,
        marketPrice: 25.00,
        discountedPrice: 20.00,
        quantity: '1kg',
        tag: 'TRENDING',
        stockStatus: 'In Stock',
        reviews: [
            { user: 'Mia', comment: 'Sweet and juicy!', rating: 5 },
            { user: 'Noah', comment: 'Tastes like summer.', rating: 4.5 }
        ],
        description: 'Fresh seasonal mangoes directly from the farm.',
        faq: [
            { question: 'Are these organic?', answer: 'Yes, they are organically grown.' },
            { question: 'Can they be used for pickles?', answer: 'Yes, they are suitable for pickles.' }
        ],
        deliveryAndReturnPolicy: 'Delivery within 2 days. Returns accepted for spoiled fruits only.'
    },
    {
        id: 8,
        name: 'Apple Juice',
        category: 'Beverages',
        image: 'prod8',
        rating: 4.4,
        marketPrice: 22.00,
        discountedPrice: 18.00,
        quantity: '1L',
        tag: 'MOST PURCHASED',
        stockStatus: 'Only 1 left in stock',
        reviews: [
            { user: 'Olivia', comment: 'Refreshing and tasty.', rating: 4 },
            { user: 'Paul', comment: 'Great for breakfast.', rating: 4.5 }
        ],
        description: 'Freshly squeezed apple juice without any preservatives.',
        faq: [
            { question: 'Is it sugar-free?', answer: 'No, it contains natural sugars.' },
            { question: 'Does it need refrigeration?', answer: 'Yes, keep it refrigerated after opening.' }
        ],
        deliveryAndReturnPolicy: 'Delivery within 24 hours. No returns accepted.'
    },
    {
        id: 9,
        name: 'Strawberry Jam',
        category: 'Snacks',
        image: 'prod9',
        rating: 4.7,
        marketPrice: 55.00,
        discountedPrice: 50.00,
        quantity: '1 Pack',
        tag: 'NEW',
        stockStatus: 'In Stock',
        reviews: [
            { user: 'Quinn', comment: 'Perfect blend of sweetness.', rating: 5 },
            { user: 'Ryan', comment: 'Goes great with toast.', rating: 4 }
        ],
        description: 'Rich and fruity strawberry jam made with fresh berries.',
        faq: [
            { question: 'Does it contain artificial colors?', answer: 'No, it is made with natural ingredients.' },
            { question: 'What is the shelf life?', answer: '6 months from the manufacturing date.' }
        ],
        deliveryAndReturnPolicy: 'Delivery within 2 days. Returns not accepted for opened packs.'
    },
    {
        id: 10,
        name: 'Garlic Bread',
        category: 'Bakery',
        image: 'prod10',
        rating: 4.6,
        marketPrice: 35.00,
        discountedPrice: 28.00,
        quantity: '1 Loaf',
        tag: 'HOT',
        stockStatus: 'In Stock',
        reviews: [
            { user: 'Sophia', comment: 'Very flavorful.', rating: 5 },
            { user: 'Tom', comment: 'Could use more garlic.', rating: 4.5 }
        ],
        description: 'Soft and buttery garlic bread, perfect as a side dish.',
        faq: [
            { question: 'Is it vegan?', answer: 'No, it contains butter.' },
            { question: 'How long does it stay fresh?', answer: 'Best consumed within 2 days of purchase.' }
        ],
        deliveryAndReturnPolicy: 'Same-day delivery available. Returns not accepted for opened packs.'
    },
    {
        id: 11,
        name: 'Cheddar Cheese',
        category: 'Dairy',
        image: 'prod11',
        rating: 4.8,
        marketPrice: 40.00,
        discountedPrice: 35.00,
        quantity: '250g',
        tag: 'TRENDING',
        stockStatus: 'Only 2 left in stock',
        reviews: [
            { user: 'Uma', comment: 'Rich and creamy.', rating: 5 },
            { user: 'Victor', comment: 'Perfect for sandwiches.', rating: 4.5 }
        ],
        description: 'Premium cheddar cheese made with the finest ingredients.',
        faq: [
            { question: 'Is it pasteurized?', answer: 'Yes, it is made from pasteurized milk.' },
            { question: 'Is it vegetarian?', answer: 'Yes, it contains no animal rennet.' }
        ],
        deliveryAndReturnPolicy: 'Delivery within 1 day. No returns accepted for opened packs.'
    },
    {
        id: 12,
        name: 'Bananas',
        category: 'Fruits',
        image: 'prod12',
        rating: 4.5,
        marketPrice: 15.00,
        discountedPrice: 12.00,
        quantity: '1 Dozen',
        tag: 'MOST PURCHASED',
        stockStatus: 'In Stock',
        reviews: [
            { user: 'Wendy', comment: 'Fresh and ripe.', rating: 5 },
            { user: 'Xander', comment: 'Perfect for smoothies.', rating: 4 }
        ],
        description: 'Naturally ripened bananas with a sweet taste.',
        faq: [
            { question: 'Are these organic?', answer: 'Yes, they are grown without pesticides.' },
            { question: 'What is the shelf life?', answer: '3-5 days at room temperature.' }
        ],
        deliveryAndReturnPolicy: 'Delivery within 24 hours. Returns accepted for spoiled fruits only.'
    }
];
