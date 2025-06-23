#!/bin/bash

echo "🔁 Building your Next.js app..."
npm run build

echo "🚀 Committing and pushing to GitHub..."
git add .
git commit -m "🚀 Auto-deploy at $(date)"
git push origin main

echo "✅ Done!"
