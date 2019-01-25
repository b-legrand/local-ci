CREATE DATABASE gitea;
CREATE USER gitea with encrypted password 'gitea';
GRANT ALL PRIVILEGES ON DATABASE gitea TO gitea;

CREATE DATABASE sonarqube;
CREATE USER sonarqube with encrypted password 'sonarqube';
GRANT ALL PRIVILEGES ON DATABASE sonarqube TO sonarqube;