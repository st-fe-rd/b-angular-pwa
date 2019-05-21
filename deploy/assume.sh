#!/usr/bin/env bash

set -xeuo pipefail

usage() {
  cat <<'EOT'
Usage: assume.sh [-a] [-h]
  -a     Approved deploy
  -h     Print this help
EOT
}

approved=false

while getopts ':a' args; do
  case "$args" in
    a)
      approved=true
      ;;
    h)
      usage
      exit 0
      ;;
    *)
      usage
      exit 1
      ;;
  esac
done

# prevent unbound error
if [[ "${CIRCLE_TAG:-dummy}" =~ v([0-9]+\.){2}[0-9]+ ]]; then
  if [[ "$approved" == true ]]; then
    aws_account_id="$AWS_ACCOUNT_ID_PRD"
    aws_env="prd"
    aws_node_env=".prod"
    aws_iam_role_external_id="$AWS_IAM_ROLE_EXTERNAL_ID_PRD"
  else
    aws_account_id="$AWS_ACCOUNT_ID_STG"
    aws_env="stg"
    aws_node_env=".${aws_env}"
    aws_iam_role_external_id="$AWS_IAM_ROLE_EXTERNAL_ID_STG"
  fi
else
  aws_account_id="$AWS_ACCOUNT_ID_DEV"
  aws_env="dev"
  aws_node_env=""
  aws_iam_role_external_id="$AWS_IAM_ROLE_EXTERNAL_ID_DEV"
fi

aws_sts_credentials="$(aws sts assume-role \
  --role-arn "arn:aws:iam::${aws_account_id}:role/CircleCI-${aws_env}" \
  --role-session-name "$CIRCLE_USERNAME" \
  --external-id "$aws_iam_role_external_id" \
  --duration-seconds "900" \
  --query "Credentials" \
  --output "json")"

cat <<EOT > "aws-envs.sh"
export AWS_ACCESS_KEY_ID="$(echo "$aws_sts_credentials" | jq -r '.AccessKeyId')"
export AWS_SECRET_ACCESS_KEY="$(echo "$aws_sts_credentials" | jq -r '.SecretAccessKey')"
export AWS_SESSION_TOKEN="$(echo "$aws_sts_credentials" | jq -r '.SessionToken')"
export AWS_ACCOUNT_ID="$aws_account_id"
export AWS_DEFAULT_REGION="ap-northeast-1"
export AWS_ENV="$aws_env"
export AWS_NODE_ENV="$aws_node_env"
export AWS_S3_BUCKET="revamp-staff-app-for-user-${aws_account_id}-${aws_env}"
export AWS_TEST_COVERAGE_BUCKET="coverage.dev.staff-app.net"
EOT