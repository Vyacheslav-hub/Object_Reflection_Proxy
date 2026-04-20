import { destructuring } from '.././destructuring.js';

describe('Функция извлечения спецатак', () => {
    test('должна корректно извлекать спецатаки с описанием', () => {
        const character = {
            special: [
                {
                    id: 1,
                    name: 'Атака',
                    icon: 'url',
                    description: 'Описание'
                }
            ]
        };

        const result = destructuring(character);

        expect(result).toEqual([
            {
                id: 1,
                name: 'Атака',
                icon: 'url',
                description: 'Описание'
            }
        ]);
    });

    test('должна подставлять описание по умолчанию, если оно отсутствует', () => {
        const character = {
            special: [
                {
                    id: 2,
                    name: 'Без описания',
                    icon: 'url'
                }
            ]
        };

        const result = destructuring(character);

        expect(result).toEqual([
            {
                id: 2,
                name: 'Без описания',
                icon: 'url',
                description: 'Описание недоступно'
            }
        ]);
    });
});
