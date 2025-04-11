-- Enable pgcrypto extension for secure hashing (if needed)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    user_email TEXT NOT NULL UNIQUE,
    user_firstname text,
    user_lastname text,
    user_avatar_url TEXT,
    user_password TEXT NOT NULL,
    date_registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);