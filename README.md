# @hermes/pic

Local pic to test Jenkinsfiles.

Edit your /etc/hosts file::

    127.0.0.1 jenkins.local
    127.0.0.1 nexus.local
    127.0.0.1 verdaccio.local
    127.0.0.1 sonar.local
    127.0.0.1 gitea.local
    127.0.0.1 adminer.local


## Usage

Launch gogs + nexus + sonarqube + jenkins locally.

    docker-compose start

## First install

    docker-compose up

### 1. Gitea

1. go to http://gitea.local
2. Fill in gitea/gitea as usernames/password for the database
3. go to http://gitea.local/user/sign_up to create a user
4. ...
5. Profit

### 2. Jenkins

1. go to http://jenkins.local
2. access the inital admin pass in `./data/jenkins/secrets/initialAdminPassword`
3. start the install process with it.
4. ...
5. Profit

## Links

* [gogs](https://hub.docker.com/r/gogs/gogs/)
* [jenkinsci/blueocean](https://hub.docker.com/r/jenkinsci/blueocean/)
* [sonatype/nexus3](https://hub.docker.com/r/sonatype/nexus3/)
* [sonarqube](https://hub.docker.com/_/sonarqube/)
* [verdaccio](https://hub.docker.com/r/gogs/gogs/)

