cd ..
rm *.tgz && yarn version --patch && yarn prepare && yarn pack
cd -
yarn add ../react-native-animated-layout*
yarn start --web

