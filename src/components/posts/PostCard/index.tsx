import { FC } from "react";

import type Post from "@entities/post";
import { Divider } from "@component/users/UsersCard/index.styled";

import * as Styled from "./index.styled";

type PostCardProps = {
  post: Post;
  index: number;
};

const PostCard: FC<PostCardProps> = ({ post, index }) => {
  return (
    <Styled.PostCard>
      <Styled.PostTitle>
        {index + 1} {post.title}
      </Styled.PostTitle>
      <Divider style={{ marginTop: "8px" }} />
      <Styled.PostBody>{post.body}</Styled.PostBody>
    </Styled.PostCard>
  );
};

export default PostCard;
