export type StateType = {
  username: string;
  setUsername: (newName: string) => void;

  phone: string;
  setPhone: (newPhone: string) => void;

  addr: string;
  setAddr: (newAddr: string) => void;

  description: string;
  setDescription: (newDescription: string) => void;

  urgence: boolean;
  setUrgence: (value: boolean) => void;
};
