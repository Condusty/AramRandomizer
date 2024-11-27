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
                className="rounded-md mr-2 text-sm font-medium bg-slate-800 text-gray-600 dark:text-white p-2"
                type="text"
                placeholder="Enter names"
                value={input}
                onChange={handleInputChange}
                onKeyDown={(e) => { if (e.key === "Enter") { addPlayerList(); } }} //if enter key is pressed, add player to list
            />

            <button type="button" className="text-gray-900 bg-white border border-gray-300 bg-gradient-to-r from-green-400 via-green-500 to-green-600 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                onClick={addPlayerList}>Add
            </button>
            <br />
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                onClick={() => splitListRandomly(playerList)}>Create Random Teams</button>
            <div>
                <h3 className="mt-5 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Team 1</span></h3>
                <ul>
                    {team1list.map((item, index) => (
                        <li className="text-white" key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="mt-5 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Team 2</span></h3>
                <ul>
                    {team2list.map((item, index) => (
                        <li className="text-white" key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TeamRandomizer;