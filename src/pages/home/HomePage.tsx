import React, { useState } from "react";
import { BlogsContainer } from "../../components/website/Blogs/BlogsContainer";
import { HeroSection } from "../../components/website/HeroSection/HeroSection";

export const HomePage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = { username, password };
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    console.log(response);
  };

  return (
    <>
      <HeroSection />
      <BlogsContainer />
      <form onSubmit={register}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};
