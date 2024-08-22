#!/bin/bash

if [ "$ENCRYPT" == "true" ]; then
    # Decrypt solr data
    echo "decrypting solr data"
    cd /opt/solr/server/solr/portal/ && openssl enc -aes-256-cbc -pbkdf2 -d -pass pass:"${ACCESS_KEY}" -in data.tar.gz.enc | tar -xzv && rm data.tar.gz.enc
    cd ~ || exit
fi

# Start solr in the background
run-solr &

# Start HTTPD in the forground
run-httpd
