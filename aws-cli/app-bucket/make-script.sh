#!/bin/zsh
url=pinfluencer.link
region=eu-west-2
profile=pinfluencer

aws_redirect() {
    aws --profile $profile  s3api --region $region create-bucket --bucket $1 --create-bucket-configuration LocationConstraint=$region

    local json_file=`mktemp`
    printf '{"RedirectAllRequestsTo":{"HostName": "%s"}}\n' $2 > $json_file

    aws --profile $profile s3api put-bucket-website --region $region --bucket $1 --website-configuration file://$json_file 

    rm $json_file
}

aws_root_s3_bucket() {
  aws --profile $profile s3api --region $region create-bucket --bucket $1 --create-bucket-configuration LocationConstraint=$region

  aws --profile $profile s3 website s3://$1/ --index-document index.html --error-document error.html

  local json_file=`mktemp`
  printf '{"Version": "2012-10-17","Statement": [{"Sid": "PublicReadGetObject","Effect": "Allow","Principal": "*","Action": "s3:GetObject","Resource": "arn:aws:s3:::%s/*"}]}\n' $1 > $json_file
  aws --profile $profile s3api put-bucket-policy --bucket $1 --policy file://$json_file 
  rm $json_file
}

# create root bucket  for react code to be servered from
aws_root_s3_bucket app.$url

# set up redirects from all subdomains to app
aws_redirect www.$url app.$url
aws_redirect $url app.$url
