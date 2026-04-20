import { orderByProps } from '../orderByProps.js'

test('проверка на отсортированный массив', () => {
    const obj = {
        name: 'мечник',
        health: 10,
        level: 2,
        attack: 80,
        defence: 40
    };

    const sort = ["name", "level"];

    const result = orderByProps(obj, sort);

    expect(result).toEqual(
        [
            {key: "name", value: "мечник"},
            {key: "level", value: 2},
            {key: "attack", value: 80},
            {key: "defence", value: 40},
            {key: "health", value: 10}
        ]
    )
})


test('если sort пустой — всё сортируется по алфавиту', () => {
    const obj = {
        name: 'мечник',
        health: 10,
        level: 2
    };

    const result = orderByProps(obj, []);

    expect(result).toEqual([
        { key: "health", value: 10 },
        { key: "level", value: 2 },
        { key: "name", value: "мечник" }
    ]);
});

test('если sort содержит все ключи — порядок только из sort', () => {
    const obj = {
        name: 'мечник',
        health: 10
    };

    const sort = ["health", "name"];

    const result = orderByProps(obj, sort);

    expect(result).toEqual([
        { key: "health", value: 10 },
        { key: "name", value: "мечник" }
    ]);
});

test('если в sort есть лишние ключи — значение undefined', () => {
    const obj = {
        name: 'мечник'
    };

    const sort = ["name", "level"];

    const result = orderByProps(obj, sort);

    expect(result).toEqual([
        { key: "name", value: "мечник" },
        { key: "level", value: undefined }
    ]);
});

test('если объект пустой — значения из sort будут undefined', () => {
    const result = orderByProps({}, ["name"]);

    expect(result).toEqual([
        { key: "name", value: undefined }
    ]);
});
