import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
    let nomes = getUsers();
    return (
        <div>
            {nomes.map(serv => (
                <h1>{serv.nome}</h1>
            ))}
        </div>
    );
};