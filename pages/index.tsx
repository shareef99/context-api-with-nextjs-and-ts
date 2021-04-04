import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAuth } from "../context/AuthContext";

export default function Home() {
    const { user, login, logout } = useAuth();

    return (
        <div className={styles.container}>
            <Head>
                <title>Context-api with TypeScript and nextJS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div>
                    <h1>Hello Context</h1>
                    <h2>User: {user ? "login" : "logout"}</h2>
                    <div>
                        <button onClick={login}>Login</button>
                        <button onClick={logout}>Logout</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
