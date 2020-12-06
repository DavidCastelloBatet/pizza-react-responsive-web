import "./Clients.css";

const Clients = () => {
  const clients = [
    { id: 1, num: 120, texto: "Awesome Employes" },
    { id: 2, num: 58, texto: "Pizza Types" },
    { id: 3, num: 1468, texto: "Satisfield Clients" },
    { id: 4, num: 2031, texto: "Delivery" },
  ];

  return (
    <div className="clients">
      <div className="container">
        <div className="row">
          {clients.map((client) => {
            const { id, num, texto } = client;
            return (
              <div key={id} className="col-3">
                <div className="client">
                  <h1>{num}</h1>
                  <p>{texto}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
