cd dangoledevs
npm run build
cd ..
git add .
git commit -m "Deploying from deploy script"
git subtree push --prefix dangoledevs/out origin gh-pages