import { useParams } from "react-router-dom";
import { FC, useEffect } from "react";

import type Post from "@entities/post";
import type User from "@entities/user";
import { useAppDispatch, useAppSelector } from "hooks";
import Snackbar from "@component/UI/Snackbar";
import Backdrop from "@component/UI/Backdrop";
import getPosts from "@store/actions/posts";
import PostCard from "../PostCard";

import * as Styled from "./index.styled";

const PostsList: FC = () => {
  const params = useParams();
  const userId = params.userId as string;

  const dispatch = useAppDispatch();
  const { posts, error, isLoading } = useAppSelector(
    (state) => state.postsReducer,
  );

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <Snackbar message={error} />
      <Backdrop open={isLoading} />
      <Styled.PostsList>
        {posts
          .filter(({ userId: id }: { userId: User["id"] }) => +userId === +id)
          .map((post: Post, index: number) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
      </Styled.PostsList>
    </>
  );
};

export default PostsList;
