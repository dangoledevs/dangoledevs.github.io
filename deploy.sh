cd dangoledevs
npm run build
cd ..
cp CNAME dangoledevs/out
git subtree push --prefix dangoledevs/out origin gh-pages