import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    {
      id: "1",
      name: "kevin",
    },
    {
      id: "2",
      name: "pedro",
    },
  ];
  return (
    <div>
      <h1>ClientsPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: {
                  id: client.id,
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
