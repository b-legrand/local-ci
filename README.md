# @b-legrand/local-pic

Local pic to test Jenkinsfiles.

This is a small continuous integration platform based on gitea + jenkins + sonarqube + nexus

## How to Install

### 1.Clone repo

    git clone

### 2. edit local config

Edit your /etc/hosts file::

    127.0.0.1 jenkins.local
    127.0.0.1 nexus.local
    127.0.0.1 verdaccio.local
    127.0.0.1 sonar.local
    127.0.0.1 gitea.local
    127.0.0.1 adminer.local

#### 2.bis requirement for images

If you encounter the following issue:
```
sonar_1      | bootstrap check failure [1] of [1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
```

execute the commands shown [here]( https://hub.docker.com/_/sonarqube/ ) as root on the host

```sh
sysctl -w vm.max_map_count=524288
sysctl -w fs.file-max=131072
ulimit -n 131072
ulimit -u 8192
```

### 3. start docker

    docker-compose up -d
    docker-compose logs -f

### 4. ...
### 5. profit ?

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

