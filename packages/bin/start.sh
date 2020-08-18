echo '----------- npm config and install -g pm2 ----------'
npx nvm use 14.5.0
npm config rm proxy
npm config rm https-proxy
yarn config set registry https://registry.npm.taobao.org -g
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

npm install pm2 -g
pm2 install typescript

echo '----------- rm app build folder && yarn build ----------'
cd app
rm -rf build
yarn install
yarn build
cd ../

echo '----------- rm server build folder ----------'
cd server
rm -rf build
mkdir build
yarn install
cd ../

echo '---------- copy app/build folder to server/build folder -----------'
cp -ri app/build/* server/build
cd server
yarn pro
