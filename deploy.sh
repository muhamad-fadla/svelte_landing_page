#!/bin/bash

tar czf site.tar.gz dist

scp site.tar.gz ubuntu@13.213.135.225:~

rm site.tar.gz

rm -rf ./../deployments/FE/public/index.html

cp dist/index.html ./../deployments/FE/public/index.html


ssh ubuntu@13.213.135.225 << 'ENDSSH'

rm -rf ~/sites/miaw.my-topup.store
mkdir ~/sites/miaw.my-topup.store
tar xf site.tar.gz -C ~/sites/miaw.my-topup.store

mv ~/sites/miaw.my-topup.store/dist/assets ~/sites/miaw.my-topup.store
mv ~/sites/miaw.my-topup.store/dist/blog-contents ~/sites/miaw.my-topup.store
mv ~/sites/miaw.my-topup.store/dist/favicon.ico ~/sites/miaw.my-topup.store
mv ~/sites/miaw.my-topup.store/dist/robots.txt ~/sites/miaw.my-topup.store

rm -rf ~/sites/miaw.my-topup.store/dist

newname=$(head /dev/urandom | tr -dc a-z0-9 | head -c 8)


mv ~/site.tar.gz ~/website_backup/miaw.my-topup.store/"$newname".tar.gz

touch ~/sites/miaw.my-topup.store/index.html

echo -e "$newname" >> ~/sites/miaw.my-topup.store/index.html

sudo systemctl restart nginx

ENDSSH

cd ./../deployments/FE
git status
git add .
git commit -m "update: resolve issuse"
git push origin main
echo "SELESAI"