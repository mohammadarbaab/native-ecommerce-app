// productsData.js
const productsData = {
    products: [
        {
            id: "1",
            title: "Essence Mascara Lash Princess lala",
            description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
            category: "skincare",
            price: 12,
            discountPercentage: 1,
            rating: 0,
            stock: 5,
            tags: ["beauty", "mascara"],
            brand: "Foundation",
            sku: "RCH45Q1A",
            weight: 2,
            dimensions: {
                width: 23.17,
                height: 14.43,
                depth: 28.01
            },
            warrantyInformation: "1 month warranty",
            shippingInformation: "Ships in 1 month",
            availabilityStatus: "Low Stock",
            reviews: [
                {
                    rating: 2,
                    comment: "Very unhappy with my purchase!",
                    date: "2024-05-23T08:56:21.618Z",
                    reviewerName: "John Doe",
                    reviewerEmail: "john.doe@x.dummyjson.com"
                },
                {
                    rating: 2,
                    comment: "Not as described!",
                    date: "2024-05-23T08:56:21.618Z",
                    reviewerName: "Nolan Gonzalez",
                    reviewerEmail: "nolan.gonzalez@x.dummyjson.com"
                },
                {
                    rating: 5,
                    comment: "Very satisfied!",
                    date: "2024-05-23T08:56:21.618Z",
                    reviewerName: "Scarlett Wright",
                    reviewerEmail: "scarlett.wright@x.dummyjson.com"
                }
            ],
            returnPolicy: "30 days return policy",
            minimumOrderQuantity: 24,
            meta: {
                createdAt: "2024-05-23T08:56:21.618Z",
                updatedAt: "2024-05-23T08:56:21.618Z",
                barcode: "9164035109868",
                qrCode: "https://assets.dummyjson.com/public/qr-code.png"
            },
            images: [
                "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
                "https://static.beautytocare.com/cdn-cgi/image/width=1440,height=1200,f=auto/media/catalog/product//e/s/essence-lash-princess-curl-volume-mascara-12ml.jpg",
                "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
                "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
            ],
            thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
            deleted: false
        },
        // ... (other products follow the same pattern)
        {
            id: "ffd1",
            title: "iphone 16 ",
            brand: "Lipstick",
            category: "smartphones",
            price: 150000,
            discountPercentage: 2,
            stock: 1,
            thumbnail: "https://m.media-amazon.com/images/I/31zA1lIK+tL._SX342_SY445_.jpg",
            images: [
                "https://m.media-amazon.com/images/I/31zA1lIK+tL._SX342_SY445_.jpg",
                "https://m.media-amazon.com/images/I/31zA1lIK+tL._SX342_SY445_.jpg",
                "https://m.media-amazon.com/images/I/31zA1lIK+tL._SX342_SY445_.jpg",
                "https://m.media-amazon.com/images/I/31zA1lIK+tL._SX342_SY445_.jpg"
            ],
            rating: 0,
            deleted: false
        }
    ],
    categories: [
        {
            value: "smartphones",
            label: "smartphones",
            checked: false,
            id: "d926"
        },
        // ... (other categories)
        {
            value: "lighting",
            label: "lighting",
            checked: false,
            id: "a5ab"
        }
    ],
    brands: [
        {
            value: "Lipstick",
            label: "Lipstick",
            checked: false,
            id: "813c"
        },
        // ... (other brands)
        {
            value: "Dairy",
            label: "Dairy",
            id: "63f9"
        }
    ],
    users: [
        {
            id: "73d8",
            email: "admin@gmail.com",
            password: "Admin@321",
            addresses: [
                {
                    name: "adminnn",
                    email: "admin",
                    city: "admin",
                    state: "admin",
                    pinCode: "212121",
                    phone: "98989898",
                    street: "admin"
                }
            ],
            role: "admin"
        },
        // ... (other users)
        {
            id: "db6b",
            email: "kazmi@gmail.com",
            password: "Kazmi@321",
            addresses: [
                {
                    name: "kazmi",
                    email: "kazmiwrite@gmail.com",
                    phone: "08057070230",
                    street: "Up Muzaffarnagar",
                    city: "muzaffarnagar",
                    state: "Uttar Pradesh",
                    pinCode: "212121212"
                }
            ],
            role: "user"
        }
    ],
    cart: [],
    orders: [
        {
            id: "9f6b",
            items: [
                {
                    id: "8093",
                    title: "Essence Mascara Lash Princess lala",
                    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
                    category: "skincare",
                    price: 12,
                    discountPercentage: 1,
                    rating: 0,
                    stock: 5,
                    tags: ["beauty", "mascara"],
                    brand: "Foundation",
                    sku: "RCH45Q1A",
                    weight: 2,
                    dimensions: {
                        width: 23.17,
                        height: 14.43,
                        depth: 28.01
                    },
                    warrantyInformation: "1 month warranty",
                    shippingInformation: "Ships in 1 month",
                    availabilityStatus: "Low Stock",
                    reviews: [
                        {
                            rating: 2,
                            comment: "Very unhappy with my purchase!",
                            date: "2024-05-23T08:56:21.618Z",
                            reviewerName: "John Doe",
                            reviewerEmail: "john.doe@x.dummyjson.com"
                        },
                        {
                            rating: 2,
                            comment: "Not as described!",
                            date: "2024-05-23T08:56:21.618Z",
                            reviewerName: "Nolan Gonzalez",
                            reviewerEmail: "nolan.gonzalez@x.dummyjson.com"
                        },
                        {
                            rating: 5,
                            comment: "Very satisfied!",
                            date: "2024-05-23T08:56:21.618Z",
                            reviewerName: "Scarlett Wright",
                            reviewerEmail: "scarlett.wright@x.dummyjson.com"
                        }
                    ],
                    returnPolicy: "30 days return policy",
                    minimumOrderQuantity: 24,
                    meta: {
                        createdAt: "2024-05-23T08:56:21.618Z",
                        updatedAt: "2024-05-23T08:56:21.618Z",
                        barcode: "9164035109868",
                        qrCode: "https://assets.dummyjson.com/public/qr-code.png"
                    },
                    images: [
                        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
                        "https://static.beautytocare.com/cdn-cgi/image/width=1440,height=1200,f=auto/media/catalog/product//e/s/essence-lash-princess-curl-volume-mascara-12ml.jpg",
                        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
                        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
                    ],
                    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
                    deleted: false,
                    productId: "1",
                    quantity: 1,
                    user: "8e1e"
                }
            ],
            totalAmount: 12,
            totalItems: 1,
            user: {
                id: "8e1e",
                email: "demo@gmail.com",
                password: "Demo@321",
                addresses: [
                    {
                        name: "demo",
                        email: "kazmiwrite@gmail.com",
                        city: "mzn",
                        state: "Uttar Pradesh",
                        pinCode: "122",
                        phone: "08057070230",
                        street: "India"
                    }
                ],
                role: "user"
            },
            paymentMethod: "cash",
            selectedAddress: {
                name: "demo",
                email: "kazmiwrite@gmail.com",
                city: "mzn",
                state: "Uttar Pradesh",
                pinCode: "122",
                phone: "08057070230",
                street: "India"
            },
            status: "pending"
        },
        // ... (other orders)
        {
            id: "ad9b",
            items: [
                {
                    id: "194c",
                    title: "Powder Canister fila",
                    description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
                    category: "skincare",
                    price: 14,
                    discountPercentage: 18,
                    rating: 0,
                    stock: 5,
                    tags: ["beauty", "face powder"],
                    brand: "Foundation",
                    sku: "9EN8WLT2",
                    weight: 8,
                    dimensions: {
                        width: 24.16,
                        height: 10.7,
                        depth: 11.07
                    },
                    warrantyInformation: "2 year warranty",
                    shippingInformation: "Ships in 1-2 business days",
                    availabilityStatus: "In Stock",
                    reviews: [
                        {
                            rating: 5,
                            comment: "Very happy with my purchase!",
                            date: "2024-05-23T08:56:21.618Z",
                            reviewerName: "Ethan Thompson",
                            reviewerEmail: "ethan.thompson@x.dummyjson.com"
                        },
                        {
                            rating: 4,
                            comment: "Great value for money!",
                            date: "2024-05-23T08:56:21.618Z",
                            reviewerName: "Levi Hicks",
                            reviewerEmail: "levi.hicks@x.dummyjson.com"
                        },
                        {
                            rating: 5,
                            comment: "Highly impressed!",
                            date: "2024-05-23T08:56:21.618Z",
                            reviewerName: "Hazel Gardner",
                            reviewerEmail: "hazel.gardner@x.dummyjson.com"
                        }
                    ],
                    returnPolicy: "60 days return policy",
                    minimumOrderQuantity: 25,
                    meta: {
                        createdAt: "2024-05-23T08:56:21.618Z",
                        updatedAt: "2024-05-23T08:56:21.618Z",
                        barcode: "0516267971277",
                        qrCode: "https://assets.dummyjson.com/public/qr-code.png"
                    },
                    images: [
                        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
                        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
                        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
                        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
                    ],
                    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
                    deleted: false,
                    productId: "3",
                    quantity: 2,
                    user: "db6b"
                }
            ],
            totalAmount: 22,
            totalItems: 2,
            user: {
                id: "db6b",
                email: "kazmi@gmail.com",
                password: "Kazmi@321",
                addresses: [
                    {
                        name: "kazmi",
                        email: "kazmiwrite@gmail.com",
                        phone: "08057070230",
                        street: "Up Muzaffarnagar",
                        city: "muzaffarnagar",
                        state: "Uttar Pradesh",
                        pinCode: "212121212"
                    }
                ],
                role: "user"
            },
            paymentMethod: "cash",
            selectedAddress: {
                name: "kazmi",
                email: "kazmiwrite@gmail.com",
                phone: "08057070230",
                street: "Up Muzaffarnagar",
                city: "muzaffarnagar",
                state: "Uttar Pradesh",
                pinCode: "212121212"
            },
            status: "cencelled"
        }
    ]
};

export default productsData;