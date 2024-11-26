import React, { useState, useEffect } from "react";

const TeamRandomizer = () => {
    const [input, setInput] = useState<string>(""); // Zustand für das Eingabefeld
    const [playerList, setPlayerList] = useState<string[]>([]); // Zustand für die Liste der Spieler
    const [team1list, setTeam1List] = useState<string[]>([]); // Zustand für Team 1
    const [team2list, setTeam2List] = useState<string[]>([]); // Zustand für Team 2

    // Eingabefeld aktualisieren
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    // Spieler hinzufügen
    const addPlayerList = () => {
        if (input.trim() !== "") {
            setPlayerList((prevList) => [...prevList, input.trim()]); // Spieler hinzufügen
            setInput(""); // Eingabefeld zurücksetzen
        }
    };

    // Teams zufällig aufteilen
    const splitListRandomly = (list: string[]) => {
        const shuffledList = [...list].sort(() => 0.5 - Math.random());
        const team1: string[] = [];
        const team2: string[] = [];

        shuffledList.forEach((item, index) => {
            if (index % 2 === 0) {
                team1.push(item);
            } else {
                team2.push(item);
            }
        });

        setTeam1List(team1);
        setTeam2List(team2);
    };

    // Teams aktualisieren, wenn playerList geändert wird
    useEffect(() => {
        if (playerList.length > 0) {
            splitListRandomly(playerList);
        }
    }, [playerList]); // Abhängigkeit: Wird ausgeführt, wenn playerList sich ändert

    return (
        <div>
            <input
                type="text"
                placeholder="Enter names"
                value={input}
                onChange={handleInputChange}
            />
            <button onClick={addPlayerList}>Add</button>
            <button onClick={() => splitListRandomly(playerList)}>Create Random Teams</button>
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
    );
};

export default TeamRandomizer;