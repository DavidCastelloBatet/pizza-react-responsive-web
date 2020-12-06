import "./Clients.css";
import { clients } from "../datos";

const Clients = () => {
    
  const clientes = clients;

  return (
    <div className="clients">
      <div className="container">
        <div className="row">
          {clientes.map((client) => {
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
