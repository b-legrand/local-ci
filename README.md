# @b-legrand/local-pic

Local pic to test Jenkinsfiles.

This is a small continuous integration platform based on gitea + drone + sonarqube + nexus

## How to Install

### 1.Clone repo

    git clone

### 2. edit local config

Edit your /etc/hosts file::

    127.0.0.1 drone.local
    127.0.0.1 nexus.local
    127.0.0.1 sonar.local
    127.0.0.1 light.local
    127.0.0.1 sonar.local
    127.0.0.1 gitea.local
    127.0.0.1 admin.local
    127.0.0.1 super.local
    127.0.0.1 apm.local
    127.0.0.1 home.local
    127.0.0.1 whois.local
    127.0.0.1 auth.local
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

Launch gitea + nexus + sonarqube + drone locally.

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


<p align="center"> 
<img src="./imgs/docket_ELK.png">
</p>

# Docker ELK-APM stack

[![Elastic Stack version](https://img.shields.io/badge/ELK-6.2.3-blue.svg?style=flat)](://github.com/amalcp/Dockerized-ELK-APM-Server/issues)

Run the latest version of the ELK - APM (Elasticsearch, Logstash, Kibana, APM) stack with Docker and Docker Compose.

It will give you the ability to analyze any data set by using the searching/aggregation capabilities of Elasticsearch
and the visualization power of Kibana. APM will help you to application performance Monitoring.


## Usage

### Bringing up the stack

**Note**: In case you switched branch or updated a base image - you may need to run `docker-compose build` first

Start the ELK stack using `docker-compose`:

```console
$ docker-compose up
```

You can also choose to run it in background (detached mode):

```console
$ docker-compose up -d
```

Give Kibana a few seconds to initialize, then access the Kibana web UI by hitting
[http://localhost:5601](http://localhost:5601) with a web browser.

By default, the stack exposes the following ports:
* 5000: Logstash TCP input.
* 9200: Elasticsearch HTTP
* 9300: Elasticsearch TCP transport
* 5601: Kibana
* 8200: APM

