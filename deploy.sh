SCRIPT_DIR=$(dirname "$0")

cd $SCRIPT_DIR/dangoledevs
npm run build
cd $SCRIPT_DIR
git add .
git commit -m "Deploying from deploy script"
git subtree push --prefix dangoledevs/out origin gh-pages