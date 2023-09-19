import React from "react";
import styles from "./LobbyPage.module.scss";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const LobbyPage = () => {
  return (
    <Layout>
      <h1>This is my lobby page</h1>
      <hr />
      <p>Some random text</p>
      <p>Some random text</p>
      <p>Some random text</p>
      <p>Some random text</p>
      <p>Some random text</p>
      <p>Some random text</p>
      <p>Some random text</p>
      <p>Some random text</p>
      <button>
        <Link to="/game">Play the game!</Link>
      </button>
    </Layout>
  );
};

export default LobbyPage;
