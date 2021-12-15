import { Grid } from "@chakra-ui/react"

import {CourseSkills} from "./Skills"
import { Course } from './course';

export const Courses = () => {
  return (
    <Grid
      mt="5"
      templateRows='repeat(2, 1fr)'
      templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)','repeat(3, 1fr)']}
      gap={10} 
    >
      <Course
        title="Curso em Vídeo - Python"
        where="Curso em Vídeo"
        coursesLink="https://www.cursoemvideo.com/curso/python-3-mundo-1/"
        status="Completo"
        about="Curso de Python dividido em 3 módulos:
        Apresentação da linguagem python, Estruturas de repetição e 
        estruturas de dados, estruturas de tuplas, 
        listas, dicionários, além disso,também ensina funções,
        módulos e pacotes e tratamentos de erros."
        >
          <CourseSkills title="Introdução a Programação"/>
          <CourseSkills title="Primeiros passos com o Python"/>
          <CourseSkills title="Condições em Python"/>
          <CourseSkills title="Repetições em Python"/>
          <CourseSkills title="Tuplas"/>
          <CourseSkills title="Listas"/>
          <CourseSkills title="Dicionários"/>
          <CourseSkills title="Funções"/>
          <CourseSkills title="Modularização"/>
          <CourseSkills title="Tratamento de erros em Python"/>
      </Course>
      <Course
        title="Curso de JavaScript e TypeScript do básico ao avançado"
        where="Udemy"
        coursesLink="https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/"
        status="Completo"
        about="Javascript moderno (ES6+) 
          para front-end (com Webpack, 
          babel, React, React Hooks, Redux, HTML5, 
          CSS3 e mais) e back-end (com Node, Express, 
          MySQL / MariaDB, MongoDB, PostgreSQL, Next.Js, 
          Strapi e mais)."
        >
          <CourseSkills title="Fundamentos"/>
          <CourseSkills title="HTML5 e CSS3"/>
          <CourseSkills title="Node.Js"/>
          <CourseSkills title="JS Tooling"/>
          <CourseSkills title="TypeScript"/>
          <CourseSkills title="Segurança"/>
          <CourseSkills title="API Rest"/>
          <CourseSkills title="React"/>
          <CourseSkills title="Bancos de dados SQL"/>
          <CourseSkills title="Design Patterns"/>
      </Course>
      <Course
        title="NLW 6 - Trilha React Native"
        where="Rocketseat"
        coursesLink="https://www.rocketseat.com.br/"
        status="Completo"
        about="Bootcamp sobre desenvolvimento mobile híbrido com react native,
        onde foi desenvolvida uma aplicação moderna para iOS e Android
        de forma nativa."
        >
          <CourseSkills title="React Native"/>
          <CourseSkills title="Typescript"/>
          <CourseSkills title="Expo"/>
          <CourseSkills title="Context API"/>
          <CourseSkills title="Async Storage"/>
          <CourseSkills title="Vector Icons"/>
          <CourseSkills title="OAuth2 Discord"/>
          <CourseSkills title="React Navigation Stack"/>
          <CourseSkills title="React Native Gesture Handler"/>
          <CourseSkills title="React Native Share"/>
      </Course>
      <Course
        title="NLW 6 - Trilha NodeJs"
        where="Rocketseat"
        coursesLink="https://www.rocketseat.com.br/"
        status="Completo"
        about="Bootcamp sobre desenvolvimento back-end, 
          onde foi desenvolvido uma aplicação com arquitetura escalável e simples para a web 
          utilizando uma linguagem flexível e popular."
        >
          <CourseSkills title="NodeJs"/>
          <CourseSkills title="Typescript"/>
          <CourseSkills title="Express"/>
          <CourseSkills title="Banco de dados SQLite"/>
          <CourseSkills title="TypeORM"/>
          <CourseSkills title="JSONWebToken"/>
          <CourseSkills title="API Rest"/>
      </Course>
      <Course
        title="NLW 6 - Trilha React"
        where="Rocketseat"
        coursesLink="https://www.rocketseat.com.br/"
        status="Completo"
        about="Bootcamp sobre desenvolvimento front-end, 
        onde foi desenvolvido uma aplicação com interface modernas e reativas na web 
        utilizando uma biblioteca modular e escalável."
        >
          <CourseSkills title="React"/>
          <CourseSkills title="Typescript"/>
          <CourseSkills title="NodeJs"/>
          <CourseSkills title="Integração com Firebase"/>
          <CourseSkills title="Estilização com Sass"/>
          <CourseSkills title="React hooks"/>
      </Course>
      <Course
        title="Ignite - Trilha React"
        where="Rocketseat"
        coursesLink="https://www.rocketseat.com.br/ignite"
        status="Em andamento"
        about="Programa de aceleração como foco em especialização, 
          para quem já domina programação, nessa trilha mostra como
          construir interfaces modernas e reativas na web utilizando 
          uma biblioteca modular e escalável."
        >
          <CourseSkills title="Fundamentos do Reacjs."/>
          <CourseSkills title="fundamentos do NextJs ."/>
          <CourseSkills title="Front-end JAMStack."/>
          <CourseSkills title="Data Fetching e cache local."/>
          <CourseSkills title="Autenticação e autorização."/>
          <CourseSkills title="Teste unitários."/>
          <CourseSkills title="Deploy de aplicações."/>
      </Course>
    </Grid>
  )
}