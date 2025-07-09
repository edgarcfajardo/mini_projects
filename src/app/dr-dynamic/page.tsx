"use client"



import { Loader } from "@/components/dynamic/Loader";
import { Character, Characters } from "@/models/Characters.model";
import { useEffect, useState } from "react";

const DragonBallApiPage = () => {

    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        getCharacters()
    }, [])

    const getCharacters = async () => {
        const requestApi = await fetch("https://dragonball-api.com/api/characters")
        const data: Characters = await requestApi.json();

        setCharacters(data.items)
    }

    return (
        <div className="bg-slate-100 min-h-screen">
            <header className="bg-slate-900 text-white p-5 text-center">
                <h1>Dragom Ball Characters</h1>
            </header>
            <main className="max-w-4xl mx-auto py-5">
                {
                    characters.length === 0 && (
                        <Loader />
                    )
                }

                {
                    characters.length > 0 && (
                        <div className="grid grid-cols-4 gap-5">
                            {
                                characters.map((character) => {
                                    return (
                                        <div className="text-center bg-slate-100 p-5" key={character.id}>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img className="h-60 mx-auto" src={character.image} alt={character.name} />
                                            <h3 className="font-bold">
                                                {character.name}
                                            </h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }

            </main>
        </div>
    )
}

export default DragonBallApiPage;