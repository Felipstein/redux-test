import { useContext } from 'react';
import { RepoContext, RepoContextType } from '../contexts/RepoContext';

import './AddRepos.styles.css';

export function AddRepos() {
  const { addNewRepo, clearRepos } = useContext(RepoContext) as RepoContextType;

  return (
    <div className="actions">
      <button type="button" onClick={() => addNewRepo(`Repo ${Math.random()}`, 'Descrição qualquer')}>
        Adicionar repositório
      </button>

      <button type="button" onClick={clearRepos}>
        Limpar repositórios
      </button>
    </div>
  );
}