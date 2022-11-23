import { useContext, useState } from "react";
import { RepoContext, RepoContextType } from "../contexts/RepoContext";
import { RepositoryCard } from "./RepositoryCard";

export function RepositoriesList() {
  const { repositories } = useContext(RepoContext) as RepoContextType;

  return (
    <>
      {repositories.length === 0 && (
        <h1>Nenhum repositório encontrado.</h1>
      )}
      {repositories.length > 0 && repositories.map(repository => (
        <RepositoryCard
          key={repository.id}
          title={repository.name}
          description={repository.description}
        />
      ))}
    </>
  );
}