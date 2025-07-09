import { Characters } from "@/models/Characters.model";
import Link from "next/link";


const getCharacters = async () => {
    const requestApi = await fetch("https://dragonball-api.com/api/characters")
    const data: Characters = await requestApi.json();
    return data.items;
}

const DragonBallApiPage = async () => {

    const characters = await getCharacters();



    return (
        <div className="bg-slate-100 min-h-screen">
            <header className="bg-slate-900 text-white p-5 text-center">
                <h1>Dragom Ball Characters</h1>
            </header>
            <main className="max-w-4xl mx-auto py-5">
                {
                    characters.length === 0 && (
                        <p>No se encontraron personajes</p>
                    )
                }

                {

                    <div className="grid grid-cols-4 gap-5">
                        {
                            characters.map((character) => {
                                return (
                                    <div className="text-center bg-slate-100 p-5" key={character.id}>
                                        <Link href={`/dr-dynamic-two/${character.id}`}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img className="h-60 mx-auto" src={character.image} alt={character.name} />
                                            <h3 className="font-bold">
                                                {character.name}
                                            </h3>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>

                }

            </main>
        </div>
    )
}

export default DragonBallApiPage;