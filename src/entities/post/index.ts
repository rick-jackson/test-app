import type User from "@entities/user";

type Post = {
  userId: User["id"];
  id: number;
  title: string;
  body: string;
};

export default Post;
