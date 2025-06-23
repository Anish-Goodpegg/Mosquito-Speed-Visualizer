# 1. Find path if you don't know it - pwd
# 2. Make sure you have the right permissions - chmod +x pathname/deploy.sh
# 3. Write ~/.zshrc
# 4. alias deploy or (any name for git push)='/path/to/deploy.sh'
# 5. Ctrl + O then Enter to save
# 6. Ctrl + X to exit
# 7. Run source ~/.zshrc
# All above points are one time setup steps.
# 8. Run deploy or (any name for git push) to execute the script 


echo "🔁 Building your Next.js app..."
npm run build

echo "💬 Enter commit message:"
read commit_message

echo "🚀 Committing and pushing to GitHub..."
git add .
git commit -m "$commit_message - $(date +'%Y-%m-%d %H:%M:%S')"
git push origin main

echo "✅ Done!"