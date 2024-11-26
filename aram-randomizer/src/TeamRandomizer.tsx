import React, { useState } from "react";

const TeamRandomizer = () => {
    const [input, setInput] = useState<string>("");
    const playerList: string[] = [];
    let team1list: string[] = [];
    let team2list: string[] = [];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

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

    function addPlayerList(input: string) {
        playerList.push(input);
        console.log(playerList);
        input = "";
    }

    return (
        <div>
            <input type="text" placeholder="Enter names" onChange={(e) => handleInputChange(e)} />
            <button onClick={() => addPlayerList(input)}>
                Add
            </button>
            <button onClick={() => splitListRandomly(playerList)}>
                Create Random Teams
            </button>
            <div>
                <h3>Team 1</h3>
                <ul>
                    {team1list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Team 2</h3>
                <ul>
                    {team2list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default TeamRandomizer;