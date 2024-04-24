import ImageGreekYogurt from '../images/greek_yogurt.png'
import ImageTofuBerry from '../images/tofu_berry.png'
import ImagePeanutButter from '../images/peanut_butter.jpg'
import ImageQuinoa from '../images/quinoa.png'
import ImageCheeseCitrus from '../images/cheese_citrus.png'
// import ImageSpirulina from '../images/spirulina.png'

const smoothiesData = [
    {
        "id": 1,
        "name": "Greek Yogurt Smoothie",
        "content": "Packed with almost double the protein of regular yogurt, Greek yogurt is strained to ditch most of the lactose, making it a powerhouse of protein and gut-friendly probiotics.",
        "protein": "23 grams",
        "image": ImageGreekYogurt,
        "besttime": "Jump-start your day with this protein-rich breakfast smoothie.",
        "ingredients": [
            {
                "name": "Greek yogurt",
                "amount": "1 cup",
                "image": "",
                "fact": "Greek yogurt contains almost twice the protein of regular yogurt."
            },
            {
                "name": "strawberries",
                "amount": "¼ cup",
                "image": "",
                "fact": "Strawberries are packed with vitamin C, manganese, and various antioxidants."
            },
            {
                "name": "honey",
                "amount": "1 tablespoon",
                "image": "",
                "fact": "Honey is a natural antibacterial and antifungal agent."
            },
            {
                "name": "chia seeds",
                "amount": "1 teaspoon",
                "image": "",
                "fact": "Chia seeds are a great source of omega-3 fatty acids, which benefit brain health."
            }
        ]
    },
    {
        "id": 2,
        "name": "Peanut Butter Power Smoothie",
        "content": "This spread is rich in bioactive compounds that could enhance heart health and improve blood flow.",
        "protein": "30 grams",
        "image": ImagePeanutButter,
        "besttime": "Great as a post-workout drink or a satisfying breakfast.",
        "ingredients": [
            {
                "name": "peanut butter",
                "amount": "2 tablespoons",
                "image": "",
                "fact": "Peanut butter was first patented by a Canadian pharmacist as a protein substitute for people with poor teeth."
            },
            {
                "name": "rolled oats",
                "amount": "½ cup",
                "image": "",
                "fact": "Oats are among the healthiest grains on earth, known to help lower blood sugar levels."
            },
            {
                "name": "flaxseeds",
                "amount": "1 tablespoon",
                "image": "",
                "fact": "Flaxseeds are a rich source of lignans, which may reduce cancer risk."
            },
            {
                "name": "milk",
                "amount": "1 cup",
                "image": "",
                "fact": "Milk has been a staple in diets around the world for thousands of years."
            }
        ]
    },
    {
        "id": 3,
        "name": "Silken Tofu Berry Blend",
        "content": "Derived from soy, this smooth operator blends perfectly into your drinks, enriching them with protein and essential bone-building calcium without altering the texture.",
        "protein": "14 grams",
        "image": ImageTofuBerry,
        "besttime": "Perfect after your morning workout for muscle recovery.",
        "ingredients": [
            {
                "name": "silken tofu",
                "amount": "½ cup",
                "image": "",
                "fact": "Silken tofu is made by coagulating soy milk without curdling it, providing a smooth texture ideal for smoothies."
            },
            {
                "name": "mixed berries",
                "amount": "1 cup",
                "image": "",
                "fact": "Berries are among the highest antioxidant foods in the world."
            },
            {
                "name": "almond milk",
                "amount": "1 cup",
                "image": "",
                "fact": "Almond milk is a dairy-free milk that contains no cholesterol or lactose."
            },
            {
                "name": "honey",
                "amount": "1 tablespoon",
                "image": "",
                "fact": "Honey has been used as a sweetener for over 8,000 years."
            }
        ]
    },
    {
        "id": 4,
        "name": "Quinoa Fruit Fusion",
        "content": "Protein Content: About 10 grams.",
        "protein": "10 grams",
        "image": ImageQuinoa,
        "besttime": "A fantastic mid-morning snack to keep your energy levels high.",
        "ingredients": [
            {
                "name": "cooked quinoa",
                "amount": "¼ cup",
                "image": "",
                "fact": "Quinoa is not a grain but a seed, which is prepared and eaten similarly to a grain."
            },
            {
                "name": "coconut water",
                "amount": "1 cup",
                "image": "",
                "fact": "Coconut water naturally contains electrolytes, making it a great hydration choice."
            },
            {
                "name": "pineapple chunks",
                "amount": "½ cup",
                "image": "",
                "fact": "Pineapples can help reduce inflammation and aid digestion due to their bromelain content."
            },
            {
                "name": "spirulina powder",
                "amount": "1 teaspoon",
                "image": "",
                "fact": "Spirulina is a type of blue-green algae that is one of the most nutrient-dense foods on the planet."
            },
            {
                "name": "lime juice",
                "amount": "1 tablespoon",
                "image": "",
                "fact": "Lime juice is high in vitamin C and antioxidants, both of which are beneficial for skin health and immune function."
            }
        ]
    },
    {
        "id": 5,
        "name": "Cottage Cheese Citrus Shake",
        "content": "It's rich in slow-digesting casein protein, which helps prevent muscle breakdown overnight and supports weight loss and muscle mass because of its high protein and low fat content.",
        "protein": "20 grams",
        "image": ImageCheeseCitrus,
        "besttime": "Enjoy as a nighttime snack; its slow-digesting proteins help with overnight muscle repair.",
        "ingredients": [
            {
                "name": "cottage cheese",
                "amount": "½ cup",
                "image": "",
                "fact": "Cottage cheese is made from curdled milk and is rich in casein, a slow-digesting protein."
            },
            {
                "name": "orange peeled and segmented",
                "amount": "1",
                "image": "",
                "fact": "Oranges are one of the most popular fruits around the world and are known for their high vitamin C content."
            },
            {
                "name": "honey",
                "amount": "1 tablespoon",
                "image": "",
                "fact": "Honey's natural sugars are known to provide a quick energy boost."
            },
            {
                "name": "water or orange juice",
                "amount": "½ cup",
                "image": "",
                "fact": "Orange juice is a good source of several important nutrients, including potassium, vitamin C, and folate."
            }
        ]
    }
]

export default smoothiesData;