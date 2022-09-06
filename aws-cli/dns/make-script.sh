#!/bin/zsh
url=app.pinfluencer.link
alias=s3-website.eu-west-2.amazonaws.com.
profile=pinfluencer
hosted_zone=Z01651381ME2W1VJ3870R

aws_root_s3_bucket() {
  local json_file=`mktemp`
  printf '{"Comment":"Alias record for S3 bucket","Changes":[{"Action":"CREATE","ResourceRecordSet":{"Name":"%s","Type":"A","AliasTarget":{"HostedZoneId":"Z3GKZC51ZF0DB4","DNSName":"%s","EvaluateTargetHealth":true}}}]}\n' $1 $2 > $json_file
  aws --profile $profile route53 change-resource-record-sets --hosted-zone-id $3 --change-batch file://$json_file 
  rm $json_file
}

# create root bucket  for react code to be servered from
aws_root_s3_bucket $url $alias $hosted_zone
