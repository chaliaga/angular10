import { Dish, Recipe } from '../interface/recipe';

export default class MockConstants {
    static getMockSearchCassandraResponse(): Recipe {
        return {
            offset: 10,
            number: 4,
            totalResults: 4,
            results: [
                {
                    vegetarian: true,
                    vegan: true,
                    glutenFree: true,
                    dairyFree: true,
                    veryHealthy: true,
                    cheap: false,
                    veryPopular: true,
                    sustainable: false,
                    weightWatcherSmartPoints: 4,
                    gaps: 'no',
                    lowFodmap: false,
                    aggregateLikes: 3689,
                    spoonacularScore: 99.0,
                    healthScore: 76.0,
                    creditsText: 'Full Belly Sisters',
                    license: 'CC BY-SA 3.0',
                    sourceName: 'Full Belly Sisters',
                    pricePerServing: 112.39,
                    id: 716426,
                    title: 'Cauliflower, Brown Rice, and Vegetable Fried Rice',
                    readyInMinutes: 30,
                    servings: 8,
                    sourceUrl: 'http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html',
                    image: 'https://spoonacular.com/recipeImages/716426-312x231.jpg',
                    imageType: 'jpg',
                    nutrition: {
                        nutrients: [
                            {
                                title: 'Calories',
                                amount: 191.51,
                                unit: 'cal',
                                percentOfDailyNeeds: 9.58
                            },
                            {
                                title: 'Fat',
                                amount: 6.36,
                                unit: 'g',
                                percentOfDailyNeeds: 9.78
                            },
                            {
                                title: 'Saturated Fat',
                                amount: 1.03,
                                unit: 'g',
                                percentOfDailyNeeds: 6.45
                            },
                            {
                                title: 'Carbohydrates',
                                amount: 29.11,
                                unit: 'g',
                                percentOfDailyNeeds: 9.7
                            },
                            {
                                title: 'Net Carbohydrates',
                                amount: 23.38,
                                unit: 'g',
                                percentOfDailyNeeds: 8.5
                            },
                            {
                                title: 'Sugar',
                                amount: 3.32,
                                unit: 'g',
                                percentOfDailyNeeds: 3.68
                            },
                            {
                                title: 'Cholesterol',
                                amount: 0.0,
                                unit: 'mg',
                                percentOfDailyNeeds: 0.0
                            },
                            {
                                title: 'Sodium',
                                amount: 428.32,
                                unit: 'mg',
                                percentOfDailyNeeds: 18.62
                            },
                            {
                                title: 'Protein',
                                amount: 6.85,
                                unit: 'g',
                                percentOfDailyNeeds: 13.7
                            },
                            {
                                title: 'Vitamin C',
                                amount: 65.87,
                                unit: 'mg',
                                percentOfDailyNeeds: 79.85
                            },
                            {
                                title: 'Vitamin K',
                                amount: 73.09,
                                unit: 'µg',
                                percentOfDailyNeeds: 69.61
                            },
                            {
                                title: 'Manganese',
                                amount: 1.32,
                                unit: 'mg',
                                percentOfDailyNeeds: 65.81
                            },
                            {
                                title: 'Copper',
                                amount: 0.48,
                                unit: 'mg',
                                percentOfDailyNeeds: 24.16
                            },
                            {
                                title: 'Fiber',
                                amount: 5.73,
                                unit: 'g',
                                percentOfDailyNeeds: 22.92
                            },
                            {
                                title: 'Folate',
                                amount: 89.34,
                                unit: 'µg',
                                percentOfDailyNeeds: 22.34
                            },
                            {
                                title: 'Magnesium',
                                amount: 87.61,
                                unit: 'mg',
                                percentOfDailyNeeds: 21.9
                            },
                            {
                                title: 'Vitamin B6',
                                amount: 0.42,
                                unit: 'mg',
                                percentOfDailyNeeds: 20.91
                            },
                            {
                                title: 'Phosphorus',
                                amount: 188.42,
                                unit: 'mg',
                                percentOfDailyNeeds: 18.84
                            },
                            {
                                title: 'Vitamin B1',
                                amount: 0.25,
                                unit: 'mg',
                                percentOfDailyNeeds: 16.93
                            },
                            {
                                title: 'Iron',
                                amount: 2.68,
                                unit: 'mg',
                                percentOfDailyNeeds: 14.92
                            },
                            {
                                title: 'Potassium',
                                amount: 490.13,
                                unit: 'mg',
                                percentOfDailyNeeds: 14.0
                            },
                            {
                                title: 'Calcium',
                                amount: 132.76,
                                unit: 'mg',
                                percentOfDailyNeeds: 13.28
                            },
                            {
                                title: 'Vitamin B3',
                                amount: 2.52,
                                unit: 'mg',
                                percentOfDailyNeeds: 12.62
                            },
                            {
                                title: 'Zinc',
                                amount: 1.69,
                                unit: 'mg',
                                percentOfDailyNeeds: 11.3
                            },
                            {
                                title: 'Vitamin B5',
                                amount: 0.96,
                                unit: 'mg',
                                percentOfDailyNeeds: 9.62
                            },
                            {
                                title: 'Vitamin A',
                                amount: 445.78,
                                unit: 'IU',
                                percentOfDailyNeeds: 8.92
                            },
                            {
                                title: 'Vitamin B2',
                                amount: 0.15,
                                unit: 'mg',
                                percentOfDailyNeeds: 8.55
                            },
                            {
                                title: 'Selenium',
                                amount: 4.49,
                                unit: 'µg',
                                percentOfDailyNeeds: 6.42
                            },
                            {
                                title: 'Vitamin E',
                                amount: 0.42,
                                unit: 'mg',
                                percentOfDailyNeeds: 2.82
                            }
                        ],
                        properties: [
                            {
                                title: 'Glycemic Index',
                                amount: 45.69,
                                unit: ''
                            },
                            {
                                title: 'Glycemic Load',
                                amount: 10.77,
                                unit: ''
                            }
                        ],
                        ingredients: [
                            {
                                name: 'broccoli',
                                amount: 0.25,
                                unit: 'cups',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 7.74,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.59,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.57,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.09,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.15,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.39,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 20.29,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 14.33,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 71.89,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.18,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.64,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.05,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 23.11,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 10.69,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.04,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 7.51,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 15.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.92,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 1.51,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.13,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.08,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 141.73,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.17,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 4.25,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 4.78,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'cauliflower',
                                amount: 0.13,
                                unit: 'head',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.04,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 17.97,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 1.44,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.43,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.05,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.19,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.36,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 1.37,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 34.64,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 40.97,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 214.91,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.06,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 1.38,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.11,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.04,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 11.14,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 15.81,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.13,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 21.56,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 31.63,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 2.13,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 3.57,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.48,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.2,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.3,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 31.84,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 10.78,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fluoride',
                                        amount: 0.72,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Trans Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    }
                                ]
                            },
                            {
                                name: 'coconut oil',
                                amount: 0.13,
                                unit: '',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 1.08,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.11,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.13,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'cooked brown rice',
                                amount: 0.38,
                                unit: 'cups',
                                nutrients: [
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.22,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.06,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 81.9,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 1.32,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.12,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.45,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.97,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 2.93,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 57.77,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 1.7,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.8,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.07,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 7.31,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.11,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.73,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 56.31,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 15.88,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 17.19,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.22,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.29,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.61,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.39,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 32.17,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'garlic',
                                amount: 0.63,
                                unit: 'cloves',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 2.79,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.04,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.27,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.02,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.59,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 0.06,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 7.52,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.12,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 0.03,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 3.39,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.32,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 2.87,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.58,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 0.62,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.17,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 0.44,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 0.47,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'grapeseed oil',
                                amount: 0.13,
                                unit: '',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.02,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 1.11,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.04,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.09,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.13,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    }
                                ]
                            },
                            {
                                name: 'low sodium soy sauce',
                                amount: 0.38,
                                unit: 'T',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 3.18,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.05,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.05,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.2,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.1,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 0.96,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 10.8,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.31,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 1.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 199.98,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 6.6,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.46,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 0.51,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.12,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 1.96,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 2.04,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'peas',
                                amount: 0.13,
                                unit: 'cup',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 14.68,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.92,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.33,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.22,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.38,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 1.03,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 7.25,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 11.78,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 44.23,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.98,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.07,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.05,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 4.5,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 4.53,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.91,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 19.58,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 1.69,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 2.62,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.03,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.07,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 138.66,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.27,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 5.15,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 5.98,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'salt',
                                amount: 1.0,
                                unit: 'servings',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 0.0,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 0.04,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 0.12,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 193.79,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fluoride',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'scallion',
                                amount: 1.0,
                                unit: 'servings',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 1.92,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.16,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.04,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.14,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 1.13,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 3.84,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 16.56,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.11,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 12.42,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 4.32,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.96,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 2.22,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.28,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 0.44,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 59.82,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.09,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 0.34,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 1.2,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'scallions',
                                amount: 0.88,
                                unit: '',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 3.36,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.27,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.06,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.04,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.06,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.24,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 1.97,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 6.72,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 28.98,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.06,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.19,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 21.74,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 7.56,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 1.68,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 3.89,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.5,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 0.77,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.02,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 104.69,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.16,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 0.6,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 2.1,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'sesame oil',
                                amount: 0.25,
                                unit: 't',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.45,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 9.95,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.16,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 0.15,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.47,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 1.13,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'sesame seeds',
                                amount: 1.0,
                                unit: 'servings',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 1.5,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.33,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 45.84,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.94,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 2.75,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.56,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.62,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.36,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.02,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 7.76,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 37.44,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 1.42,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.2,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.06,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 78.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.06,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.88,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 50.32,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.93,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 1.88,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 1.74,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 3.97,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.72,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 1.16,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 2.05,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 28.08,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            }
                        ],
                        caloricBreakdown: {
                            percentProtein: 13.63,
                            percentFat: 28.46,
                            percentCarbs: 57.91
                        },
                        weightPerServing: {
                            amount: 220,
                            unit: 'g'
                        }
                    },
                    summary: 'Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199">Vegetable Fried Brown Rice</a>, <a href="https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261">Vegetable Fried Cauliflower Rice</a>, and <a href="https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042">Easy Vegetable Fried Brown Rice with Egg</a>.',
                    cuisines: [
                        'Chinese',
                        'Asian'
                    ],
                    dishTypes: [
                        'side dish'
                    ],
                    diets: [
                        'gluten free',
                        'dairy free',
                        'lacto ovo vegetarian',
                        'vegan'
                    ],
                    occasions: [],
                    analyzedInstructions: [
                        {
                            name: '',
                            steps: [
                                {
                                    number: 1,
                                    step: 'Remove the cauliflower\'s tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of "cauliflower rice."',
                                    ingredients: [
                                        {
                                            id: 10011135,
                                            name: 'cauliflower florets',
                                            localizedName: 'cauliflower florets',
                                            image: 'cauliflower.jpg'
                                        },
                                        {
                                            id: 10111135,
                                            name: 'cauliflower rice',
                                            localizedName: 'cauliflower rice',
                                            image: 'cauliflower.jpg'
                                        },
                                        {
                                            id: 11135,
                                            name: 'cauliflower',
                                            localizedName: 'cauliflower',
                                            image: 'cauliflower.jpg'
                                        },
                                        {
                                            id: 20028,
                                            name: 'couscous',
                                            localizedName: 'couscous',
                                            image: 'couscous-cooked.jpg'
                                        },
                                        {
                                            id: 20444,
                                            name: 'rice',
                                            localizedName: 'rice',
                                            image: 'uncooked-white-rice.png'
                                        }
                                    ],
                                    equipment: [
                                        {
                                            id: 404771,
                                            name: 'food processor',
                                            localizedName: 'food processor',
                                            image: 'food-processor.png'
                                        }
                                    ]
                                },
                                {
                                    number: 2,
                                    step: 'Heat 1T butter and 1T oil in a large skillet over medium heat.',
                                    ingredients: [
                                        {
                                            id: 1001,
                                            name: 'butter',
                                            localizedName: 'butter',
                                            image: 'butter-sliced.jpg'
                                        },
                                        {
                                            id: 4582,
                                            name: 'cooking oil',
                                            localizedName: 'cooking oil',
                                            image: 'vegetable-oil.jpg'
                                        }
                                    ],
                                    equipment: [
                                        {
                                            id: 404645,
                                            name: 'frying pan',
                                            localizedName: 'frying pan',
                                            image: 'pan.png'
                                        }
                                    ]
                                },
                                {
                                    number: 3,
                                    step: 'Add garlic and the white and light green pieces of scallion. Sauté about a minute.',
                                    ingredients: [
                                        {
                                            id: 11291,
                                            name: 'green onions',
                                            localizedName: 'green onions',
                                            image: 'spring-onions.jpg'
                                        },
                                        {
                                            id: 11215,
                                            name: 'garlic',
                                            localizedName: 'garlic',
                                            image: 'garlic.png'
                                        }
                                    ],
                                    equipment: []
                                },
                                {
                                    number: 4,
                                    step: 'Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.',
                                    ingredients: [
                                        {
                                            id: 11135,
                                            name: 'cauliflower',
                                            localizedName: 'cauliflower',
                                            image: 'cauliflower.jpg'
                                        },
                                        {
                                            id: 0,
                                            name: 'spread',
                                            localizedName: 'spread',
                                            image: ''
                                        },
                                        {
                                            id: 4582,
                                            name: 'cooking oil',
                                            localizedName: 'cooking oil',
                                            image: 'vegetable-oil.jpg'
                                        }
                                    ],
                                    equipment: [
                                        {
                                            id: 404645,
                                            name: 'frying pan',
                                            localizedName: 'frying pan',
                                            image: 'pan.png'
                                        }
                                    ]
                                },
                                {
                                    number: 5,
                                    step: 'Add cold rice (it separates easily, so it won\'t clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.',
                                    ingredients: [
                                        {
                                            id: 4047,
                                            name: 'coconut oil',
                                            localizedName: 'coconut oil',
                                            image: 'oil-coconut.jpg'
                                        },
                                        {
                                            id: 1001,
                                            name: 'butter',
                                            localizedName: 'butter',
                                            image: 'butter-sliced.jpg'
                                        },
                                        {
                                            id: 0,
                                            name: 'spread',
                                            localizedName: 'spread',
                                            image: ''
                                        },
                                        {
                                            id: 20444,
                                            name: 'rice',
                                            localizedName: 'rice',
                                            image: 'uncooked-white-rice.png'
                                        }
                                    ],
                                    equipment: [
                                        {
                                            id: 404645,
                                            name: 'frying pan',
                                            localizedName: 'frying pan',
                                            image: 'pan.png'
                                        }
                                    ]
                                },
                                {
                                    number: 6,
                                    step: 'Let it sit for about two minutes—so the rice can get toasted and a little crispy.',
                                    ingredients: [
                                        {
                                            id: 20444,
                                            name: 'rice',
                                            localizedName: 'rice',
                                            image: 'uncooked-white-rice.png'
                                        }
                                    ],
                                    equipment: [],
                                    length: {
                                        number: 2,
                                        unit: 'minutes'
                                    }
                                },
                                {
                                    number: 7,
                                    step: 'Add the peas and broccoli and stir again.',
                                    ingredients: [
                                        {
                                            id: 11090,
                                            name: 'broccoli',
                                            localizedName: 'broccoli',
                                            image: 'broccoli.jpg'
                                        },
                                        {
                                            id: 11304,
                                            name: 'peas',
                                            localizedName: 'peas',
                                            image: 'peas.jpg'
                                        }
                                    ],
                                    equipment: []
                                },
                                {
                                    number: 8,
                                    step: 'Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.',
                                    ingredients: [
                                        {
                                            id: 4058,
                                            name: 'sesame oil',
                                            localizedName: 'sesame oil',
                                            image: 'sesame-oil.png'
                                        },
                                        {
                                            id: 16124,
                                            name: 'soy sauce',
                                            localizedName: 'soy sauce',
                                            image: 'soy-sauce.jpg'
                                        },
                                        {
                                            id: 20444,
                                            name: 'rice',
                                            localizedName: 'rice',
                                            image: 'uncooked-white-rice.png'
                                        }
                                    ],
                                    equipment: []
                                },
                                {
                                    number: 9,
                                    step: 'Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you\'d like, more soy sauce. Keep in mind that if you\'re serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.',
                                    ingredients: [
                                        {
                                            id: 12023,
                                            name: 'sesame seeds',
                                            localizedName: 'sesame seeds',
                                            image: 'sesame-seeds.png'
                                        },
                                        {
                                            id: 16124,
                                            name: 'soy sauce',
                                            localizedName: 'soy sauce',
                                            image: 'soy-sauce.jpg'
                                        },
                                        {
                                            id: 11291,
                                            name: 'green onions',
                                            localizedName: 'green onions',
                                            image: 'spring-onions.jpg'
                                        },
                                        {
                                            id: 5006,
                                            name: 'whole chicken',
                                            localizedName: 'whole chicken',
                                            image: 'whole-chicken.jpg'
                                        },
                                        {
                                            id: 18070,
                                            name: 'toast',
                                            localizedName: 'toast',
                                            image: 'toast'
                                        },
                                        {
                                            id: 20444,
                                            name: 'rice',
                                            localizedName: 'rice',
                                            image: 'uncooked-white-rice.png'
                                        },
                                        {
                                            id: 2047,
                                            name: 'salt',
                                            localizedName: 'salt',
                                            image: 'salt.jpg'
                                        }
                                    ],
                                    equipment: [
                                        {
                                            id: 404645,
                                            name: 'frying pan',
                                            localizedName: 'frying pan',
                                            image: 'pan.png'
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    spoonacularSourceUrl: 'https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426'
                },
                {
                    vegetarian: true,
                    vegan: true,
                    glutenFree: false,
                    dairyFree: true,
                    veryHealthy: true,
                    cheap: false,
                    veryPopular: true,
                    sustainable: false,
                    weightWatcherSmartPoints: 19,
                    gaps: 'no',
                    lowFodmap: false,
                    aggregateLikes: 1669,
                    spoonacularScore: 99.0,
                    healthScore: 78.0,
                    creditsText: 'Jen West',
                    license: 'CC BY-SA 3.0',
                    sourceName: 'Pink When',
                    pricePerServing: 83.23,
                    id: 715594,
                    title: 'Homemade Garlic and Basil French Fries',
                    readyInMinutes: 45,
                    servings: 2,
                    sourceUrl: 'http://www.pinkwhen.com/homemade-french-fries/',
                    image: 'https://spoonacular.com/recipeImages/715594-312x231.jpg',
                    imageType: 'jpg',
                    nutrition: {
                        nutrients: [
                            {
                                title: 'Calories',
                                amount: 349.28,
                                unit: 'cal',
                                percentOfDailyNeeds: 17.46
                            },
                            {
                                title: 'Fat',
                                amount: 14.63,
                                unit: 'g',
                                percentOfDailyNeeds: 22.51
                            },
                            {
                                title: 'Saturated Fat',
                                amount: 11.51,
                                unit: 'g',
                                percentOfDailyNeeds: 71.93
                            },
                            {
                                title: 'Carbohydrates',
                                amount: 47.86,
                                unit: 'g',
                                percentOfDailyNeeds: 15.95
                            },
                            {
                                title: 'Net Carbohydrates',
                                amount: 46.12,
                                unit: 'g',
                                percentOfDailyNeeds: 16.77
                            },
                            {
                                title: 'Sugar',
                                amount: 0.18,
                                unit: 'g',
                                percentOfDailyNeeds: 0.2
                            },
                            {
                                title: 'Cholesterol',
                                amount: 0.0,
                                unit: 'mg',
                                percentOfDailyNeeds: 0.0
                            },
                            {
                                title: 'Sodium',
                                amount: 195.24,
                                unit: 'mg',
                                percentOfDailyNeeds: 8.49
                            },
                            {
                                title: 'Protein',
                                amount: 6.57,
                                unit: 'g',
                                percentOfDailyNeeds: 13.14
                            },
                            {
                                title: 'Vitamin B1',
                                amount: 0.49,
                                unit: 'mg',
                                percentOfDailyNeeds: 32.81
                            },
                            {
                                title: 'Selenium',
                                amount: 21.23,
                                unit: 'µg',
                                percentOfDailyNeeds: 30.32
                            },
                            {
                                title: 'Folate',
                                amount: 116.47,
                                unit: 'µg',
                                percentOfDailyNeeds: 29.12
                            },
                            {
                                title: 'Manganese',
                                amount: 0.46,
                                unit: 'mg',
                                percentOfDailyNeeds: 23.12
                            },
                            {
                                title: 'Vitamin B3',
                                amount: 3.72,
                                unit: 'mg',
                                percentOfDailyNeeds: 18.59
                            },
                            {
                                title: 'Vitamin B2',
                                amount: 0.31,
                                unit: 'mg',
                                percentOfDailyNeeds: 18.31
                            },
                            {
                                title: 'Iron',
                                amount: 3.0,
                                unit: 'mg',
                                percentOfDailyNeeds: 16.69
                            },
                            {
                                title: 'Vitamin K',
                                amount: 16.09,
                                unit: 'µg',
                                percentOfDailyNeeds: 15.32
                            },
                            {
                                title: 'Fiber',
                                amount: 1.75,
                                unit: 'g',
                                percentOfDailyNeeds: 6.99
                            },
                            {
                                title: 'Phosphorus',
                                amount: 69.7,
                                unit: 'mg',
                                percentOfDailyNeeds: 6.97
                            },
                            {
                                title: 'Copper',
                                amount: 0.1,
                                unit: 'mg',
                                percentOfDailyNeeds: 5.12
                            },
                            {
                                title: 'Vitamin E',
                                amount: 0.6,
                                unit: 'mg',
                                percentOfDailyNeeds: 3.97
                            },
                            {
                                title: 'Magnesium',
                                amount: 15.77,
                                unit: 'mg',
                                percentOfDailyNeeds: 3.94
                            },
                            {
                                title: 'Vitamin A',
                                amount: 158.25,
                                unit: 'IU',
                                percentOfDailyNeeds: 3.17
                            },
                            {
                                title: 'Zinc',
                                amount: 0.47,
                                unit: 'mg',
                                percentOfDailyNeeds: 3.11
                            },
                            {
                                title: 'Vitamin B5',
                                amount: 0.28,
                                unit: 'mg',
                                percentOfDailyNeeds: 2.81
                            },
                            {
                                title: 'Potassium',
                                amount: 77.26,
                                unit: 'mg',
                                percentOfDailyNeeds: 2.21
                            },
                            {
                                title: 'Vitamin B6',
                                amount: 0.03,
                                unit: 'mg',
                                percentOfDailyNeeds: 1.71
                            },
                            {
                                title: 'Calcium',
                                amount: 14.9,
                                unit: 'mg',
                                percentOfDailyNeeds: 1.49
                            }
                        ],
                        properties: [
                            {
                                title: 'Glycemic Index',
                                amount: 75.0,
                                unit: ''
                            },
                            {
                                title: 'Glycemic Load',
                                amount: 34.53,
                                unit: ''
                            }
                        ],
                        ingredients: [
                            {
                                name: 'basil',
                                amount: 0.13,
                                unit: 'cup',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 0.69,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.05,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.01,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.54,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 2.04,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 8.85,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.09,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 12.44,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 5.31,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.12,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 1.68,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.03,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 0.08,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.02,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 158.25,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.1,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 0.34,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 1.92,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'flour',
                                amount: 0.5,
                                unit: 'cup',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.31,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.05,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.09,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 227.5,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 1.69,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 21.19,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.1,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.44,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 3.69,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 96.25,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.17,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 114.38,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 66.88,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.04,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 6.46,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.43,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.49,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 0.19,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 9.38,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 1.25,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 67.5,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 46.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 47.69,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.26,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.27,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.61,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 2.9,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 6.5,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 13.75,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'garlic powder',
                                amount: 0.13,
                                unit: '',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 0.41,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.03,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 0.06,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 1.49,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.02,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 0.1,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.08,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 0.52,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.08,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 0.09,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 0.08,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 0.1,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Trans Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    }
                                ]
                            },
                            {
                                name: 'garlic salt',
                                amount: 1.0,
                                unit: 'servings',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 0.0,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 0.04,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 0.12,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 193.79,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fluoride',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'potatoes',
                                amount: 2.0,
                                unit: '',
                                nutrients: [
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    }
                                ]
                            },
                            {
                                name: 'vegetable oil',
                                amount: 1.0,
                                unit: 'servings',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 1.6,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 120.68,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 11.41,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.53,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 3.46,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.22,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 14.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            }
                        ],
                        caloricBreakdown: {
                            percentProtein: 7.52,
                            percentFat: 37.69,
                            percentCarbs: 54.79
                        },
                        weightPerServing: {
                            amount: 506,
                            unit: 'g'
                        }
                    },
                    summary: 'The recipe Homemade Garlic and Basil French Fries is ready <b>in roughly 45 minutes</b> and is definitely a super <b>vegan</b> option for lovers of American food. One serving contains <b>596 calories</b>, <b>18g of protein</b>, and <b>15g of fat</b>. For <b>83 cents per serving</b>, you get a side dish that serves 2. Several people made this recipe, and 1669 would say it hit the spot. If you have garlic salt, flour, garlic powder, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 100%</b>. This score is outstanding. Try <a href="https://spoonacular.com/recipes/homemade-french-fries-with-fresh-garlic-and-dill-494220">Homemade French Fries with Fresh Garlic and Dill</a>, <a href="https://spoonacular.com/recipes/roasted-garlic-french-fries-519898">Roasted Garlic French Fries</a>, and <a href="https://spoonacular.com/recipes/sweet-potato-fries-with-basil-salt-and-garlic-mayonnaise-120735">Sweet Potato Fries With Basil Salt and Garlic Mayonnaise</a> for similar recipes.',
                    cuisines: [
                        'American'
                    ],
                    dishTypes: [
                        'lunch',
                        'main course',
                        'main dish',
                        'dinner'
                    ],
                    diets: [
                        'dairy free',
                        'lacto ovo vegetarian',
                        'vegan'
                    ],
                    occasions: [],
                    analyzedInstructions: [],
                    spoonacularSourceUrl: 'https://spoonacular.com/homemade-garlic-and-basil-french-fries-715594'
                },
                {
                    vegetarian: true,
                    vegan: false,
                    glutenFree: false,
                    dairyFree: false,
                    veryHealthy: true,
                    cheap: false,
                    veryPopular: true,
                    sustainable: false,
                    weightWatcherSmartPoints: 15,
                    gaps: 'no',
                    lowFodmap: false,
                    preparationMinutes: 5,
                    cookingMinutes: 0,
                    aggregateLikes: 689,
                    spoonacularScore: 99.0,
                    healthScore: 63.0,
                    creditsText: 'Jen West',
                    license: 'CC BY-SA 3.0',
                    sourceName: 'Pink When',
                    pricePerServing: 204.29,
                    id: 715497,
                    title: 'Berry Banana Breakfast Smoothie',
                    readyInMinutes: 5,
                    servings: 1,
                    sourceUrl: 'http://www.pinkwhen.com/berry-banana-breakfast-smoothie/',
                    image: 'https://spoonacular.com/recipeImages/715497-312x231.jpg',
                    imageType: 'jpg',
                    nutrition: {
                        nutrients: [
                            {
                                title: 'Calories',
                                amount: 440.37,
                                unit: 'cal',
                                percentOfDailyNeeds: 22.02
                            },
                            {
                                title: 'Fat',
                                amount: 9.87,
                                unit: 'g',
                                percentOfDailyNeeds: 15.19
                            },
                            {
                                title: 'Saturated Fat',
                                amount: 2.68,
                                unit: 'g',
                                percentOfDailyNeeds: 16.75
                            },
                            {
                                title: 'Carbohydrates',
                                amount: 68.8,
                                unit: 'g',
                                percentOfDailyNeeds: 22.93
                            },
                            {
                                title: 'Net Carbohydrates',
                                amount: 64.76,
                                unit: 'g',
                                percentOfDailyNeeds: 23.55
                            },
                            {
                                title: 'Sugar',
                                amount: 50.0,
                                unit: 'g',
                                percentOfDailyNeeds: 55.56
                            },
                            {
                                title: 'Cholesterol',
                                amount: 11.35,
                                unit: 'mg',
                                percentOfDailyNeeds: 3.78
                            },
                            {
                                title: 'Sodium',
                                amount: 400.72,
                                unit: 'mg',
                                percentOfDailyNeeds: 17.42
                            },
                            {
                                title: 'Protein',
                                amount: 20.42,
                                unit: 'g',
                                percentOfDailyNeeds: 40.84
                            },
                            {
                                title: 'Vitamin C',
                                amount: 64.41,
                                unit: 'mg',
                                percentOfDailyNeeds: 78.07
                            },
                            {
                                title: 'Calcium',
                                amount: 747.77,
                                unit: 'mg',
                                percentOfDailyNeeds: 74.78
                            },
                            {
                                title: 'Vitamin B12',
                                amount: 3.75,
                                unit: 'µg',
                                percentOfDailyNeeds: 62.53
                            },
                            {
                                title: 'Vitamin B2',
                                amount: 1.02,
                                unit: 'mg',
                                percentOfDailyNeeds: 59.83
                            },
                            {
                                title: 'Vitamin B3',
                                amount: 9.3,
                                unit: 'mg',
                                percentOfDailyNeeds: 46.48
                            },
                            {
                                title: 'Vitamin B6',
                                amount: 0.84,
                                unit: 'mg',
                                percentOfDailyNeeds: 42.17
                            },
                            {
                                title: 'Vitamin E',
                                amount: 6.24,
                                unit: 'mg',
                                percentOfDailyNeeds: 41.59
                            },
                            {
                                title: 'Phosphorus',
                                amount: 372.38,
                                unit: 'mg',
                                percentOfDailyNeeds: 37.24
                            },
                            {
                                title: 'Folate',
                                amount: 134.47,
                                unit: 'µg',
                                percentOfDailyNeeds: 33.62
                            },
                            {
                                title: 'Potassium',
                                amount: 1109.7,
                                unit: 'mg',
                                percentOfDailyNeeds: 31.71
                            },
                            {
                                title: 'Selenium',
                                amount: 17.21,
                                unit: 'µg',
                                percentOfDailyNeeds: 24.59
                            },
                            {
                                title: 'Vitamin A',
                                amount: 1057.73,
                                unit: 'IU',
                                percentOfDailyNeeds: 21.15
                            },
                            {
                                title: 'Vitamin B1',
                                amount: 0.32,
                                unit: 'mg',
                                percentOfDailyNeeds: 21.08
                            },
                            {
                                title: 'Zinc',
                                amount: 3.0,
                                unit: 'mg',
                                percentOfDailyNeeds: 19.97
                            },
                            {
                                title: 'Copper',
                                amount: 0.39,
                                unit: 'mg',
                                percentOfDailyNeeds: 19.48
                            },
                            {
                                title: 'Manganese',
                                amount: 0.39,
                                unit: 'mg',
                                percentOfDailyNeeds: 19.41
                            },
                            {
                                title: 'Vitamin D',
                                amount: 2.83,
                                unit: 'µg',
                                percentOfDailyNeeds: 18.88
                            },
                            {
                                title: 'Magnesium',
                                amount: 67.61,
                                unit: 'mg',
                                percentOfDailyNeeds: 16.9
                            },
                            {
                                title: 'Fiber',
                                amount: 4.04,
                                unit: 'g',
                                percentOfDailyNeeds: 16.16
                            },
                            {
                                title: 'Vitamin B5',
                                amount: 1.47,
                                unit: 'mg',
                                percentOfDailyNeeds: 14.68
                            },
                            {
                                title: 'Iron',
                                amount: 2.53,
                                unit: 'mg',
                                percentOfDailyNeeds: 14.08
                            },
                            {
                                title: 'Vitamin K',
                                amount: 2.0,
                                unit: 'µg',
                                percentOfDailyNeeds: 1.9
                            }
                        ],
                        properties: [
                            {
                                title: 'Glycemic Index',
                                amount: 202.19,
                                unit: ''
                            },
                            {
                                title: 'Glycemic Load',
                                amount: 18.97,
                                unit: ''
                            }
                        ],
                        ingredients: [
                            {
                                name: 'banana',
                                amount: 0.25,
                                unit: 'cup',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 33.38,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.98,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.38,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.04,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.06,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.25,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 4.59,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 3.26,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 7.5,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 134.25,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.04,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.41,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.1,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 0.19,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 1.88,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.14,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.38,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 8.25,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 7.59,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 8.57,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.03,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.13,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.12,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 24.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.1,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 3.68,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 10.13,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fluoride',
                                        amount: 0.83,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'graham cracker crumbs',
                                amount: 2.0,
                                unit: 'tbsp',
                                nutrients: [
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.05,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.72,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 84.8,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.68,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.31,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.39,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.76,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 4.6,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 9.2,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 35.4,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 1.4,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.05,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 15.8,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 131.8,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 40.4,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 14.56,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 15.24,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.09,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 2.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.83,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 11.8,
                                        unit: 'mg'
                                    }
                                ]
                            },
                            {
                                name: 'soy milk',
                                amount: 1.0,
                                unit: 'cup',
                                nutrients: [
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.47,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.97,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.29,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 106.2,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.94,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 5.43,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.49,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.57,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 7.77,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 5.97,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 16.99,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 75.52,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 332.76,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 2.55,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 5.95,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 6.94,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.15,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 330.4,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.55,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 118.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 7.2,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 8.14,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 2.81,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 4.7,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 927.48,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 1.16,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 2.83,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Trans Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    }
                                ]
                            },
                            {
                                name: 'strawberries',
                                amount: 0.5,
                                unit: 'cup',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.03,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 23.04,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 1.44,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.29,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.1,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.28,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 3.52,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 42.34,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 17.28,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 110.16,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.21,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.48,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.28,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 1.58,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 11.52,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.72,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 17.28,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 4.09,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 5.53,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.11,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.09,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.22,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 8.64,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.3,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 4.1,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 9.36,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fluoride',
                                        amount: 3.17,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'vanilla yogurt',
                                amount: 1.0,
                                unit: 'container',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.46,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.78,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 192.95,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 11.12,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 1.83,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 1.88,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 11.35,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.24,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 31.33,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 1.82,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 24.97,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 497.13,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 1.2,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.05,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 11.19,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.1,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 0.23,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 388.17,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.1,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 149.82,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 306.45,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 31.33,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 31.33,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.08,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 1.25,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 2.84,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 97.61,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.16,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 34.5,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 36.32,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fluoride',
                                        amount: 27.24,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            }
                        ],
                        caloricBreakdown: {
                            percentProtein: 18.32,
                            percentFat: 19.94,
                            percentCarbs: 61.74
                        },
                        weightPerServing: {
                            amount: 593,
                            unit: 'g'
                        }
                    },
                    summary: 'If you have around <b>5 minutes</b> to spend in the kitchen, Berry Banana Breakfast Smoothie might be a tremendous <b>lacto ovo vegetarian</b> recipe to try. This recipe makes 1 servings with <b>501 calories</b>, <b>21g of protein</b>, and <b>11g of fat</b> each. For <b>$2.19 per serving</b>, this recipe <b>covers 32%</b> of your daily requirements of vitamins and minerals. 688 people found this recipe to be tasty and satisfying. It is brought to you by Pink When. Head to the store and pick up graham crackers, soy milk, banana, and a few other things to make it today. It works well as a morn meal. Overall, this recipe earns a <b>super spoonacular score of 100%</b>. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-249239">Berry Banana Breakfast Smoothie</a>, <a href="https://spoonacular.com/recipes/berry-and-banana-oat-breakfast-smoothie-626817">Berry and Bananan Oat Breakfast Smoothie</a>, and <a href="https://spoonacular.com/recipes/berry-breakfast-smoothie-774875">Berry Breakfast Smoothie</a>.',
                    cuisines: [],
                    dishTypes: [
                        'morning meal',
                        'brunch',
                        'breakfast'
                    ],
                    diets: [
                        'lacto ovo vegetarian'
                    ],
                    occasions: [],
                    analyzedInstructions: [
                        {
                            name: '',
                            steps: [
                                {
                                    number: 1,
                                    step: 'Take some yogurt in your favorite flavor and add 1 container to your blender.',
                                    ingredients: [
                                        {
                                            id: 1116,
                                            name: 'yogurt',
                                            localizedName: 'yogurt',
                                            image: 'plain-yogurt.jpg'
                                        }
                                    ],
                                    equipment: [
                                        {
                                            id: 404726,
                                            name: 'blender',
                                            localizedName: 'blender',
                                            image: 'blender.png'
                                        }
                                    ]
                                },
                                {
                                    number: 2,
                                    step: 'Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.',
                                    ingredients: [
                                        {
                                            id: 10018617,
                                            name: 'graham cracker crumbs',
                                            localizedName: 'graham cracker crumbs',
                                            image: 'graham-crackers.jpg'
                                        },
                                        {
                                            id: 16223,
                                            name: 'soymilk',
                                            localizedName: 'soymilk',
                                            image: 'soy-milk.jpg'
                                        },
                                        {
                                            id: 1009054,
                                            name: 'berries',
                                            localizedName: 'berries',
                                            image: 'berries-mixed.jpg'
                                        },
                                        {
                                            id: 9040,
                                            name: 'banana',
                                            localizedName: 'banana',
                                            image: 'bananas.jpg'
                                        }
                                    ],
                                    equipment: []
                                }
                            ]
                        }
                    ],
                    spoonacularSourceUrl: 'https://spoonacular.com/berry-banana-breakfast-smoothie-715497'
                },
                {
                    vegetarian: true,
                    vegan: true,
                    glutenFree: true,
                    dairyFree: true,
                    veryHealthy: true,
                    cheap: false,
                    veryPopular: false,
                    sustainable: false,
                    weightWatcherSmartPoints: 5,
                    gaps: 'no',
                    lowFodmap: false,
                    aggregateLikes: 19,
                    spoonacularScore: 99.0,
                    healthScore: 93.0,
                    creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
                    license: 'CC BY 3.0',
                    sourceName: 'Foodista',
                    pricePerServing: 69.09,
                    id: 644387,
                    title: 'Garlicky Kale',
                    readyInMinutes: 45,
                    servings: 2,
                    sourceUrl: 'http://www.foodista.com/recipe/J2FTJBF7/garlicky-kale',
                    image: 'https://spoonacular.com/recipeImages/644387-312x231.jpg',
                    imageType: 'jpg',
                    nutrition: {
                        nutrients: [
                            {
                                title: 'Calories',
                                amount: 178.97,
                                unit: 'cal',
                                percentOfDailyNeeds: 8.95
                            },
                            {
                                title: 'Fat',
                                amount: 14.61,
                                unit: 'g',
                                percentOfDailyNeeds: 22.48
                            },
                            {
                                title: 'Saturated Fat',
                                amount: 1.99,
                                unit: 'g',
                                percentOfDailyNeeds: 12.46
                            },
                            {
                                title: 'Carbohydrates',
                                amount: 10.27,
                                unit: 'g',
                                percentOfDailyNeeds: 3.42
                            },
                            {
                                title: 'Net Carbohydrates',
                                amount: 10.24,
                                unit: 'g',
                                percentOfDailyNeeds: 3.72
                            },
                            {
                                title: 'Sugar',
                                amount: 3.6,
                                unit: 'g',
                                percentOfDailyNeeds: 4.0
                            },
                            {
                                title: 'Cholesterol',
                                amount: 0.0,
                                unit: 'mg',
                                percentOfDailyNeeds: 0.0
                            },
                            {
                                title: 'Sodium',
                                amount: 30.76,
                                unit: 'mg',
                                percentOfDailyNeeds: 1.34
                            },
                            {
                                title: 'Protein',
                                amount: 3.0,
                                unit: 'g',
                                percentOfDailyNeeds: 5.99
                            },
                            {
                                title: 'Vitamin K',
                                amount: 466.57,
                                unit: 'µg',
                                percentOfDailyNeeds: 444.36
                            },
                            {
                                title: 'Vitamin A',
                                amount: 6493.64,
                                unit: 'IU',
                                percentOfDailyNeeds: 129.87
                            },
                            {
                                title: 'Vitamin C',
                                amount: 78.47,
                                unit: 'mg',
                                percentOfDailyNeeds: 95.11
                            },
                            {
                                title: 'Copper',
                                amount: 0.99,
                                unit: 'mg',
                                percentOfDailyNeeds: 49.25
                            },
                            {
                                title: 'Manganese',
                                amount: 0.48,
                                unit: 'mg',
                                percentOfDailyNeeds: 24.24
                            },
                            {
                                title: 'Vitamin E',
                                amount: 2.01,
                                unit: 'mg',
                                percentOfDailyNeeds: 13.4
                            },
                            {
                                title: 'Calcium',
                                amount: 106.84,
                                unit: 'mg',
                                percentOfDailyNeeds: 10.68
                            },
                            {
                                title: 'Potassium',
                                amount: 352.19,
                                unit: 'mg',
                                percentOfDailyNeeds: 10.06
                            },
                            {
                                title: 'Vitamin B6',
                                amount: 0.19,
                                unit: 'mg',
                                percentOfDailyNeeds: 9.73
                            },
                            {
                                title: 'Magnesium',
                                amount: 33.81,
                                unit: 'mg',
                                percentOfDailyNeeds: 8.45
                            },
                            {
                                title: 'Iron',
                                amount: 1.23,
                                unit: 'mg',
                                percentOfDailyNeeds: 6.85
                            },
                            {
                                title: 'Phosphorus',
                                amount: 66.66,
                                unit: 'mg',
                                percentOfDailyNeeds: 6.67
                            },
                            {
                                title: 'Vitamin B2',
                                amount: 0.09,
                                unit: 'mg',
                                percentOfDailyNeeds: 5.07
                            },
                            {
                                title: 'Folate',
                                amount: 20.2,
                                unit: 'µg',
                                percentOfDailyNeeds: 5.05
                            },
                            {
                                title: 'Vitamin B1',
                                amount: 0.07,
                                unit: 'mg',
                                percentOfDailyNeeds: 4.97
                            },
                            {
                                title: 'Vitamin B3',
                                amount: 0.66,
                                unit: 'mg',
                                percentOfDailyNeeds: 3.3
                            },
                            {
                                title: 'Zinc',
                                amount: 0.4,
                                unit: 'mg',
                                percentOfDailyNeeds: 2.67
                            },
                            {
                                title: 'Selenium',
                                amount: 0.8,
                                unit: 'µg',
                                percentOfDailyNeeds: 1.14
                            }
                        ],
                        properties: [
                            {
                                title: 'Glycemic Index',
                                amount: 56.0,
                                unit: ''
                            },
                            {
                                title: 'Glycemic Load',
                                amount: 4.0,
                                unit: ''
                            }
                        ],
                        ingredients: [
                            {
                                name: 'balsamic vinegar',
                                amount: 1.5,
                                unit: 'tablespoons',
                                nutrients: [
                                    {
                                        name: 'Phosphorus',
                                        amount: 4.56,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 4.09,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 21.12,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 4.09,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 3.59,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 26.88,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.17,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.12,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 2.88,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 6.48,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 5.52,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Trans Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    }
                                ]
                            },
                            {
                                name: 'garlic',
                                amount: 0.5,
                                unit: 'clove',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 2.24,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.03,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.21,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.02,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.47,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 0.05,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 6.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.1,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 0.03,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 2.72,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.02,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.26,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 2.3,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.46,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 0.5,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.01,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.14,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.03,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 0.35,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 0.38,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'kale',
                                amount: 0.5,
                                unit: 'bunch',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.08,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 0.03,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.97,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 31.85,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.59,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 0.06,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.36,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.65,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 78.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 20.15,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 319.15,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 2.78,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.43,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.07,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 458.12,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 97.5,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.18,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 24.7,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 59.8,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 5.69,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 5.69,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 0.22,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.06,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 0.6,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 6493.5,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.96,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 30.55,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            },
                            {
                                name: 'olive oil',
                                amount: 1.0,
                                unit: 'servings',
                                nutrients: [
                                    {
                                        name: 'Alcohol',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B2',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Mono Unsaturated Fat',
                                        amount: 10.21,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Copper',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Calories',
                                        amount: 123.76,
                                        unit: 'cal'
                                    },
                                    {
                                        name: 'Fiber',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Selenium',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Saturated Fat',
                                        amount: 1.93,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Zinc',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Cholesterol',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B3',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folic Acid',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Sugar',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin C',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Folate',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Potassium',
                                        amount: 0.14,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Caffeine',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B12',
                                        amount: 0.0,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Vitamin E',
                                        amount: 2.01,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Protein',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Manganese',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B1',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin K',
                                        amount: 8.43,
                                        unit: 'µg'
                                    },
                                    {
                                        name: 'Calcium',
                                        amount: 0.14,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin B6',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Sodium',
                                        amount: 0.28,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Phosphorus',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Net Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Carbohydrates',
                                        amount: 0.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Poly Unsaturated Fat',
                                        amount: 1.47,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin B5',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Fat',
                                        amount: 14.0,
                                        unit: 'g'
                                    },
                                    {
                                        name: 'Vitamin A',
                                        amount: 0.0,
                                        unit: 'IU'
                                    },
                                    {
                                        name: 'Iron',
                                        amount: 0.08,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Choline',
                                        amount: 0.04,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Magnesium',
                                        amount: 0.0,
                                        unit: 'mg'
                                    },
                                    {
                                        name: 'Vitamin D',
                                        amount: 0.0,
                                        unit: 'µg'
                                    }
                                ]
                            }
                        ],
                        caloricBreakdown: {
                            percentProtein: 6.49,
                            percentFat: 71.25,
                            percentCarbs: 22.26
                        },
                        weightPerServing: {
                            amount: 105,
                            unit: 'g'
                        }
                    },
                    summary: 'Garlicky Kale might be just the side dish you are searching for. This caveman, gluten free, primal, and whole 30 recipe serves 2 and costs <b>69 cents per serving</b>. One serving contains <b>179 calories</b>, <b>3g of protein</b>, and <b>15g of fat</b>. A few people made this recipe, and 17 would say it hit the spot. If you have olive oil, garlic, curly kale, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is awesome. Try <a href="https://spoonacular.com/recipes/garlicky-kale-248759">Garlicky Kale</a>, <a href="https://spoonacular.com/recipes/garlicky-kale-14910">Garlicky Kale</a>, and <a href="https://spoonacular.com/recipes/garlicky-kale-crostini-15010">Garlicky Kale Crostini</a> for similar recipes.',
                    cuisines: [],
                    dishTypes: [
                        'side dish'
                    ],
                    diets: [
                        'gluten free',
                        'dairy free',
                        'paleolithic',
                        'lacto ovo vegetarian',
                        'primal',
                        'vegan'
                    ],
                    occasions: [],
                    analyzedInstructions: [
                        {
                            name: '',
                            steps: [
                                {
                                    number: 1,
                                    step: 'Heat the olive oil in a large pot over medium heat.',
                                    ingredients: [
                                        {
                                            id: 4053,
                                            name: 'olive oil',
                                            localizedName: 'olive oil',
                                            image: 'olive-oil.jpg'
                                        }
                                    ],
                                    equipment: [
                                        {
                                            id: 404752,
                                            name: 'pot',
                                            localizedName: 'pot',
                                            image: 'stock-pot.jpg'
                                        }
                                    ]
                                },
                                {
                                    number: 2,
                                    step: 'Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover.',
                                    ingredients: [
                                        {
                                            id: 11233,
                                            name: 'kale',
                                            localizedName: 'kale',
                                            image: 'kale.jpg'
                                        }
                                    ],
                                    equipment: []
                                },
                                {
                                    number: 3,
                                    step: 'Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.',
                                    ingredients: [
                                        {
                                            id: 2053,
                                            name: 'vinegar',
                                            localizedName: 'vinegar',
                                            image: 'vinegar-(white).jpg'
                                        },
                                        {
                                            id: 11215,
                                            name: 'garlic',
                                            localizedName: 'garlic',
                                            image: 'garlic.png'
                                        }
                                    ],
                                    equipment: []
                                },
                                {
                                    number: 4,
                                    step: 'Serve hot.',
                                    ingredients: [],
                                    equipment: []
                                }
                            ]
                        }
                    ],
                    spoonacularSourceUrl: 'https://spoonacular.com/garlicky-kale-644387'
                }
                ]
        };
    }
}
