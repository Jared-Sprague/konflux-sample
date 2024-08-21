FROM registry.access.redhat.com/ubi9/httpd-24:latest
USER root
RUN dnf update -y && dnf clean all
USER default