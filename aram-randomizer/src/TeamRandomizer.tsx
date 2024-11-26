import React from 'react';

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
};

const splitListRandomly = (inputList: string[]): [string[], string[]] => {
    const list1: string[] = [];
    const list2: string[] = [];
    const shuffledList = [...inputList].sort(() => 0.5 - Math.random());

    shuffledList.forEach((item, index) => {
        if (index % 2 === 0) {
            list1.push(item);
        } else {
            list2.push(item);
        }
    });

    return [list1, list2];
};

// Example usage:
const inputList = ["a", "b", "c", "d", "e", "f"];
const [list1, list2] = splitListRandomly(inputList);

const TeamRandomizer = () => (
    <div>
        <div>
            <h3>Team 1</h3>
            <ul>
                {list1.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <div>
            <h3>Team 2</h3>
            <ul>
                {list2.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
);

export default TeamRandomizer;