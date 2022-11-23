interface RepositoryCard {
  title: string;
  description: string;
}

export function RepositoryCard({ title, description }: RepositoryCard) {
  
  return (
    <>
      <strong>
        {title}
      </strong>
      <p>
        {description}
      </p>
    </>
  );
}