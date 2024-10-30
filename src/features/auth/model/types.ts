export interface User {
  id: number;
  username: string;
  token: string;
}

export interface AuthContextProps {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  register: (username: string, password: string) => Promise<void>;
}
