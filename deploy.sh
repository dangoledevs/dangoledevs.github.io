SCRIPT_DIR=$(dirname "$0")

git add .
git commit -m "Deploying from deploy script"
git subtree push --prefix dangoledevs/out origin gh-pages