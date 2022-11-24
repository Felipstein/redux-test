import { createContext, useState } from "react";
import { Repository } from "../types/Repository";

export interface RepoContextType {
  repositories: Repository[];
  addNewRepo: (name: string, description: string) => Repository;
  removeRepo: (id: string) => void;
  clearRepos: () => void;
}

export const RepoContext = createContext<RepoContextType | null>(null);

interface RepoProviderProps {
  children: React.ReactNode;
}

export function RepoProvider({ children }: RepoProviderProps) {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  function addNewRepo(name: string, description: string) {
    const repo = { id: crypto.randomUUID(), name, description } as Repository;

    setRepositories(prevState => ([
      ...prevState,
      repo,
    ]));

    return repo;
  }

  function removeRepo(id: string) {
    setRepositories(prevState => prevState.filter(repo => repo.id !== id));
  }

  function clearRepos() {
    setRepositories([]);
  }

  return (
    <RepoContext.Provider value={{ repositories, addNewRepo, removeRepo, clearRepos }}>
      {children}
    </RepoContext.Provider>
  );
}