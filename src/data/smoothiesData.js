import bgSmoothieOrange from '../images/bg-smoothie1.png'
import bgSmoothiePurple from '../images/bg-smoothie2.png'
import bgSmoothiePink from '../images/bg-smoothie3.png'

const smoothiesData = [
    {
        "id": 1,
        "name": "Greek Yogurt Smoothie",
        "image": bgSmoothiePink,
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
        "id": 3,
        "name": "Silken Tofu Berry Blend",
        "image": bgSmoothiePurple,
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
        "id": 5,
        "name": "Cottage Cheese Citrus Shake",
        "image": bgSmoothieOrange,
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