import bgSmoothieOrange from '../images/bg-smoothie1.png'
import bgSmoothiePurple from '../images/bg-smoothie2.png'
import bgSmoothiePink from '../images/bg-smoothie3.png'

const smoothiesData = [
    {
        "id": 1,
        "name": "Greek Yogurt Smoothie",
        "image": bgSmoothiePink,
        "color": "#EDC8CB",
        "ingredients": [
            {
                "number": "01",
                "name": "Greek yogurt",
                "amount": "1 cup",
                "fact": "Greek yogurt contains almost <u>twice the protein</u> of regular yogurt."
            },
            {
                "number": "02",
                "name": "Strawberries",
                "amount": "¼ cup",
                "fact": "Strawberries are packed with vitamin C, manganese, and various antioxidants."
            },
            {
                "number": "03",
                "name": "Honey",
                "amount": "1 tablespoon",
                "fact": "Honey is a natural antibacterial and antifungal agent."
            },
            {
                "number": "04",
                "name": "Hemp seeds",
                "amount": "1 teaspoon",
                "fact": "Hemp seeds are a complete protein source, containing <u>all nine essential amino acids</u>, that the body cannot produce on its own."
            }
        ]
    },
    {
        "id": 2,
        "name": "Silken Tofu Berry Blend",
        "image": bgSmoothiePurple,
        "color": "#DCCBF1",
        "ingredients": [
            {
                "number": "01",
                "name": "Silken tofu",
                "amount": "½ cup",
                "fact": "3.5 oz (100g) of Silken Tofu offers 8g protein, making it a fantastic <u>plant-based protein source for vegans.</u>"
            },
            {
                "number": "02",
                "name": "Mixed berries",
                "amount": "1 cup",
                "fact": "Berries are among <u>the highest antioxidant</u> foods in the world."
            },
            {
                "number": "03",
                "name": "Almond milk",
                "amount": "1 cup",
                "fact": "Almond milk is a dairy-free milk that contains no cholesterol or lactose."
            },
            {
                "number": "04",
                "name": "Chia Seeds",
                "amount": "1 tablespoon",
                "fact": "These little wonders can <u>absorb a ton of water</u>, making your smoothies <u>extra thick</u> and satisfying."
            }
        ]
    },
    {
        "id": 3,
        "name": "Cottage Cheese Citrus Shake",
        "image": bgSmoothieOrange,
        "color": "#F7CDC7",
        "ingredients": [
            {
                "number": "01",
                "name": "Cottage cheese",
                "amount": "½ cup",
                "fact": "Cottage cheese is made from curdled milk and is rich in <u>casein, a slow-digesting protein.</u>"
            },
            {
                "number": "02",
                "name": "Orange peeled",
                "amount": "1 Orange",
                "fact": "Oranges are one of the most popular fruits around the world and are known for their high vitamin C content."
            },
            {
                "number": "03",
                "name": "Honey",
                "amount": "1 tablespoon",
                "fact": "Honey's natural sugars are known to provide a quick energy boost."
            },
            {
                "number": "04",
                "name": "Orange juice",
                "amount": "½ cup",
                "fact": "Orange juice is a good source of several important nutrients, including potassium, vitamin C, and folate."
            }
        ]
    }
]

export default smoothiesData;