'use client';
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaLock, FaUser } from "react-icons/fa";
import styles from './page.module.css';
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  
  function login(){
    setLoading(true)
    signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: '/dashboard'
    })
  }

  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <div className={styles.login_title}>
          <h1>Venda <span>Fácil</span></h1>
        </div>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <FaUser />
          </InputLeftElement>
          <Input style={{paddingLeft: '35px'}} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <FaLock />
          </InputLeftElement>
          <Input style={{paddingLeft: '35px'}} type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Senha' />
        </InputGroup>
        <Button
          isLoading={loading}
          loadingText='Entrando'
          colorScheme='teal'
          variant='solid'
          onClick={login}
        >
          Entrar
        </Button>
        <div className={styles.wrapper_link}>
          <span className={styles.link_account}>Criar conta |</span>
          <span className={styles.link_account}> Recuperar senha</span>
        </div>
      </div>
    </div>
  );
}
