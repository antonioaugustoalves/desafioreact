import React, {useState, useEffect} from "react";
import Header from './components/Header';
import "./styles.css";
import api from "./services/api";

function App() {
  const [repositories, setRepositories] = useState([]);

  //list all repositories
  useEffect(()=>{
    api.get('repositories').then(response=>{
      setRepositories(response.data);
    })
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title:`Projeto de sistem ${Date.now()}`,
      url:`https://github.com/Rocketseat/repository${Date.now()}`,
      techs: ["REACT", "REACT-NATIVE", "MYSQL"]

    });
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <Header title="Listagem de repositórios"/>
      <ul data-testid="repository-list">
  {repositories.map(repo=><li key={repo.id}>{repo.title} - 
    <button onClick={() => handleRemoveRepository(`${repo.id}`)}>
        Remover
    </button>
  </li>)}
        

          
        
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
