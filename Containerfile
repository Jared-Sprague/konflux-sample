FROM registry.access.redhat.com/ubi9/httpd-24:latest
USER root

# update and install deps
RUN dnf update -y && dnf install java-17-openjdk lsof -y && dnf clean all

# Add and extract the solr server binaries
ADD --chown=default:root solr-8.11.3.tgz /opt/
RUN mv /opt/solr-8.11.3 /opt/solr && chown default:root /opt/solr/server /opt/solr/bin

# copy the run-solr script
COPY --chown=default:root components/load/podman/run-solr /usr/local/bin/run-solr

# Add configs
COPY components/load/podman/mimir.conf components/load/podman/ssl.conf $HTTPD_MAIN_CONF_D_PATH/

# start script
COPY --chown=default components/load/podman/start.sh start.sh

# solr portal index
COPY --chown=default components/load/solr/.solr-dist/server/solr /opt/solr/server/solr

# mimir generated static site
COPY components/load/zola/zola-project/public /var/www/html

USER default

# Start Solr and HTTPD
CMD ./start.sh