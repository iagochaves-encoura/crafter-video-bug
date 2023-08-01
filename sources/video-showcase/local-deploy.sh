#!/bin/bash
SANDBOX_PATH=$1

echo "Making sure all deps are met"
npm install

echo "Running react build"
npm run build
 
echo "Deleting prior build"
rm -rf "$SANDBOX_PATH"/static-assets/app/*

echo "Copying app build to static assets"
cp -r dist/* "$SANDBOX_PATH"/static-assets/app/

echo "Delete react build output directory"
rm -rf ./dist

pushd "$SANDBOX_PATH" || exit
git add static-assets/app && git commit -m "chore: Deploying new version of the app"
popd || exit


curl http://localhost:8080/api/1/site/context/rebuild?token=defaultManagementToken
echo "\n Build finished"