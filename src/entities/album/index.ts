import type User from "@entities/user";

type Album = {
  userId: User["id"];
  id: number;
  title: string;
};

export default Album;
