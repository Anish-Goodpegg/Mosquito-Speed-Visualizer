# Added automation
#!/bin/bash

echo "🔁 Building your Next.js app..."
npm run build

echo "💬 Enter commit message:"
read commit_message

echo "🚀 Committing and pushing to GitHub..."
git add .
git commit -m "$commit_message - $(date +'%Y-%m-%d %H:%M:%S')"
git push origin main

echo "✅ Done!"
//jksdew fgmn