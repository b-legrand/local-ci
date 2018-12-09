# @hermes/pic

Local pic to test Jenkinsfiles.

Edit your /etc/hosts file::

    127.0.0.1 jenkins.local
    127.0.0.1 nexus.local
    127.0.0.1 verdaccio.local
    127.0.0.1 sonar.local
    127.0.0.1 gogs.local
    127.0.0.1 adminer.local


## Usage

Launch gogs + nexus + sonarqube + jenkins locally.

    docker-compose up

## Links

* [gogs](https://hub.docker.com/r/gogs/gogs/)
* [jenkinsci/blueocean](https://hub.docker.com/r/jenkinsci/blueocean/)
* [sonatype/nexus3](https://hub.docker.com/r/sonatype/nexus3/)
* [sonarqube](https://hub.docker.com/_/sonarqube/)
* [verdaccio](https://hub.docker.com/r/gogs/gogs/)

