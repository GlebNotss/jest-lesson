const reverseString = require('./task/task_01')

/*test(
    'Проверяем reverse строки',
    () => {
        expect(reverseString('Hello w!')).toBe('!w olleH')
    }
)*/

describe(
    'моя проверка',
    () => {
        const testCase = [
            {
                string: 'Привет',
                expected: 'тевирП'
            },
            {
                string: 'Что-то',
                expected: 'от-отЧ'
            },
            {
                string: 'Как дела',
                expected: 'алед каК'
            }
        ]

        testCase.forEach(el => {
            it(
                `Входящая строка: ${el.string}, ожидаю: ${el.expected}`,
                () => {
                    const res = reverseString(el.string)
                    expect(res).toBe(el.expected)
                }
            )
        })
    }
)