import { RaRecord, Identifier } from "react-admin";

export interface IUser extends RaRecord {
  id: Identifier;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IPost extends RaRecord {
  userId: Identifier;
  id: Identifier;
  title: string;
  body: string;
}

export interface IComment extends RaRecord {
  postId: Identifier;
  id: Identifier;
  name: string;
  email: string;
  body: string;
}
