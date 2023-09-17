import Listagem from "@/app/Listagem/Listagem";
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";

export default async function Dashboard() {
    let nomes = getUsers();
    return (
        <div>
            <Suspense fallback={<p>Carregando</p>}>
                <Listagem users={nomes}/>
                {nomes.map(serv => (
                    <h1>{serv.nome}</h1>
                ))}
            </Suspense>
        </div>
    );
};