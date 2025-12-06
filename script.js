document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            navActions.classList.toggle('active');
        });
    }

    // Search Functionality & Product Data
    const products = [

        { id: "pizza-margherita", name: "Pizza Margherita", price: "$9.99", description: "Classic tomato sauce, 100% mozzarella and fresh basil — simple, authentic and delicious.", imageClass: "pizza-margherita", link: "product.html?id=pizza-margherita" },
        { id: "farmhouse", name: "Farmhouse", price: "$11.49", description: "Loaded with mushrooms, fresh tomatoes, bell peppers and tangy onion — a veggie favourite.", imageClass: "pizza-farmhouse", link: "product.html?id=farmhouse" },
        { id: "indi-tandoori-paneer", name: "Indi Tandoori Paneer", price: "$12.99", description: "Tandoori-spiced paneer, bell peppers and onions on a rich, smoky base — Indian-inspired flavour.", imageClass: "pizza-indi-tandoor-paneer", link: "product.html?id=indi-tandoori-paneer" },
        { id: "corn-cheese-paratha", name: "Corn Cheese Paratha Pizza", price: "$13.99", description: "Fusion pizza with sweet corn, melting cheese and a flaky paratha-style base for extra bite.", imageClass: "pizza-corn-cheese-paratha-pizza", link: "product.html?id=corn-cheese-paratha" },
        { id: "peppy-paneer", name: "Peppy Paneer", price: "$12.49", description: "Spiced paneer chunks, crisp capsicum and red paprika for a zesty kick.", imageClass: "pizza-peppy-paneer", link: "product.html?id=peppy-paneer" },
        { id: "veggie-paradise", name: "Veggie Paradise", price: "$11.99", description: "A garden feast with corn, bell peppers, tomatoes and onions on a cheesy base.", imageClass: "pizza-veggie-paradise", link: "product.html?id=veggie-paradise" },


        { id: "burger-classic", name: "Classic Burger", price: "$7.99", description: "Juicy beef patty with cheese, lettuce and tomato.", imageClass: "burger-classic", link: "product.html?id=burger-classic" },
        { id: "burger-cheese", name: "Cheese Burger", price: "$8.49", description: "Melted cheese, pickles and our special sauce.", imageClass: "burger-cheese", link: "product.html?id=burger-cheese" },
        { id: "burger-bacon", name: "Bacon Burger", price: "$8.99", description: "Crispy bacon strips and smoky BBQ glaze.", imageClass: "burger-bacon", link: "product.html?id=burger-bacon" },
        { id: "burger-spicy", name: "Spicy Burger", price: "$8.49", description: "Pepper jack cheese and jalapeños for a kick.", imageClass: "burger-spicy", link: "product.html?id=burger-spicy" },
        { id: "burger-veggie", name: "Veggie Burger", price: "$7.49", description: "Grilled veggie patty with fresh greens.", imageClass: "burger-veggie", link: "product.html?id=burger-veggie" },
        { id: "burger-double", name: "Double Patty", price: "$10.99", description: "Two patties, double the flavor.", imageClass: "burger-double", link: "product.html?id=burger-double" },


        { id: "beverage-pepsi", name: "Pepsi", price: "$1.99", description: "Chilled cola — classic, fizzy and refreshing.", imageClass: "beverage-pepsi", link: "product.html?id=beverage-pepsi" },
        { id: "beverage-dew", name: "Mountain Dew", price: "$1.99", description: "Citrus-flavored soda with an energetic kick.", imageClass: "beverage-mountain-dew", link: "product.html?id=beverage-dew" },
        { id: "beverage-fanta", name: "Fanta", price: "$1.99", description: "Fruity orange soda — bright and bubbly.", imageClass: "beverage-fanta", link: "product.html?id=beverage-fanta" },
        { id: "beverage-coke", name: "Coke", price: "$1.99", description: "Classic Coca-Cola — ice-cold and refreshing.", imageClass: "beverage-coke", link: "product.html?id=beverage-coke" },
        { id: "beverage-iced-tea", name: "Iced Tea", price: "$1.99", description: "Brewed iced tea served chilled — lightly sweetened.", imageClass: "beverage-iced-tea", link: "product.html?id=beverage-iced-tea" },
        { id: "beverage-smoothie", name: "Smoothie", price: "$2.99", description: "Creamy fruit smoothie — naturally sweet and thick.", imageClass: "beverage-smoothie", link: "product.html?id=beverage-smoothie" },


        { id: "dessert-butterscotch", name: "Butterscotch Mousse Cake", price: "$4.99", description: "Light and airy butterscotch mousse on a soft sponge.", imageClass: "dessert-butterscotch", link: "product.html?id=dessert-butterscotch" },
        { id: "dessert-choco-lava", name: "Choco Lava Cake", price: "$5.49", description: "Warm molten chocolate centre with a fudgy exterior.", imageClass: "dessert-choco-lava", link: "product.html?id=dessert-choco-lava" },
        { id: "dessert-cream-puff", name: "Cream Puff", price: "$3.99", description: "Crisp pastry filled with vanilla cream.", imageClass: "dessert-cream-puff", link: "product.html?id=dessert-cream-puff" },
        { id: "dessert-peanut-butter", name: "Peanut Butter Pudding", price: "$4.49", description: "Smooth peanut butter pudding topped with crunchy nuts.", imageClass: "dessert-peanut-butter", link: "product.html?id=dessert-peanut-butter" },
        { id: "dessert-red-velvet", name: "Red Velvet Lava Cake", price: "$5.49", description: "Red velvet sponge with a creamy molten centre.", imageClass: "dessert-red-velvet", link: "product.html?id=dessert-red-velvet" },
        { id: "dessert-panna-cotta", name: "Strawberry Panna Cotta", price: "$4.99", description: "Silky panna cotta topped with fresh strawberry sauce.", imageClass: "dessert-panna-cotta", link: "product.html?id=dessert-panna-cotta" },


        { id: "garlic-classic", name: "Classic Stuffed Garlic Bread", price: "$4.99", description: "Buttery garlic bread stuffed with gooey cheese.", imageClass: "garlic-classic-stuffed", link: "product.html?id=garlic-classic" },
        { id: "garlic-paneer-tikka", name: "Paneer Tikka Stuffed Garlic Bread", price: "$5.99", description: "Paneer tikka stuffing with smoky spices and cheese.", imageClass: "garlic-paneer-tikka-stuffed", link: "product.html?id=garlic-paneer-tikka" },
        { id: "garlic-makhani", name: "Makhani Paneer Garlic Bread", price: "$6.49", description: "Rich makhani-flavoured paneer with garlic butter.", imageClass: "garlic-makhani-paneer", link: "product.html?id=garlic-makhani" },
        { id: "garlic-fiery-paneer", name: "Fiery Paneer Tikka Garlic Bread", price: "$5.99", description: "Spicy paneer topping with a bold chilli kick.", imageClass: "garlic-fiery-paneer", link: "product.html?id=garlic-fiery-paneer" },
        { id: "garlic-fiery-corn", name: "Fiery Corn Jalapeño Garlic Bread", price: "$5.49", description: "Sweet corn, jalapeño and fiery seasoning on garlic toast.", imageClass: "garlic-fiery-corn", link: "product.html?id=garlic-fiery-corn" },
        { id: "garlic-korean", name: "Korean Paneer Tikka Garlic Bread", price: "$6.49", description: "Fusion with Korean spices and paneer on garlic base.", imageClass: "garlic-korean-paneer", link: "product.html?id=garlic-korean" },


        { id: "taco-saucy-veg", name: "Saucy Veg Taco", price: "$4.49", description: "Spiced veg filling with tangy sauce and fresh cilantro.", imageClass: "taco-saucy-veg", link: "product.html?id=taco-saucy-veg" },
        { id: "taco-mex-nonveg", name: "Mexican Non-Veg Taco", price: "$5.49", description: "Seasoned meat, salsa and crunchy toppings.", imageClass: "taco-mex-nonveg", link: "product.html?id=taco-mex-nonveg" },
        { id: "taco-mex-veg", name: "Mexican Veg Taco", price: "$4.99", description: "Roasted veggies, beans and zesty sauce.", imageClass: "taco-mex-veg", link: "product.html?id=taco-mex-veg" },
        { id: "taco-tandoori", name: "Tandoori Chicken Taco", price: "$5.99", description: "Smoky tandoori chicken with cooling raita.", imageClass: "taco-tandoori-chicken", link: "product.html?id=taco-tandoori" },
        { id: "parcel-chicken", name: "Chicken Parcel", price: "$6.49", description: "Flaky parcel stuffed with spiced chicken.", imageClass: "parcel-chicken", link: "product.html?id=parcel-chicken" },
        { id: "parcel-paneer", name: "Loaded Paneer Parcel", price: "$5.99", description: "Paneer, veggies and a rich masala wrapped in pastry.", imageClass: "parcel-loaded-paneer", link: "product.html?id=parcel-paneer" }
    ];

    // Product Page Rendering Logic
    if (window.location.pathname.includes('product.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        if (productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                document.getElementById('product-name').textContent = product.name;
                document.getElementById('product-price').textContent = product.price;
                document.getElementById('product-description').textContent = product.description;
                document.title = `${product.name} - 2min2you`;

                // Add the specific class to the image placeholder to trigger the background image from CSS
                const imgDiv = document.getElementById('product-image');
                imgDiv.className = `product-image-placeholder ${product.imageClass}`;
            }
        }
    }

    // Quantity Selector Logic
    const qtyInput = document.getElementById('quantity');
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');

    if (qtyInput && minusBtn && plusBtn) {
        minusBtn.addEventListener('click', () => {
            let currentValue = parseInt(qtyInput.value);
            if (currentValue > 1) {
                qtyInput.value = currentValue - 1;
            }
        });

        plusBtn.addEventListener('click', () => {
            let currentValue = parseInt(qtyInput.value);
            if (currentValue < 10) {
                qtyInput.value = currentValue + 1;
            }
        });

        // Enforce manual input limits
        qtyInput.addEventListener('change', () => {
            let val = parseInt(qtyInput.value);
            if (val < 1) qtyInput.value = 1;
            if (val > 10) qtyInput.value = 10;
        });
    }

    // Make all product cards clickable
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            // Prevent if clicking the add button directly (optional, but good UX)
            if (e.target.classList.contains('add-to-cart-btn')) return;

            const nameElement = card.querySelector('.scroll-item-name');
            if (nameElement) {
                const name = nameElement.textContent.trim();
                const product = products.find(p => p.name === name);
                if (product) {
                    window.location.href = product.link;
                }
            }
        });
    });

    const searchInputs = document.querySelectorAll('.search-container input');

    searchInputs.forEach(input => {
        // Create results container
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results';
        input.parentNode.appendChild(resultsContainer);

        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            resultsContainer.innerHTML = '';

            if (query.length > 0) {
                const filteredProducts = products.filter(product =>
                    product.name.toLowerCase().includes(query)
                );

                if (filteredProducts.length > 0) {
                    filteredProducts.forEach(product => {
                        const div = document.createElement('div');
                        div.className = 'search-result-item';
                        div.textContent = product.name;
                        div.addEventListener('click', () => {
                            window.location.href = product.link;
                        });
                        resultsContainer.appendChild(div);
                    });
                    resultsContainer.style.display = 'block';
                } else {
                    const div = document.createElement('div');
                    div.className = 'search-result-item no-result';
                    div.textContent = 'No cravings found';
                    resultsContainer.appendChild(div);
                    resultsContainer.style.display = 'block';
                }
            } else {
                resultsContainer.style.display = 'none';
            }
        });

        // Hide results when clicking outside
        document.addEventListener('click', (e) => {
            if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
                resultsContainer.style.display = 'none';
            }
        });
    });
});
