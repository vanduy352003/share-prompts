"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const OtherProfile = ({params}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    console.log(params?.id);
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (params?.id) fetchPosts();
  }, []);

  const handleEdit = () => {}
  const handleDelete = () => {}

  return (
    <Profile
      name={name}
      desc={`Welcome to ${name} personalized profile page`}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default OtherProfile;
