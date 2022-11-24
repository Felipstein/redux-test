import { AddRepos } from "./components/AddRepos";
import { RepositoriesList } from "./components/RepositoriesList";
import { RepoProvider } from "./contexts/RepoContext";

export function App() {
  return (
    <RepoProvider>
      <RepositoriesList />
      <AddRepos />
    </RepoProvider>
  );
}