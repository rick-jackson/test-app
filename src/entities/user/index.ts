type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
};

export default User;
