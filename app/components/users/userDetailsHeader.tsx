interface UserDetailsHeaderProps {
    name: string;
    email: string;
    postCount: number;
  }
  
  export function UserDetailsHeader({ name, email, postCount }: UserDetailsHeaderProps) {
    return (
      <>
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-gray-600 mb-8">
          {email} • {postCount} posts
        </p>
      </>
    );
  }