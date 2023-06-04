const getRandomNum = require('./task/task_03')

describe(
    'Тест случайного числа',
    () => {
        const testCases = [
            { 
                min: 5,
                max: 55
            },

            {
                min: 101,
                max: 143
            },

            {
                min: 200,
                max: 210
            }
        ]

        testCases.forEach(el => {
            it(
                `Минимальное число: ${el.min}, Максимальное число: ${el.max}`,
                () => {
                    const res = getRandomNum(el.min, el.max)
                    
                    expect(res).toBeGreaterThanOrEqual(el.min)
                    expect(res).toBeLessThanOrEqual(el.max)
                }
            )
        })
    }
)