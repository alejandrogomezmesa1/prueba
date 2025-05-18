document.addEventListener('DOMContentLoaded', function() {
    // Datos de productos
    const products = [
        {
            id: 1,
            name: "212 VIP ROSE CAROLINA HERRERA",
            price: 16000,
            rating: 5,
            image: "212-vip-rose.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Cilindro", "Cartier","Swarosky"],
            description: "Familia olfativa floral- frutal. Es un aroma juvenil y es ideal si buscas un perfume fresco pero dulce."
        },
        {
            id: 2,
            name: "LIGHT BLUE DOLCE & GABBANA",
            price: 16000,
            rating: 5,
            image: "ligth_blue.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Cilindro", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },
        {
            id: 3,
            name: "YARA LATAFFA",
            price: 18000,
            rating: 5,
            image: "YARA_LATAFFA.jpg",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Cilindro", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },
        {
            id: 4,
            name: "AHLI KARPOS",
            price: 18000,
            rating: 5,
            image: "AHLI_KARPOS.jpeg",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Cilindro", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },
        {
            id: 5,
            name: " COCO MADEMOISELLE CHANNEL",
            price: 16000,
            rating: 5,
            image: "COCO.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Cilindro", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },
        {
            id: 6,
            name: "IL ROSO DE ILMIN",
            price: 16000,
            rating: 4,
            image: "IL_ROSO.jpg",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Cilindro", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },
        {
            id: 7,
            name: "GOOD GIRL CAROLINA HERRERA",
            price: 16000,
            rating: 5,
            image: "GOOD_GIRL.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },
        {
            id: 8,
            name: "CLOUD ARIANA GRANDE",
            price: 16000,
            rating: 4,
            image: "CLOUD_ARIANA.webp",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },
        {
            id: 9,
            name: "HEIRESS PARIS HILTON",
            price: 16000,
            rating: 4,
            image: "HEIRESS.jpeg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },
        {
            id: 10,
            name: "MAYAR LATTAFA",
            price: 18000,
            rating: 5,
            image: "MAYAR_LATTAFA.jpg",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        }, 
        {
            id: 11,
            name: "DONNA BORN IN ROMA VALENTINO",
            price: 16000,
            rating: 4,
            image: "DONNA_BORN_IN_ROMA.jpeg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },        
        {
            id: 12,
            name: " TOY 2 BUBBLE GUM MOSCHINO",
            price: 16000,
            rating: 4,
            image: "TOY_2_BUBBLE_GUM.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },        
        {
            id: 13,
            name: " BOND NO. 9 BLEECKER STREET",
            price: 16000,
            rating: 4,
            image: "BOND_NO.9_BLEECKER.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },         
        {
            id: 14,
            name: " BADE AL OUD HONOR & GLORY LATAFFA BLANCA",
            price: 18000,
            rating: 5,
            image: "BADE_AL_OUD_HONOR.png",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },         
        {
            id: 15,
            name: " BADEE AL OUD SUBLIME LATAFFA ROJA",
            price: 18000,
            rating: 4,
            image: "ADEE_AL_OUD_SUBLIME.webp",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },         
        {
            id: 16,
            name: "BADE’E AL OUD AMETHYST LATAFFA MORADA",
            price: 18000,
            rating: 5,
            image: "BADE’E_AL_OUD.png",
            category: "Arabesr",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },         
        {
            id: 17,
            name: "SANTAL 33",
            price: 16000,
            rating: 4,
            image: "SANTAL_33.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },        
        {
            id: 18,
            name: "AMBER OUD GOLD EDITION AL HARAMAIN",
            price: 18000,
            rating: 5,
            image: "AMBER_OUD_GOLD.jpeg",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },         
        {
            id: 19 ,
            name: "AMBER ROUGE",
            price: 18000,
            rating: 4,
            image: "AMBER_ROUGE.jpg",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },         
        {
            id: 20,
            name: " ARABIANS TONKA MONTALE",
            price: 18000,
            rating: 4,
            image: "ARABIANS_TONKA.jpg",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },         
        {
            id: 21,
            name: "ETERNITY AQUA CALVIN KLEIN",
            price: 16000,
            rating: 4,
            image: "ETERNITY_AQUA.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."

        },         
        {
            id: 22,
            name: "DIOR SAUVAGE",
            price: 16000,
            rating: 4,
            image: "DIORSAUVAGE.PNG",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."

        },         
        {
            id: 23,
            name: "ACQUA DI GIO GIORGIO ARMANI",
            price: 16000,
            rating: 4,
            image: "ACQUA_DI_GIO.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."

        },         
        {
            id: 24,
            name: "IL ORGASME ILMIN",
            price: 16000,
            rating: 4,
            image: "IL_ORGASME_ILMIN.webp",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."

        },         
        {
            id: 25,
            name: "212 VIP Black",
            price: 16000,
            rating: 5,
            image: "VIP_212_BLACK.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml","100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."

        },
        {
            id: 26,
            name: "BORN IN ROMO VALENTINO",
            price: 16000,
            rating: 4,
            image: "VALENTINO_BON_IN.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },
        {
            id: 27,
            name: "MANDARIN SKY ODYSSEY",
            price: 18000,
            rating: 5,
            image: "ODYSSEY_MANDARIN.png",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."

        },        
        {
            id: 28,
            name: "LACOSTE BLANCA",
            price: 16000,
            rating: 4,
            image: "LACOSTE_BLANCA.png",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."

        },
        {
            id: 29,
            name: "ONE MILLON MILLION DE PACO RABANNE",
            price: 16000,
            rating: 4,
            image: "ONE_MILLON.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: "Familia olfativa amaderada especiada. Es un aroma masculino, seductor y lujoso, ideal para hombres que buscan destacar en ocasiones especiales o eventos nocturnos."
        },
        {
            id: 30,
            name: "YARA CANDY",
            price: 18000,
            rating: 4,
            image: "YARA.jpg",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: ""
        },
        {
            id: 31,
            name: "ISLAND BLISS DE ARMAF",
            price: 18000,
            rating: 4,
            image: "ISLANDBLISS.jpg",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: ""
        },  
        {
            id: 32,
            name: "NOBLE BLUSH LATAFFA",
            price: 18000,
            rating: 4,
            image: "BLUSH.jpg",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: ""
        },  
        {
            id: 33,
            name: "AHLI CORVUS",
            price: 18000,
            rating: 4,
            image: "CORVUS.webp",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: ""
        },  
        {
            id: 34,
            name: "FEMME ILMIN",
            price: 16000,
            rating: 4,
            image: "FEMME.webp",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: ""
        },  
        {
            id: 35,
            name: "Thank U, Next de Ariana Grande",
            price: 16000,
            rating: 4,
            image: "ThankU.webp",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: ""
        },  
        {
            id: 36,
            name: "EROS EAU DE TOILETTE VERSACE",
            price: 16000,
            rating: 4,
            image: "EROS.webp",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: ""
        },  
        {
            id: 37,
            name: "CLUB DE NUIT INTENSE (BESTIA NEGRA) ARMAF",
            price: 16000,
            rating: 4,
            image: "NUIT.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: ""
        }, 
        {
            id: 38,
            name: "BOSS BOTTLED",
            price: 16000,
            rating: 4,
            image: "BOTTLED.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: ""
        },
        {
            id: 39,
            name: "LACOSTE RED",
            price: 16000,
            rating: 4,
            image: "LACOSTERED.jpg",
            category: "Diseñador",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: ""
        },
        {
            id: 40,
            name: "9PM EDP AFNAN",
            price: 18000,
            rating: 4,
            image: "9PM.webp",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: ""
        },{
            id: 41,
            name: "BHARARA ROSE",
            price: 18000,
            rating: 4,
            image: "BHARARA.jpg",
            category: "Arabes",
            sizes: ["30ml", "60ml", "100ml"],
            bottleTypes: ["Singler", "Cartier","Swarosky"],
            description: ""
        }
    ];




    // Elementos del DOM
function displayProducts(productsToShow) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // Limpiar productos antes de agregar nuevos
    
    productsToShow.forEach(product => {
        const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-rating">${stars}</div>
                <div class="product-price">$${product.price}</div>
                
                <div class="product-category">${product.category}</div>

            </div>
        `;

        productGrid.appendChild(productCard);
    });
}   

  setTimeout(() => {
    productGrid.style.display = "grid";
}, 100);


    // Inicializar
    displayProducts(products);
    
});






