const filterArray = require('./task/task_02')

describe(
    'Фильтруем массив',
    () => {
        const testCases = [
            {
                in: [0, 1, 2, 3, 4],
                expected: [0, 2, 4]
            },
            {
                in: [true, false, true, false, true, false],
                expected: [true, true, true]
            }
        ]

        testCases.forEach(el => {
            it(
                `Входящий: ${el.in}, Исходный: ${el.expected}`,
                () => {
                    const res = filterArray(el.in)

                    expect(res).toEqual(el.expected)
                }
            )
        })
    }
)


// toBe - для примитивов!
// toEqual - для массивов и объектов!