--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: account; Type: TABLE; Schema: public; Owner: juliana
--

CREATE TABLE public.account (
    id integer NOT NULL,
    name character varying(30),
    email character varying(30),
    phone character varying(20)
);


ALTER TABLE public.account OWNER TO juliana;

--
-- Name: account_id_seq; Type: SEQUENCE; Schema: public; Owner: juliana
--

CREATE SEQUENCE public.account_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_id_seq OWNER TO juliana;

--
-- Name: account_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: juliana
--

ALTER SEQUENCE public.account_id_seq OWNED BY public.account.id;


--
-- Name: account id; Type: DEFAULT; Schema: public; Owner: juliana
--

ALTER TABLE ONLY public.account ALTER COLUMN id SET DEFAULT nextval('public.account_id_seq'::regclass);


--
-- Data for Name: account; Type: TABLE DATA; Schema: public; Owner: juliana
--

COPY public.account (id, name, email, phone) FROM stdin;
1	Jeff	abcd@gmail.com	\N
2	Sarah	helloworld@gmail.com	\N
3	Juliana	juliana@hotmail.com	\N
5	Alexandria	orange1777@gmail.com	515-525-5151
\.


--
-- Name: account_id_seq; Type: SEQUENCE SET; Schema: public; Owner: juliana
--

SELECT pg_catalog.setval('public.account_id_seq', 5, true);


--
-- Name: account account_pkey; Type: CONSTRAINT; Schema: public; Owner: juliana
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT account_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

