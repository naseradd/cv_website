#!/usr/bin/env sh
# Deploy the already-pushed main branch through the canonical Pages workflow.
set -eu
gh workflow run deploy.yml --ref main
