create database Blogs_db;

CREATE TABLE public.blogs (
  author_id character varying(255) NOT NULL,
  author character varying(255) NOT NULL,
  blog_content character varying(8000) NULL,
  created_at timestamp without time zone NOT NULL,
  blog_id integer NOT NULL
);
ALTER TABLE
  public.blogs
ADD
  CONSTRAINT blogs_pkey PRIMARY KEY (blog_id);